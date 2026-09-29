# FGESTUDIO Website — Project State

Last collaboration setup: 2026-09-29

## Current product
Official FGESTUDIO website published at fgestudio.my using static HTML, CSS and JavaScript with GitHub Pages.

## Core areas
- Home / business entry
- Design services and pricing
- MCN / creator support
- About
- Privacy policy
- Terms and conditions
- Portfolio
- Branded 404 page
- Multilingual content and locale-aware pricing
- Automated YouTube public-stat updates
- Sitemap automation

## Technical baseline
- Static frontend; no public admin panel.
- Main branch is the production source.
- Content is distributed across HTML, `script.js`, `content.json`, structured data and assets; follow README when changing duplicated business data.
- GitHub Actions are used for automation.

## Non-regression priorities
1. Official business identity remains accurate.
2. Secrets never enter the repository.
3. Pricing is consistent across all relevant representations.
4. Multilingual and responsive behavior continues to work.
5. SEO metadata, redirects, canonical URLs, robots and sitemap remain valid.
6. Legal/business-policy wording changes only on explicit instruction.
