# FGESTUDIO Website 2.0 — Design System Direction

Status: design baseline, tokens/components to be finalized during implementation  
Parent document: `docs/WEBSITE_2_0_MASTER_PLAN.md`

## 1. Objective

Create one coherent FGESTUDIO visual system that can support:
- the parent brand site
- the MCN business site
- FGE ANIME PROJECT

The system must feel like one brand family without forcing every property to look identical.

## 2. Design character

Target attributes:
- premium
- modern
- confident
- entertainment-oriented
- youthful
- clean
- smooth
- purposeful

Avoid:
- generic SaaS-template appearance
- cheap neon/gradient overload
- excessive glass effects with poor readability
- random animation
- stock-template card walls
- fake "futuristic AI" motifs
- motion that hurts performance or usability

## 3. Shared system

All properties should share:
- FGESTUDIO core logo usage
- typography hierarchy
- spacing scale
- grid logic
- radius family
- core interaction states
- focus styles
- motion/easing language
- accessibility rules
- breakpoints
- image/media treatment standards

Site-specific accents may vary while preserving these fundamentals.

## 4. Parent-site expression

The parent site should feel like the most neutral and authoritative representation of FGESTUDIO.

Priorities:
- studio identity
- strong editorial typography
- high-quality hero
- restrained motion
- clean business/project routing
- confidence without looking corporate-generic

## 5. MCN expression

MCN may be more data/content/creator oriented.

Priorities:
- clarity
- creator credibility
- fast scanning
- strong CTAs
- clear cooperation flow
- channel/project evidence where appropriate

Do not make the MCN site visually indistinguishable from a marketing agency template.

## 6. Anime expression

FGE ANIME PROJECT may be more cinematic and expressive.

Priorities:
- key visual / character art
- series identity
- cinematic hero treatment
- release/project discovery
- strong media presentation
- richer motion where it supports storytelling

It must still retain FGESTUDIO-level navigation, typography discipline, accessibility and performance.

## 7. Motion system

Motion should communicate quality.

Required principles:
- use consistent easing curves and durations
- prefer transform/opacity-based animation
- respect `prefers-reduced-motion`
- avoid blocking interaction during decorative animation
- avoid continuous GPU-heavy backgrounds on low/mid devices
- keep scroll effects stable and reversible
- test 60 Hz and high-refresh devices
- motion should never obscure text or CTAs

## 8. Responsive system

Design mobile-first.

Required validation targets:
- small phones
- typical modern phones
- large phones
- tablets / foldable-like widths
- laptops
- desktop / wide desktop

Avoid desktop layouts merely scaled down to mobile.

Navigation, hero media, typography, grids and touch targets must have deliberate mobile states.

## 9. Performance rules

Visual ambition must not compromise loading speed.

Prefer:
- AVIF/WebP responsive media
- explicit image dimensions
- lazy loading below the fold
- preload only genuinely critical assets
- CSS/JS splitting where useful
- minimized third-party scripts
- lightweight motion
- progressive enhancement

Do not use autoplay hero video without a measured performance budget and appropriate mobile fallback.

## 10. Accessibility rules

Minimum design requirements:
- semantic heading hierarchy
- keyboard-reachable navigation
- visible focus states
- sufficient contrast
- meaningful alt text
- reduced-motion support
- readable line length
- adequate touch target sizes
- no critical information communicated only through color or motion

## 11. Component baseline

The shared system should eventually define:
- header / navigation
- business switcher
- hero
- section header
- project/business cards
- article/update cards
- CTA
- buttons and links
- badges/status labels
- media gallery
- logo/partner grid
- forms
- FAQ/accordion
- footer
- modal/drawer where required
- notification/toast only if genuinely needed

Do not create one-off styling when an existing shared component can represent the same pattern.

## 12. Token categories to finalize

Implementation must define reusable tokens for:
- color
- typography
- spacing
- radius
- shadow/elevation
- border
- layout width
- breakpoints
- motion duration
- easing
- z-index/layers

Values are intentionally not frozen in this planning document. They should be chosen from actual design exploration and then documented here or in code-level token files.

## 13. Visual QA gate

A page is not considered design-complete until reviewed for:
- desktop composition
- mobile composition
- typography consistency
- spacing rhythm
- animation quality
- contrast/accessibility
- loading behavior
- image cropping
- empty/error/loading states where applicable
- consistency with parent-brand components

## 14. Cross-AI rule

Any AI or developer may improve implementation details, but must not silently fork a separate visual language for one sub-site.

When a new reusable pattern is introduced:
1. check whether it belongs in the shared design system
2. implement it consistently
3. document material token/component changes
4. avoid duplicate near-identical components
