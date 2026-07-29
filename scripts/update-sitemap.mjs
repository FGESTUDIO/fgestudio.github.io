import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sitemapPath = path.join(repositoryRoot, "sitemap.xml");

const routes = [
  {
    location: "https://fgestudio.my/",
    paths: ["index.html", "script.js", "style.css"],
    changeFrequency: "weekly",
    priority: "1.0"
  },
  {
    location: "https://fgestudio.my/design/",
    paths: ["design/index.html", "script.js", "style.css"],
    changeFrequency: "weekly",
    priority: "0.9"
  },
  {
    location: "https://fgestudio.my/mcn/",
    paths: ["mcn/index.html", "data/youtube-stats.json", "script.js", "style.css"],
    changeFrequency: "weekly",
    priority: "0.9"
  },
  {
    location: "https://fgestudio.my/about/",
    paths: ["about/index.html", "script.js", "style.css"],
    changeFrequency: "monthly",
    priority: "0.7"
  },
  {
    location: "https://fgestudio.my/privacy-policy/",
    paths: ["privacy-policy/index.html", "privacy-page.js", "style.css"],
    changeFrequency: "yearly",
    priority: "0.4"
  },
  {
    location: "https://fgestudio.my/terms-and-conditions/",
    paths: ["terms-and-conditions/index.html", "terms-page.js", "style.css"],
    changeFrequency: "yearly",
    priority: "0.4"
  }
];

function getLastModified(paths) {
  if (process.env.SITEMAP_DATE_OVERRIDE) return process.env.SITEMAP_DATE_OVERRIDE;

  return execFileSync("git", ["log", "-1", "--format=%cs", "--", ...paths], {
    cwd: repositoryRoot,
    encoding: "utf8"
  }).trim();
}

function renderSitemap() {
  const routeEntries = routes
    .map((route) => {
      const lastModified = getLastModified(route.paths);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(lastModified)) {
        throw new Error(`Could not determine a valid last-modified date for ${route.location}`);
      }

      return [
        "  <url>",
        `    <loc>${route.location}</loc>`,
        `    <lastmod>${lastModified}</lastmod>`,
        `    <changefreq>${route.changeFrequency}</changefreq>`,
        `    <priority>${route.priority}</priority>`,
        "  </url>"
      ].join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routeEntries}\n</urlset>\n`;
}

const renderedSitemap = renderSitemap();
const checkOnly = process.argv.includes("--check");

if (checkOnly) {
  if (readFileSync(sitemapPath, "utf8") !== renderedSitemap) {
    console.error("sitemap.xml is out of date. Run: node scripts/update-sitemap.mjs");
    process.exitCode = 1;
  } else {
    console.log("sitemap.xml is up to date.");
  }
} else {
  writeFileSync(sitemapPath, renderedSitemap);
  console.log("Updated sitemap.xml from the latest Git history.");
}
