import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const repoRoot = path.resolve(process.env.PORTFOLIO_REPO_ROOT || process.cwd());
const dataPath = path.join(repoRoot, "works-2026", "works.json");
const githubToken = process.env.GITHUB_TOKEN || "";
const modelName = process.env.PORTFOLIO_TRANSLATION_MODEL || "openai/gpt-4.1";
const skipTranslation = process.env.PORTFOLIO_SKIP_TRANSLATION === "1";

const chineseFields = ["title", "industry", "format", "focus", "alt"];
const targetLanguages = ["en", "bm"];

function cleanText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function translationSource(work) {
  const source = {};
  for (const field of chineseFields) {
    source[field] = cleanText(work[`${field}_cn`]);
  }
  source.alt ||= source.title;
  return source;
}

function sourceHash(source) {
  return crypto.createHash("sha256").update(JSON.stringify(source)).digest("hex");
}

function hasCompleteTranslations(work) {
  return targetLanguages.every((language) =>
    chineseFields.every((field) => cleanText(work[`${field}_${language}`])),
  );
}

function parseModelJson(raw) {
  const trimmed = cleanText(raw);
  const withoutFence = trimmed
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "");
  const firstBrace = withoutFence.indexOf("{");
  const lastBrace = withoutFence.lastIndexOf("}");
  if (firstBrace === -1 || lastBrace <= firstBrace) {
    throw new Error("The translation model did not return JSON.");
  }
  return JSON.parse(withoutFence.slice(firstBrace, lastBrace + 1));
}

function validateTranslation(value, language) {
  if (!value || typeof value !== "object") {
    throw new Error(`Missing ${language} translation object.`);
  }

  const result = {};
  for (const field of chineseFields) {
    result[field] = cleanText(value[field]);
    if (!result[field]) {
      throw new Error(`Missing ${language}.${field} translation.`);
    }
  }
  return result;
}

