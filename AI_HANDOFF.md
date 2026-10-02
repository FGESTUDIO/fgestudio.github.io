# FGESTUDIO Website — AI Handoff

## Start here
This repository is the live FGESTUDIO website. GitHub is the single source of truth for development state.

Before editing:
1. Read this file.
2. Read `docs/PROJECT_STATE.md`.
3. For Website 2.0 work, read `docs/WEBSITE_2_0_MASTER_PLAN.md`.
4. For Website 2.0 architecture, read `docs/SITE_ARCHITECTURE_V2.md`.
5. For Website 2.0 UI/UX work, read `docs/DESIGN_SYSTEM_V2.md`.
6. Read `docs/MULTI_AI_COLLABORATION.md`.
7. If continuing another AI's unfinished task, read `docs/CURRENT_HANDOFF.md`.
8. Only inspect files relevant to the requested change; do not rescan the entire repository by default.

## Website 2.0 business direction
The October 2026 rebuild is a business-architecture change, not merely a visual refresh.

Approved target:
- `fgestudio.my`: parent FGESTUDIO studio/brand hub.
- `mcn.fgestudio.my`: MCN / creator-support business.
- `anime.fgestudio.my`: FGE ANIME PROJECT / FGE 动画企划.
- Commercial graphic-design services are being retired from the active offering.
- Software/app development is not currently an official FGESTUDIO business line.
- The repository is intended to become Private only after a verified replacement deployment path is live.

Do not silently reverse these business decisions. The master plan is authoritative for the rebuild.

## Working style
The user may describe desired results in casual language. Translate that into implementation work yourself.
Prefer reusing stable existing code and well-maintained open-source solutions over rebuilding from scratch.
If an external library/project is reused or adapted, check license/maintenance/security first and record it in `docs/THIRD_PARTY_REUSE.md`.
Only propose custom development when existing solutions are unsuitable.

## Project-specific guardrails
- The current production site is a static HTML/CSS/JavaScript site published with GitHub Pages.
- Website 2.0 may change the implementation/deployment architecture only according to the approved migration plan.
- Preserve the official company identity already documented in README and site content.
- Never expose API keys, secrets, credentials, private contact data, or service-account material in commits.
- While legacy design/pricing pages remain live, pricing/package edits must be kept consistent across all relevant content/config/schema locations documented in README.
- Legal terms, deposits, refunds, revision limits, and extra-fee rules are business policy and must not be changed without explicit user instruction.
- Preserve multilingual behavior, responsive/mobile navigation, SEO/canonical/robots/sitemap behavior, and working contact links until their Website 2.0 replacements are verified.
- Before finishing, run or reason through the repository's documented validation commands where possible.

## Autonomous execution
Normal, reversible development may be completed without repeated confirmation: code edits, refactors, tests, build/workflow fixes, branch commits, documentation updates, and low-risk dependency choices.

Ask before:
- irreversible deletion/overwrite of user/business data,
- introducing paid services,
- requiring or exposing sensitive credentials,
- unclear/incompatible licensing,
- force-push or destructive shared-branch operations,
- major product/business-direction changes,
- production DNS cutover or other irreversible deployment changes.

## Finish
Update `docs/PROJECT_STATE.md`, `docs/CURRENT_HANDOFF.md` when another AI may continue, and any relevant Website 2.0/project docs.
