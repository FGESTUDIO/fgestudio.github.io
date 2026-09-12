import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
async function walk(dir) {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    assert.ok(!entry.isSymbolicLink(), `Symlink: ${entry.name}`);
    const name = path.join(dir, entry.name);
    result.push(...entry.isDirectory() ? await walk(name) : [name]);
  }
  return result;
}
const files = await walk(dist);
const names = files.map(file => path.relative(dist, file).split(path.sep).join('/'));
for (const name of names) {
  assert.doesNotMatch(name, /(^|\/)(\.[^/]+|uploads|scripts|docs|node_modules|admin|internal)(\/|$)|(?:\.map|\.ya?ml|\.md|\.pem|\.key)$|^CNAME$/i);
  if (!['_headers', 'works-2026/works.json'].includes(name)) {
    assert.deepEqual(await readFile(path.join(dist, name)), await readFile(path.join(root, name)), `Changed public file: ${name}`);
  }
}
const json = async (base, name) => JSON.parse(await readFile(path.join(base, name), 'utf8'));
const original = await json(root, 'works-2026/works.json');
const publicData = await json(dist, 'works-2026/works.json');
const expected = original.works.filter(work => work && work.published !== false && work.image && work.title_en);
assert.deepEqual(publicData.works.map(work => work.id), expected.map(work => work.id));
const fields = new Set(['id', 'published', 'concept_project', 'category', 'image', ...['cn', 'en', 'bm'].flatMap(lang => ['title', 'industry', 'format', 'focus', 'alt'].map(key => `${key}_${lang}`))]);
for (const [i, work] of publicData.works.entries()) {
  assert.deepEqual(work, Object.fromEntries(Object.entries(expected[i]).filter(([key]) => fields.has(key))));
}
const publicImages = new Set(expected.map(work => work.image.replace(/^\//, '')));
for (const name of names.filter(name => /^works-2026\/(generated|images)\//.test(name))) assert.ok(publicImages.has(name) || name === 'works-2026/images/portfolio-preview.webp', `Unpublished preview: ${name}`);
let references = 0;
async function checkValues(value) {
  if (typeof value === 'string' && /^\/?(?:images|works-2026)\//.test(value)) {
    const relative = value.replace(/^\//, '');
    assert.ok(!relative.split('/').includes('..'));
    assert.ok((await stat(path.join(dist, relative))).isFile(), `Missing dynamic asset: ${value}`);
    references++;
  } else if (value && typeof value === 'object') {
    for (const child of Object.values(value)) await checkValues(child);
  }
}
for (const name of names.filter(name => /\.(json|webmanifest)$/.test(name))) await checkValues(await json(dist, name));
console.log(`Audited ${names.length} files, ${names.filter(name => name.endsWith('.html')).length} HTML pages, ${publicData.works.length} works and ${references} dynamic asset references. Public files match source; source-only paths and unpublished generated previews excluded.`);
