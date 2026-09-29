# FGESTUDIO Website — AI Handoff

## Start here
This repository is the live FGESTUDIO website. GitHub is the single source of truth for development state.

Before editing:
1. Read this file.
2. Read `docs/PROJECT_STATE.md`.
3. Read `docs/MULTI_AI_COLLABORATION.md`.
4. If continuing another AI's unfinished task, read `docs/CURRENT_HANDOFF.md`.
5. Only inspect files relevant to the requested change; do not rescan the entire repository by default.

## Working style
The user may describe desired results in casual language. Translate that into implementation work yourself.
Prefer reusing stable existing code and well-maintained open-source solutions over rebuilding from scratch.
If an external library/project is reused or adapted, check license/maintenance/security first and record it in `docs/THIRD_PARTY_REUSE.md`.
Only propose custom development when existing solutions are unsuitable.

## Project-specific guardrails
- This is a static HTML/CSS/JavaScript site published with GitHub Pages.
- Preserve the official company identity already documented in README and site content.
- Never expose API keys, secrets, credentials, private contact data, or service-account material in commits.
- Pricing/package edits must be kept consistent across all relevant content/config/schema locations documented in README.
- Legal terms, deposits, refunds, revision limits, and extra-fee rules are business policy and must not be changed without explicit user instruction.
- Preserve multilingual behavior, responsive/mobile navigation, SEO/canonical/robots/sitemap behavior, and working contact links unless the task explicitly changes them.
- Before finishing, run or reason through the repository's documented validation commands where possible.

## Autonomous execution
Normal, reversible development may be completed without repeated confirmation: code edits, refactors, tests, build/workflow fixes, branch commits, documentation updates, and low-risk dependency choices.

Ask before:
- irreversible deletion/overwrite of user/business data,
- introducing paid services,
- requiring or exposing sensitive credentials,
- unclear/incompatible licensing,
- force-push or destructive shared-branch operations,
- major product/business-direction changes.

## Finish
Update `docs/PROJECT_STATE.md`, `docs/CURRENT_HANDOFF.md` when another AI may continue, and any relevant changelog/project docs.
