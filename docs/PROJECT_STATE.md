# FGESTUDIO Website — Project State

Last updated: 2026-10-02

## Current production
The existing public FGESTUDIO website is still live at `fgestudio.my` using static HTML, CSS and JavaScript with GitHub Pages.

The current production site still contains the previous business structure, including commercial graphic-design services. Do not break or remove production content casually before Website 2.0 replacement routes and redirects are ready.

## Website 2.0 status
**Planning baseline approved. October 2026 full rebuild is the next major project.**

Authoritative planning documents:
- `docs/WEBSITE_2_0_MASTER_PLAN.md`
- `docs/SITE_ARCHITECTURE_V2.md`
- `docs/DESIGN_SYSTEM_V2.md`
- `docs/cloudflare-migration.md`

## Approved Website 2.0 business structure

```text
FGESTUDIO
├── fgestudio.my              Parent studio / brand hub
├── mcn.fgestudio.my          MCN / creator support
└── anime.fgestudio.my        FGE ANIME PROJECT / FGE 动画企划
```

Business decisions:
- MCN remains an active FGESTUDIO business line.
- FGE ANIME PROJECT becomes the second active business line.
- Commercial graphic-design services are to be retired from the active offering.
- Software/app development remains personal/outside the official FGESTUDIO business scope for now.

## Repository / deployment direction
- Current repository: `FGESTUDIO/fgestudio.github.io`.
- Current repository visibility: Public.
- Target repository visibility: Private.
- Do **not** switch to Private until the replacement deployment path has been verified.
- Preferred production direction: Cloudflare-based deployment.
- GitHub remains the canonical source of truth.
- AI website-generation/preview tools may assist prototyping but do not replace the repository as canonical state.

## Current legacy production areas
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
- `main` is the current production source branch.
- Content is distributed across HTML, `script.js`, `content.json`, structured data and assets; follow README when changing duplicated legacy business data.
- GitHub Actions are used for automation.
- Cloudflare migration preparation already exists in `docs/cloudflare-migration.md`.

## Immediate next phase
Before large UI implementation:
1. inventory legacy routes/content/redirects;
2. define the final V2 sitemap for all three hostnames;
3. define the shared content/data model;
4. finalize the V2 design tokens/components;
5. prepare a safe preview deployment path;
6. keep the current public site working until replacement verification.

## Non-regression priorities
1. Official business identity remains accurate.
2. Secrets never enter the repository.
3. Existing production routes are not destroyed before migration/redirect coverage exists.
4. Multilingual and responsive behavior remains functional until replaced.
5. SEO metadata, redirects, canonical URLs, robots and sitemap remain valid.
6. Legal/business-policy wording changes only on explicit instruction.
7. Repository privacy migration must not cause a production outage.