async function translate(source) {
  if (skipTranslation) {
    return null;
  }
  if (!githubToken) {
    throw new Error("GITHUB_TOKEN is required for automatic translation.");
  }

  const response = await fetch("https://models.github.ai/inference/chat/completions", {
    method: "POST",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${githubToken}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify({
      model: modelName,
      temperature: 0.2,
      messages: [
        {
          role: "system",
          content:
            "You translate Simplified Chinese design-portfolio metadata into natural professional English and Bahasa Melayu used in Malaysia. Do not invent clients, results, awards, facts, or marketing claims. Preserve brand names, product names, numbers, dimensions, ratios, and formatting. Return one JSON object only with keys en and bm. Each language object must contain exactly title, industry, format, focus, and alt.",
        },
        {
          role: "user",
          content: JSON.stringify(source),
        },
      ],
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub Models translation failed (${response.status}): ${body.slice(0, 500)}`);
  }

  const payload = await response.json();
  const raw = payload?.choices?.[0]?.message?.content;
  const parsed = parseModelJson(raw);
  return {
    en: validateTranslation(parsed.en, "en"),
    bm: validateTranslation(parsed.bm, "bm"),
  };
}

function safeRepoPath(value) {
  const normalized = cleanText(value).replace(/^\/+/, "").replaceAll("\\", "/");
  if (!normalized || normalized.includes("..") || path.isAbsolute(normalized)) {
    throw new Error(`Unsafe repository path: ${value}`);
  }
  return normalized;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function watermarkSvg(width, height) {
  const cellWidth = Math.round(clamp(width * 0.38, 280, 620));
  const cellHeight = Math.round(cellWidth * 0.52);
  const fontSize = Math.round(clamp(width * 0.036, 24, 62));
  const margin = Math.round(clamp(Math.min(width, height) * 0.025, 8, 44));
  const badgeWidth = Math.round(Math.min(width - margin * 2, clamp(width * 0.38, 180, 560)));
  const badgeHeight = Math.round(Math.min(height - margin * 2, clamp(height * 0.065, 40, 92)));
  const badgeX = width - badgeWidth - margin;
  const badgeY = height - badgeHeight - margin;
  const badgeFont = Math.round(clamp(Math.min(badgeHeight * 0.25, badgeWidth * 0.055), 12, 24));

  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <defs>
        <pattern id="fg-pattern" width="${cellWidth}" height="${cellHeight}" patternUnits="userSpaceOnUse" patternTransform="rotate(-24)">
          <text x="18" y="${Math.round(cellHeight * 0.58)}"
            font-family="Arial, Helvetica, sans-serif"
            font-size="${fontSize}"
            font-weight="800"
            letter-spacing="${Math.max(2, Math.round(fontSize * 0.08))}"
            fill="#ffffff"
            fill-opacity="0.15">FGESTUDIO</text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#fg-pattern)"/>
      <rect x="${badgeX}" y="${badgeY}" width="${badgeWidth}" height="${badgeHeight}"
        rx="${Math.round(badgeHeight * 0.22)}" fill="#020714" fill-opacity="0.68"
        stroke="#ffffff" stroke-opacity="0.25"/>
      <text x="${badgeX + Math.round(badgeWidth / 2)}" y="${badgeY + Math.round(badgeHeight * 0.57)}"
        text-anchor="middle" dominant-baseline="middle"
        font-family="Arial, Helvetica, sans-serif"
        font-size="${badgeFont}" font-weight="800"
        letter-spacing="${Math.max(2, Math.round(badgeFont * 0.11))}"
        fill="#ffffff" fill-opacity="0.9">FGESTUDIO · PORTFOLIO</text>
    </svg>
  `);
}

async function createWatermarkedPreview(work) {
  const sourceRelative = safeRepoPath(work.source_image);
  if (!sourceRelative.startsWith("works-2026/uploads/")) {
    throw new Error(`Portfolio source image must be inside works-2026/uploads/: ${sourceRelative}`);
  }

  const sourceAbsolute = path.join(repoRoot, sourceRelative);
  const safeId = cleanText(work.id).replace(/[^a-zA-Z0-9_-]/g, "");
  if (!safeId) {
    throw new Error("A portfolio work is missing a valid ID.");
  }

  const outputRelative = `works-2026/generated/${safeId}.webp`;
  const outputAbsolute = path.join(repoRoot, outputRelative);
  await fs.mkdir(path.dirname(outputAbsolute), { recursive: true });

  const base = sharp(sourceAbsolute, {
    failOn: "error",
    limitInputPixels: 268_402_689,
  })
    .rotate()
    .resize({
      width: 1800,
      height: 1800,
      fit: "inside",
      withoutEnlargement: true,
    });

  const { data, info } = await base
    .webp({ quality: 90, effort: 5, smartSubsample: true })
    .toBuffer({ resolveWithObject: true });

  await sharp(data)
    .composite([{ input: watermarkSvg(info.width, info.height), blend: "over" }])
    .webp({ quality: 88, effort: 5, smartSubsample: true })
    .toFile(outputAbsolute);

  await fs.rm(sourceAbsolute);
  return `/${outputRelative}`;
}

async function main() {
  const raw = await fs.readFile(dataPath, "utf8");
  const portfolio = JSON.parse(raw);
  if (!Array.isArray(portfolio.works)) {
    throw new Error("works-2026/works.json must contain a works array.");
  }

  let changed = false;
  for (const work of portfolio.works) {
    if (!work || typeof work !== "object") continue;

    const source = translationSource(work);
    const requiredChinese = ["title", "industry", "format", "focus"];
    const missingChinese = requiredChinese.filter((field) => !source[field]);
    if (missingChinese.length) {
      work.translation_status = `等待填写中文：${missingChinese.join("、")}`;
      changed = true;
    } else {
      const hash = sourceHash(source);
      const needsTranslation =
        !work.keep_manual_translations &&
        (cleanText(work.translation_source_hash) !== hash || !hasCompleteTranslations(work));

      if (needsTranslation) {
        const translated = await translate(source);
        if (translated) {
          for (const language of targetLanguages) {
            for (const field of chineseFields) {
              work[`${field}_${language}`] = translated[language][field];
            }
          }
          work.translation_source_hash = hash;
          work.translation_status = "已自动翻译";
          changed = true;
        }
      } else if (work.keep_manual_translations) {
        if (work.translation_status !== "保留手动翻译") {
          work.translation_status = "保留手动翻译";
          changed = true;
        }
      } else if (work.translation_status !== "已自动翻译") {
        work.translation_status = "已自动翻译";
        changed = true;
      }
    }

    if (cleanText(work.source_image)) {
      work.watermark_status = "正在生成水印预览";
      const previewPath = await createWatermarkedPreview(work);
      work.image = previewPath;
      work.source_image = "";
      work.watermark_status = "已生成 FGESTUDIO 水印预览";
      changed = true;
    } else if (cleanText(work.image) && !cleanText(work.watermark_status)) {
      work.watermark_status = "已使用安全预览图";
      changed = true;
    }
  }

  if (changed) {
    await fs.writeFile(dataPath, `${JSON.stringify(portfolio, null, 2)}\n`, "utf8");
  }
  console.log(changed ? "Portfolio automation produced updates." : "Portfolio is already up to date.");
}

await main();
