# FGESTUDIO Website 2.0 — Master Plan

Status: approved planning baseline  
Target window: October 2026  
Applies to: ChatGPT / Codex / Work, Claude / Claude Code, and future development agents

## 1. Purpose

Website 2.0 is a full repositioning and rebuild of the FGESTUDIO web presence, not a visual patch of the current site.

The new web system must present FGESTUDIO as the parent entertainment / creator-focused studio, with independent business properties under the same brand family.

GitHub remains the long-term source of truth for project state, code, decisions, and handoff documentation.

## 2. Approved business scope

### Active company business lines

1. **FGESTUDIO MCN / Creator Support**
   - Creator cooperation
   - Channel / content support
   - Creator-facing information and applications
   - Dedicated website target: `mcn.fgestudio.my`

2. **FGE ANIME PROJECT / FGE 动画企划**
   - AI-assisted animation / AI 漫剧 development
   - Original series, characters, project pages, production updates and releases
   - Dedicated website target: `anime.fgestudio.my`

### Removed from active business positioning

**Commercial graphic design services are being retired from the active FGESTUDIO business offering.**

The Website 2.0 navigation, landing pages and primary CTAs must not continue presenting graphic design as an active core service.

Existing design work may be preserved later as historical/archive material if the owner decides it has brand value, but it must not be presented as an actively sold service unless explicitly reactivated.

### Not currently a company business line

Software / app development is currently treated as the owner's personal development activity, not an official FGESTUDIO business line.

Do not add Software, Apps, Labs or Development as an official Website 2.0 business unit unless the owner explicitly changes this decision later.

Potential future namespaces such as `labs.fgestudio.my` or `software.fgestudio.my` are reserved concepts only and are not approved launch scope.

## 3. Domain architecture

### Parent brand
- `fgestudio.my`
- Purpose: parent brand / studio identity
- Role: explain FGESTUDIO, introduce the business ecosystem, route visitors to business units, show selected projects/news, provide company-level contact and legal information.

### MCN
- `mcn.fgestudio.my`
- Purpose: dedicated MCN / creator-support property.
- It should feel like an FGESTUDIO product while having its own business-focused information architecture.

### Anime
- `anime.fgestudio.my`
- Purpose: home of FGE ANIME PROJECT / FGE 动画企划.
- It should support series/project pages, characters, releases, production information, news/updates and future expansion.

All three properties must share a recognizable FGESTUDIO design system while allowing controlled visual variation by business line.

See `docs/SITE_ARCHITECTURE_V2.md`.

## 4. Product positioning

Website 2.0 should move away from a generic service-company template.

The intended identity is:
- modern
- premium
- entertainment / creator oriented
- youthful without looking childish
- cinematic where appropriate
- restrained, high-quality motion rather than decorative overload
- clear hierarchy and strong mobile execution
- credible enough for creators, partners and business contacts

The parent site should behave like a brand/studio hub rather than a price-list landing page.

## 5. Design direction

Website 2.0 will use a shared design system documented in `docs/DESIGN_SYSTEM_V2.md`.

High-level principles:
- strong typography and spacing
- premium dark/light treatment where appropriate
- deliberate motion with smooth easing
- high-quality hero sections
- minimal visual clutter
- consistent component behavior across all sub-sites
- mobile-first responsive layouts
- accessibility and performance treated as release requirements
- no low-quality template feel
- no unnecessary "AI-looking" visual effects

Exact typography, palette, spacing tokens, component tokens and visual references remain implementation decisions until the design phase begins.

## 6. Repository and deployment strategy

### Source control
Target state:
- GitHub repository becomes **Private**.
- GitHub is the canonical source of code and project documentation.
- AI tools must read repository documentation before modifying the project.

### Deployment
Preferred production direction:
- Cloudflare Pages / Cloudflare-based delivery for public websites.
- Production changes must be validated before DNS cutover.
- Do not disable the current live deployment or make the repository private until the replacement deployment has been verified.

The existing safety sequence in `docs/cloudflare-migration.md` remains authoritative unless superseded by a tested migration plan.

### ChatGPT Sites / AI website tooling
ChatGPT Sites or similar AI site-generation/preview capabilities may be used for:
- rapid prototyping
- design exploration
- previews
- temporary experiments

They are not the canonical source of truth for the production website. Production code and approved decisions must be reflected in GitHub.

## 7. Repository privacy migration rule

The repository is currently public because the live site still depends on the existing deployment path.

The correct migration sequence is:

1. Preserve the existing live site.
2. Prepare the new/private-compatible deployment path.
3. Deploy a preview environment.
4. Verify routes, assets, responsive behavior, SEO, forms/contact links, analytics requirements and legal pages.
5. Connect the intended production domain(s).
6. Verify HTTPS/DNS and rollback capability.
7. Only then change the GitHub repository to Private.
8. Re-verify automated deployment from the private repository.

