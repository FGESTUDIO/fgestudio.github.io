import { copyFile, lstat, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const defaultRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const rootFiles = [
  "index.html", "404.html", "about.html", "mcn.html", "privacy.html", "terms.html",
  "script.js", "404.js", "privacy-page.js", "terms-page.js", "style.css",
  "content.json", "site.webmanifest", "robots.txt", "sitemap.xml", "llms.txt",
  "favicon.ico", "favicon-48x48.png", "favicon-96x96.png", "apple-touch-icon.png",
  "icon-192.png", "icon-512.png",
];
const pageDirectories = [
  "about", "design", "mcn", "privacy", "privacy-policy", "terms",
  "terms-and-conditions", "portfolio",
];
const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif", ".avif", ".ico"]);
const pageExtensions = new Set([".html", ".css", ".js"]);
const publicWorkFields = new Set([
  "id", "published", "concept_project", "category", "image",
  ...["cn", "en", "bm"].flatMap((language) =>
    ["title", "industry", "format", "focus", "alt"].map((field) => `${field}_${language}`)),
]);

function relativePath(value) {
  if (typeof value !== "string" || !value || value.includes("\\") || value.includes("\0")) {
    throw new Error("Invalid public asset path.");
  }
  const parts = value.split("/");
  if (path.posix.isAbsolute(value) || parts.some((part) => !part || part === "." || part === ".." || part.startsWith("."))) {
    throw new Error(`Unsafe public asset path: ${value}`);
  }
  return value;
}

export async function buildPublicSite(root = defaultRoot, output = path.join(root, "dist")) {
  root = path.resolve(root);
  output = path.resolve(output);
  if (output !== path.join(root, "dist")) throw new Error("The build output must be the repository's dist directory.");
  const source = (name) => path.join(root, ...relativePath(name).split("/"));
  const destination = (name) => path.join(output, ...relativePath(name).split("/"));
  const published = new Set();

  async function copy(name, required = true) {
    const from = source(name);
    let info;
    try {
      info = await lstat(from);
    } catch (error) {
      if (!required && error.code === "ENOENT") return;
      throw error;
    }
    if (!info.isFile() || info.isSymbolicLink()) throw new Error(`Not a regular public file: ${name}`);
    await mkdir(path.dirname(destination(name)), { recursive: true });
    await copyFile(from, destination(name));
    published.add(name);
  }

  async function copyDirectory(name, extensions) {
    let entries;
    try {
      entries = await readdir(source(name), { withFileTypes: true });
    } catch (error) {
      if (error.code === "ENOENT") return;
      throw error;
    }
    for (const entry of entries) {
      const child = `${name}/${entry.name}`;
      relativePath(child);
      if (entry.isSymbolicLink()) throw new Error(`Symlink in public assets: ${child}`);
      if (entry.isDirectory()) await copyDirectory(child, extensions);
      else if (entry.isFile()) {
        if (!extensions.has(path.extname(entry.name).toLowerCase())) throw new Error(`Unexpected public asset type: ${child}`);
        await copy(child);
      } else throw new Error(`Unsupported public asset: ${child}`);
    }
  }

  // The repository root is never the deployment directory. No CMS configuration,
  // workflows, scripts, source uploads, credentials or internal analytics are copied.
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  for (const name of rootFiles) await copy(name, ["index.html", "404.html", "script.js", "style.css", "content.json", "site.webmanifest", "robots.txt", "sitemap.xml"].includes(name));
  for (const name of pageDirectories) await copyDirectory(name, pageExtensions);
  await copyDirectory("images", imageExtensions);
  await copy("data/youtube-stats.json");
  await copy("app-config/zhuifanbu.json", false);
  for (const name of ["index.html", "portfolio.css", "portfolio.js"]) await copy(`works-2026/${name}`);
  await copyDirectory("works-2026/images", imageExtensions);

  const portfolio = JSON.parse(await readFile(source("works-2026/works.json"), "utf8"));
  if (!Array.isArray(portfolio.works)) throw new Error("Invalid portfolio data.");
  const publicWorks = [];
  for (const work of portfolio.works) {
    if (!work || work.published === false || !work.image || !work.title_en) continue;
    const image = work.image.startsWith("/") ? work.image.slice(1) : work.image;
    relativePath(image);
    if (!image.startsWith("works-2026/generated/") && !image.startsWith("works-2026/images/")) {
      throw new Error(`Portfolio image is outside the public preview directories: ${image}`);
    }
    if (!imageExtensions.has(path.extname(image).toLowerCase())) throw new Error(`Invalid portfolio image: ${image}`);
    await copy(image);
    publicWorks.push(Object.fromEntries(Object.entries(work).filter(([key]) => publicWorkFields.has(key))));
  }
  await writeFile(destination("works-2026/works.json"), `${JSON.stringify({ works: publicWorks }, null, 2)}\n`);
  published.add("works-2026/works.json");

  // Cloudflare Pages reads this file from the output, not from the source root.
  await writeFile(destination("_headers"), "/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n\n/data/*\n  Cache-Control: public, max-age=300\n\n/app-config/*\n  Cache-Control: public, max-age=60, must-revalidate\n");
  published.add("_headers");
  const forbidden = [...published].filter((name) => name.startsWith(".github/") || name.startsWith("docs/") || name.startsWith("scripts/") || name.includes("/uploads/") || name.includes("/node_modules/") || name === ".pages.yml" || name === "CNAME");
  if (forbidden.length) throw new Error(`Source-only files in deployment: ${forbidden.join(", ")}`);
  return { output, files: published.size, works: publicWorks.length };
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  const result = await buildPublicSite();
  console.log(`Public build ready: ${result.files} files, ${result.works} portfolio works.`);
}
