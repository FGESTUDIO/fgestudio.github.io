import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ignoredSchemes = /^(?:mailto:|tel:|javascript:|data:|https?:\/\/|\/\/|#)/i;
const publicPages = [
  "index.html",
  "design/index.html",
  "mcn/index.html",
  "about/index.html",
  "privacy-policy/index.html",
  "terms-and-conditions/index.html"
];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === ".git") continue;
    const fullPath = path.join(directory, entry.name);
    files.push(...(entry.isDirectory() ? await walk(fullPath) : [fullPath]));
  }
  return files;
}

function stripQueryAndHash(value) {
  return value.split("#", 1)[0].split("?", 1)[0];
}

function resolveLocalReference(sourceFile, rawReference) {
  const value = stripQueryAndHash(rawReference.trim());
  if (!value || ignoredSchemes.test(value)) return null;
  if (value.startsWith("/")) return path.join(repositoryRoot, value);
  return path.resolve(path.dirname(sourceFile), value);
}

async function existsAsSiteTarget(targetPath) {
  const candidates = [targetPath, path.join(targetPath, "index.html")];
  if (!path.extname(targetPath)) {
    candidates.push(`${targetPath}.html`);
  }

  for (const candidate of candidates) {
    try {
      if ((await stat(candidate)).isFile()) return true;
    } catch {
      // Try the next GitHub Pages path mapping.
    }
  }
  return false;
}

test("all local HTML and CSS references resolve", async () => {
  const files = await walk(repositoryRoot);
  const sourceFiles = files.filter((file) => /\.(?:html?|css)$/i.test(file));
  const missing = [];

  for (const file of sourceFiles) {
    const content = await readFile(file, "utf8");
    const references = [];
    const baseHref = content.match(/<base\s+href=["']([^"']+)["']/i)?.[1] || "";
    const localBase = baseHref && !ignoredSchemes.test(baseHref)
      ? baseHref.startsWith("/")
        ? path.join(repositoryRoot, stripQueryAndHash(baseHref))
        : path.resolve(path.dirname(file), stripQueryAndHash(baseHref))
      : path.dirname(file);
    const baseSource = path.join(localBase, "__document__");

    for (const match of content.matchAll(/\b(?:href|src|poster)\s*=\s*["']([^"']+)["']/gi)) {
      references.push({ source: baseSource, value: match[1] });
    }
    for (const match of content.matchAll(/\bsrcset\s*=\s*["']([^"']+)["']/gi)) {
      for (const candidate of match[1].split(",")) {
        references.push({
          source: baseSource,
          value: candidate.trim().split(/\s+/, 1)[0]
        });
      }
    }
    for (const match of content.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/gi)) {
      references.push({ source: file, value: match[1] });
    }

    for (const reference of references) {
      const target = resolveLocalReference(reference.source, reference.value);
      if (!target) continue;
      const isInsideRepository =
        target === repositoryRoot || target.startsWith(`${repositoryRoot}${path.sep}`);
      if (!isInsideRepository || !(await existsAsSiteTarget(target))) {
        missing.push(`${path.relative(repositoryRoot, file)} -> ${reference.value}`);
      }
    }
  }

  assert.deepEqual(missing, []);
});

test("public pages are English-first with one H1 and localized URLs", async () => {
  for (const relativePath of publicPages) {
    const content = await readFile(path.join(repositoryRoot, relativePath), "utf8");
    assert.match(content, /<html lang="en">/, `${relativePath} should default to English`);
    assert.equal(
      [...content.matchAll(/<h1\b/gi)].length,
      1,
      `${relativePath} should contain exactly one H1`
    );
    assert.match(content, /rel="canonical"/, `${relativePath} needs a canonical URL`);
    assert.match(content, /hreflang="zh-Hans"/, `${relativePath} needs a Chinese alternate`);
    assert.match(content, /hreflang="ms"/, `${relativePath} needs a Malay alternate`);
  }
});

test("international pricing cannot display Malaysia-edition price artwork", async () => {
  const html = await readFile(path.join(repositoryRoot, "design/index.html"), "utf8");
  const css = await readFile(path.join(repositoryRoot, "style.css"), "utf8");
  const script = await readFile(path.join(repositoryRoot, "script.js"), "utf8");

  assert.match(html, /data-international-media-note/);
  assert.match(css, /data-market="international"[\s\S]*?\.package-image/);
  assert.match(script, /\[data-international-media-note\]/);
});

test("service rules retain the approved refund, revision and portfolio terms", async () => {
  const terms = await readFile(
    path.join(repositoryRoot, "terms-and-conditions/index.html"),
    "utf8"
  );

  assert.match(terms, /deposit paid will be refunded in full/);
  assert.match(terms, /RM10–RM20 per round or request/);
  assert.match(terms, /only after receiving the customer's written consent/);
});

test("the custom 404 page is English-first and uses the shared language preference", async () => {
  const html = await readFile(path.join(repositoryRoot, "404.html"), "utf8");
  const script = await readFile(path.join(repositoryRoot, "404.js"), "utf8");

  assert.match(html, /<html lang="en">/);
  assert.match(html, /data-language-switcher/);
  assert.match(script, /manualLanguagePreference/);
  assert.match(script, /zh-Hans/);
  assert.match(script, /Bahasa Melayu|htmlLang: "ms"/);
});
