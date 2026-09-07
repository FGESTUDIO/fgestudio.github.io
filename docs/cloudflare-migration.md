# Cloudflare Pages migration

Status: preparation only. Do not change DNS, disable GitHub Pages, or make the repository private until the replacement has been verified.

## Existing site

The public site is a static HTML/CSS/JavaScript project. Preserve the existing routes, language selection, independent MYR/USD pricing, design WhatsApp links, MCN email-only links, and the portfolio workflow. Do not publish GitHub Actions secrets, source uploads, private analytics, or administrative data.

## Target

- Cloudflare Pages, connected to FGESTUDIO/fgestudio.github.io.
- Production branch: main.
- Framework preset: None.
- Build command: exit 0 (or a verified static-asset build command).
- Build output: the verified public static-asset directory. Do not publish the entire repository root without excluding source-only and private files.
- First deploy to the automatically assigned pages.dev address. Do not attach fgestudio.my yet.

## Verification before cutover

Confirm that the preview serves the same homepage and public routes, CSS, images, JavaScript and JSON; that language switching, pricing, contact links, portfolio assets and redirects work; and that no source-only or private files are publicly accessible. Confirm the existing YouTube and portfolio automation can continue after migration. Check current Cloudflare plan limits and GitHub integration permissions.

## Cutover

1. Keep GitHub Pages and current DNS working while preparing and testing Cloudflare.
2. Add fgestudio.my through the Cloudflare Pages Custom domains interface only after preview verification. Review the existing DNS and preserve MX, TXT, and other unrelated records.
3. Verify HTTPS, public routes and contact links on the real domain. Keep a rollback plan to the previous GitHub Pages DNS and deployment.
4. Confirm automatic deployment from the intended branch and the existing content-update workflows.
5. Only after the replacement is stable, change the repository to Private and verify that Cloudflare can still deploy from it. Do not assume repository privacy protects the published website or internal analytics.

## Internal analytics

Build the creator analytics separately with server-side authentication, authorization, and protected storage. Never put OAuth refresh tokens, revenue records, or private creator statistics in public static assets or the repository history.
