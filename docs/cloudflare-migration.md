# Cloudflare Pages migration

Status: preparation only. Do not change DNS, disable GitHub Pages, or make the repository private until the replacement has been verified.

## Existing site

The public site is a static HTML/CSS/JavaScript project. Preserve the existing routes, language selection, independent MYR/USD pricing, design WhatsApp links, MCN email-only links, and the portfolio workflow. Do not publish GitHub Actions secrets, source uploads, private analytics, or administrative data.

## Target

- Cloudflare Pages, connected to FGESTUDIO/fgestudio.github.io.
- Production branch: main.
- Framework preset: None.
- Build command: `node scripts/build-public.mjs && SITE_ROOT=dist node --test scripts/site-integrity.test.mjs && node scripts/audit-public.mjs`.
- Build output: `dist`. Never publish the repository root.
- First deploy to the automatically assigned pages.dev address. Do not attach fgestudio.my yet.

## Verification before cutover

Confirm that the preview serves the same homepage and public routes, CSS, images, JavaScript and JSON; that language switching, pricing, contact links, portfolio assets and redirects work; and that no source-only or private files are publicly accessible. Confirm the existing YouTube and portfolio automation can continue after migration. Check current Cloudflare plan limits and GitHub integration permissions.

## Cutover

1. Keep GitHub Pages and current DNS working while preparing and testing Cloudflare.
2. Add fgestudio.my through the Cloudflare Pages Custom domains interface only after preview verification. Review the existing DNS and preserve MX, TXT, and other unrelated records.
3. Verify HTTPS, public routes and contact links on the real domain. Keep a rollback plan to the previous GitHub Pages DNS and deployment.
4. Confirm automatic deployment from the intended branch and the existing content-update workflows.
5. Only after the replacement is stable, change the repository to Private and verify that Cloudflare can still deploy from it. Do not assume repository privacy protects the published website or internal analytics.

## Preparation verification (2026-09-07)

- PR #39 remains a draft on `chore/cloudflare-pages-preparation`. Main was `bbe74eb61024c3c75467d58f6588b646cc1cd108`, with no newer main commits beyond the PR baseline.
- Actions run 34118125896 completed successfully, but that version did not build or audit the complete deployment output.
- Local verification: all 17 source/build/YouTube tests passed; the build produced 127 files, 13 HTML pages and 33 published works. All six site-integrity tests also passed against `dist`, including HTML/CSS references and contact/pricing/language contracts. The output audit checked 42 dynamic JSON asset references and byte equality for copied public files.
- Fixed missing `privacy-page.css` and `terms-page.css` in the deployment allowlist. Reject linked parent directories and linked output directories. Junction tests exercise link isolation on Windows without requiring file-symlink privileges.
- CI now builds, tests `dist`, audits public data and saves the verified artifact. No publishing or production settings are changed by CI.
- Cloudflare account access succeeded (Pages project list was empty). Creating `fgestudio-migration-preview` with production deployments disabled and only this PR branch enabled for previews failed with API error 8000011: an internal issue with the Cloudflare Pages Git installation. No successful Pages preview deployment or browser verification is claimed.
- Next: repair/reinstall the Cloudflare Pages GitHub installation for this repository, retry the preview configuration above, and verify all routes, language/market interactions, portfolio filters and contact links in the browser. Keep production deployments disabled on this test project and do not attach a custom domain.
- Existing YouTube scheduling and portfolio processing workflows are unchanged. Before cutover, verify that their bot commits trigger Cloudflare builds, including generated thumbnails/previews. Portfolio processing currently explicitly requests a GitHub Pages build; any additional Cloudflare deploy hook must be stored as an Actions secret and validated after the Git integration works. Automatic refresh on Cloudflare is not yet end-to-end verified.

## Internal analytics

Build the creator analytics separately with server-side authentication, authorization, and protected storage. Never put OAuth refresh tokens, revenue records, or private creator statistics in public static assets or the repository history.
