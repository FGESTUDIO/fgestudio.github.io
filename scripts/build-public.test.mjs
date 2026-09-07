import assert from "node:assert/strict";
import { test } from "node:test";
import { mkdtemp, mkdir, readFile, writeFile, access, symlink, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { buildPublicSite } from "./build-public.mjs";

const required = ["index.html", "404.html", "script.js", "style.css", "content.json", "site.webmanifest", "robots.txt", "sitemap.xml"];
async function fixture() {
  const root = await mkdtemp(path.join(os.tmpdir(), "fgestudio-public-"));
  async function put(name, content = "test") {
    const filename = path.join(root, name);
    await mkdir(path.dirname(filename), { recursive: true });
    await writeFile(filename, content);
  }
  for (const name of required) await put(name);
  await put("design/index.html", "design");
  await put("mcn/index.html", "mcn");
  await put("works-2026/index.html", "portfolio");
  await put("works-2026/portfolio.css", "css");
  await put("works-2026/portfolio.js", "js");
  await put("data/youtube-stats.json", "{}");
  await put("app-config/zhuifanbu.json", "{}");
  await put("images/logo.webp", "public image");
  await put("works-2026/generated/visible.webp", "public preview");
  await put("works-2026/generated/hidden.webp", "unpublished preview");
  await put("works-2026/images/hidden.webp", "unpublished legacy preview");
  await put("works-2026/uploads/original.png", "private original");
  await put(".github/secret.txt", "private secret");
  await put("docs/internal.md", "private docs");
  await put("scripts/internal.mjs", "private script");
  await put("CNAME", "fgestudio.my");
  await put(".pages.yml", "private CMS configuration");
  await put("works-2026/works.json", JSON.stringify({ works: [
    { id: "visible", published: true, title_en: "Visible", title_cn: "可见", image: "/works-2026/generated/visible.webp", source_image: "works-2026/uploads/original.png", translation_source_hash: "secret", concept_project: true, category: "poster" },
    { id: "hidden", published: false, title_en: "Hidden", image: "/works-2026/generated/hidden.webp" },
    { id: "pending", published: true, title_en: "Pending", source_image: "works-2026/uploads/original.png" },
  ] }));
  return { root, put, cleanup: () => rm(root, { recursive: true, force: true }) };
}

async function absent(filename) {
  await assert.rejects(access(filename), { code: "ENOENT" });
}

test("builds a separate public tree without source files or raw uploads", async () => {
  const f = await fixture();
  try {
    const result = await buildPublicSite(f.root);
    const out = path.join(f.root, "dist");
    assert.equal(result.works, 1);
    assert.equal(await readFile(path.join(out, "index.html"), "utf8"), "test");
    assert.equal(await readFile(path.join(out, "design/index.html"), "utf8"), "design");
    assert.equal(await readFile(path.join(out, "app-config/zhuifanbu.json"), "utf8"), "{}");
    assert.equal(await readFile(path.join(out, "works-2026/generated/visible.webp"), "utf8"), "public preview");
    const data = JSON.parse(await readFile(path.join(out, "works-2026/works.json"), "utf8"));
    assert.equal(data.works.length, 1);
    assert.equal(data.works[0].title_cn, "可见");
    assert.equal(data.works[0].concept_project, true);
    assert.equal("source_image" in data.works[0], false);
    assert.equal("translation_source_hash" in data.works[0], false);
    for (const name of [".github/secret.txt", "docs/internal.md", "scripts/internal.mjs", "CNAME", ".pages.yml", "works-2026/uploads/original.png", "works-2026/generated/hidden.webp"]) await absent(path.join(out, name));
    assert.equal(await readFile(path.join(f.root, "works-2026/uploads/original.png"), "utf8"), "private original");
    await buildPublicSite(f.root);
    await absent(path.join(out, "works-2026/generated/hidden.webp"));
    await absent(path.join(out, "works-2026/images/hidden.webp"));
  } finally { await f.cleanup(); }
});

test("rejects missing public preview assets rather than publishing an incomplete gallery", async () => {
  const f = await fixture();
  try {
    await writeFile(path.join(f.root, "works-2026/works.json"), JSON.stringify({ works: [{ published: true, title_en: "Missing", image: "/works-2026/generated/missing.webp" }] }));
    await assert.rejects(buildPublicSite(f.root), { code: "ENOENT" });
  } finally { await f.cleanup(); }
});

test("rejects traversal and symlinked public assets", async () => {
  const f = await fixture();
  try {
    await writeFile(path.join(f.root, "works-2026/works.json"), JSON.stringify({ works: [{ published: true, title_en: "Unsafe", image: "../../private.webp" }] }));
    await assert.rejects(buildPublicSite(f.root), /Unsafe public asset path/);
    await writeFile(path.join(f.root, "works-2026/works.json"), JSON.stringify({ works: [] }));
    await symlink(path.join(f.root, ".github"), path.join(f.root, "images/escape"), "junction");
    await assert.rejects(buildPublicSite(f.root), /Symlink in public assets/);
  } finally { await f.cleanup(); }
});

test('rejects symlinked parent directories and output directories', async () => {
  const f = await fixture();
  try {
    await rm(path.join(f.root, 'works-2026/generated'), { recursive: true });
    await symlink(path.join(f.root, '.github'), path.join(f.root, 'works-2026/generated'), 'junction');
    await assert.rejects(buildPublicSite(f.root), /Symlink/);
    await rm(path.join(f.root, 'dist'), { recursive: true });
    await symlink(path.join(f.root, '.github'), path.join(f.root, 'dist'), 'junction');
    await assert.rejects(buildPublicSite(f.root), /Symlink build output/);
    assert.equal(await readFile(path.join(f.root, '.github/secret.txt'), 'utf8'), 'private secret');
  } finally { await f.cleanup(); }
});

test("does not allow the build to delete an arbitrary directory", async () => {
  const f = await fixture();
  try {
    await assert.rejects(buildPublicSite(f.root, path.join(f.root, "images")), /dist directory/);
    assert.equal(await readFile(path.join(f.root, "images/logo.webp"), "utf8"), "public image");
  } finally { await f.cleanup(); }
});