Never reverse steps 5–8 merely to achieve repository privacy faster.

## 8. Website 2.0 information architecture goals

The rebuild should separate:
- parent company identity
- MCN business conversion flows
- anime/project discovery flows
- company legal/policy content
- updates/news/project information

Do not force all businesses into one long homepage.

Each business site should have its own navigation and conversion path, with clear links back to the parent brand.

## 9. Multilingual strategy

The current website supports multiple languages. Website 2.0 should preserve multilingual readiness.

At minimum, implementation decisions must consider:
- English
- Simplified Chinese
- Bahasa Melayu

The final content model may use shared structured content instead of duplicating large text blocks across HTML/JavaScript.

Language handling must remain SEO-safe and usable on mobile.

## 10. Email / identity planning

Subdomains may also have dedicated email namespaces if later required, for example:
- company-level: `@fgestudio.my`
- MCN-specific: `@mcn.fgestudio.my`
- anime-specific: `@anime.fgestudio.my`

This is an infrastructure option, not a requirement to create every mailbox.

DNS changes for web hosting must preserve unrelated MX/TXT/SPF/DKIM/DMARC records.

## 11. Implementation phases

### Phase 0 — Baseline and preservation
- document current production behavior
- inventory routes, redirects, SEO metadata, automation and legal pages
- identify what must be preserved, retired or migrated
- avoid breaking the current live site

### Phase 1 — Architecture
- finalize parent-site sitemap
- finalize MCN sitemap
- finalize Anime sitemap
- define cross-site navigation and brand relationships
- decide content ownership and reusable data structure

### Phase 2 — Design system
- establish typography, color, spacing, grid and motion tokens
- build shared components
- define responsive behavior
- define MCN and Anime controlled variants
- validate mobile/tablet/desktop layouts

### Phase 3 — Parent site
- rebuild `fgestudio.my`
- remove active graphic-design sales positioning
- present FGESTUDIO as the parent studio
- route visitors clearly to MCN and FGE ANIME PROJECT

### Phase 4 — MCN site
- build `mcn.fgestudio.my`
- migrate/rewrite useful existing creator-support content
- define creator/business conversion path
- preserve only relevant existing automated channel data

### Phase 5 — Anime site
- build `anime.fgestudio.my`
- establish FGE ANIME PROJECT identity
- support projects/series, characters, release information and updates
- allow future expansion without restructuring the parent site

### Phase 6 — Infrastructure migration
- prepare and verify Cloudflare deployment
- configure subdomains
- verify DNS/HTTPS
- migrate production safely
- change repository to Private after successful validation

### Phase 7 — Release audit
- responsive QA
- performance audit
- accessibility checks
- SEO/canonical/sitemap/robots audit
- link/form/contact validation
- multilingual QA
- privacy/legal consistency review
- rollback verification

## 12. Non-regression / release requirements

Website 2.0 must not ship with:
- broken mobile navigation
- exposed secrets or private analytics data
- incorrect company identity
- stale graphic-design sales CTAs
- cross-domain canonical mistakes
- broken redirects
- missing legal/privacy routes
- unoptimized hero media that causes poor mobile performance
- inaccessible core navigation
- untracked third-party code with incompatible licensing

## 13. Multi-AI collaboration

This plan is vendor-neutral.

All development agents must:
1. read `AI_HANDOFF.md`
2. read `docs/PROJECT_STATE.md`
3. read this master plan
4. read `docs/SITE_ARCHITECTURE_V2.md`
5. read `docs/DESIGN_SYSTEM_V2.md` when doing UI/UX work
6. follow `docs/MULTI_AI_COLLABORATION.md`
7. inspect `docs/CURRENT_HANDOFF.md` before continuing another agent's unfinished work

No AI-specific chat history is authoritative over the repository.

## 14. Change-control rule

The following decisions are business-level and must not be silently changed by an implementation agent:
- active business lines
- retirement/reactivation of graphic-design services
- whether software development becomes an FGESTUDIO business
- primary/subdomain ownership
- paid infrastructure commitments
- legal/business policy
- company identity
- production cutover and destructive migration decisions

Implementation details may evolve as long as they remain consistent with the approved business architecture.

## 15. Current approved baseline summary

For October 2026 planning, the approved target is:

```text
FGESTUDIO
├── fgestudio.my              Parent studio / brand hub
├── mcn.fgestudio.my          MCN / creator support
└── anime.fgestudio.my        FGE ANIME PROJECT / FGE 动画企划

Graphic design services: retire from active offering
Software development: personal / outside official company scope for now
Repository: migrate to Private after deployment migration is verified
Production source of truth: GitHub
Preferred public hosting direction: Cloudflare
AI site tools: prototype / preview support, not canonical production state
```
