# FGESTUDIO Website 2.0 — Site Architecture

Status: planning baseline  
Parent document: `docs/WEBSITE_2_0_MASTER_PLAN.md`

## 1. Architecture model

FGESTUDIO Website 2.0 uses a parent-brand + business-subdomain model.

```text
fgestudio.my
├── mcn.fgestudio.my
└── anime.fgestudio.my
```

The subdomains are first-class web properties, not simple anchors or visual sections inside the parent homepage.

## 2. Parent site — fgestudio.my

### Primary purpose
Represent FGESTUDIO as the parent studio and provide a credible overview of the organization and its active business ecosystem.

### Recommended top-level areas
- Home
- About
- Businesses / Projects
  - FGESTUDIO MCN
  - FGE ANIME PROJECT
- Updates / News (when there is enough content to justify it)
- Contact
- Privacy
- Terms / relevant legal pages

### Homepage intent
The homepage should answer:
1. What is FGESTUDIO?
2. What does FGESTUDIO currently do?
3. What are the two active business lines?
4. Where should a creator, partner or viewer go next?
5. How can a legitimate business contact reach the company?

### Must not dominate the parent site
- graphic-design service packages
- graphic-design price tables
- software/app development as an official business unit

## 3. MCN — mcn.fgestudio.my

### Primary purpose
Dedicated creator-support and MCN business property.

### Recommended areas
- Home / value proposition
- Creator support / services
- Creator network / participating channels where appropriate
- How cooperation works
- Eligibility / FAQ
- Apply / Contact
- Updates / resources if justified
- Privacy / terms where required

### Conversion model
The site should make it obvious whether the visitor is:
- a creator seeking support/cooperation
- a business/partner seeking creator collaboration
- a visitor looking for participating creator/channel information

Do not mix anime-project promotion into the main MCN conversion flow.

## 4. Anime — anime.fgestudio.my

### Brand
**FGE ANIME PROJECT / FGE 动画企划**

### Primary purpose
Public-facing home for FGESTUDIO's AI-assisted animation / AI 漫剧 work and future animation projects.

### Recommended areas
- Home
- Projects / Series
- Individual project page
- Characters
- Episodes / Watch / Release information
- News / Production updates
- About FGE ANIME PROJECT
- Contact / partnership information when appropriate

### Data model should anticipate
- multiple series
- seasons / episodes
- character profiles
- release platforms
- trailers/key visuals
- production credits
- status (concept / production / released)
- multilingual titles and descriptions

Do not hard-code the architecture around only one current series.

## 5. Cross-site navigation

Every sub-site must clearly identify itself as part of FGESTUDIO.

Recommended relationship:
- FGESTUDIO logo links to `fgestudio.my`
- business identity is visible in the sub-site header/footer
- parent site links prominently to both business sites
- sub-sites may link to one another only where contextually useful

Avoid a giant shared navigation menu containing every page from every subdomain.

## 6. Shared vs independent content

### Shared
- official company identity
- logo / brand assets
- core design tokens
- footer-level company references
- legal entity references
- common social links when applicable
- shared contact standards
- analytics/privacy rules

### Independent
- MCN-specific copy and conversion forms
- anime projects, episodes and character data
- business-specific SEO metadata
- business-specific CTAs
- site-specific hero visual language

## 7. URL principles

- Use clean, stable URLs.
- Avoid unnecessary `.html` in the public information architecture where the chosen framework/deployment supports clean paths.
- Preserve redirects from important legacy URLs when migrating.
- Each subdomain owns its own canonical URL space.
- Do not canonicalize subdomain content back to the parent domain unless content is genuinely duplicated.
- Generate separate sitemap coverage appropriate to each hostname.

## 8. Legacy graphic-design content

Current routes such as `/design/` must be reviewed during migration.

Default Website 2.0 policy:
- remove them from active navigation and sales funnels
- do not advertise obsolete packages/pricing
- decide whether to redirect, archive, or preserve selected historical work
- avoid deleting valuable SEO/history blindly before redirect impact is reviewed

## 9. Reserved future areas

The following are **not launch scope**:
- `labs.fgestudio.my`
- `software.fgestudio.my`
- app/software product pages as official FGESTUDIO business units

They may only be activated after an explicit business decision.

## 10. DNS and email coexistence

Website subdomains and email namespaces may coexist.

When changing DNS:
- preserve existing MX records
- preserve SPF/DKIM/DMARC/TXT verification records
- do not overwrite unrelated records
- treat web-hosting DNS and mail DNS as separate change sets
- verify propagation and rollback

## 11. Deployment topology

Target conceptual topology:

```text
Private GitHub repository
        ↓
verified deployment pipeline
        ↓
Cloudflare/public delivery
        ├── fgestudio.my
        ├── mcn.fgestudio.my
        └── anime.fgestudio.my
```

Do not make the repository private until the verified deployment pipeline can build/deploy from a private repository.

## 12. Architecture acceptance criteria

Architecture is ready for implementation when:
- all three site purposes are unambiguous
- no active nav depends on retired graphic-design services
- parent vs MCN vs Anime content ownership is clear
- cross-domain navigation is defined
- legacy redirects are mapped
- multilingual strategy is defined
- SEO/canonical/sitemap strategy is defined
- deployment and privacy migration order is documented
