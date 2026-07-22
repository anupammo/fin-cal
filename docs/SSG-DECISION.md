# SSG Decision — Phase 1.1

_Decision doc for the ROADMAP Phase 1 rebuild. Written 2026-07-20, after inspecting the `nextjs-fincal` branch and the PSI diagnostics._

## Decision

**Eleventy (11ty) v3.** Astro is the documented runner-up. The `nextjs-fincal` branch is retired as evidence-based unsalvageable (below).

## The requirements (from REVAMP-PLAN + diagnosis)

1. **Pure static output** — GitHub Pages hosting, zero server. Non-negotiable.
2. **Byte-level control of output HTML** — 148 existing URLs must survive identically; calculator pages keep their inline vanilla-JS logic.
3. **One layout + data files** — a rate change in `rates.json` must propagate site-wide in one commit (the freshness system, Pillar 2).
4. **Zero added client JS** — PSI showed **371 KiB unused JS, TBT 610 ms, 14 long tasks** on a Moto G. The rebuild must *remove* runtime weight, not add a framework's.
5. **Three-language i18n** — EN root + `/hi/` + `/bn/` with generated hreflang.
6. **Solo-maintainer simplicity** — HTML/CSS/vanilla-JS skillset (per README tech stack); no React expertise assumed.

## Evidence: the `nextjs-fincal` branch (inspected 2026-07-20)

| Check | Finding |
|---|---|
| Migration coverage | **56 files in `app/` — only about-us, contact-us, faq-page + navbar/footer components. Zero of the ~45 calculators migrated (~5% done)** |
| Static export | `next.config.mjs` is the empty default — **no `output: 'export'`**; as configured it cannot deploy to GitHub Pages at all |
| i18n | No `hi`/`bn` structure |
| Stack | Next 15.3 + React 19 — ships a React runtime to a site whose #1 measured problem is unused JS and main-thread time |
| Activity | Last commit Apr 2025; abandoned |

**Verdict: retire.** Salvaging means writing 95% of the work *and* converting every calculator to React *and* fighting requirement 4. Nothing meaningful is lost.

## Comparison

| Criterion | **Eleventy** | Astro | Next.js (branch) |
|---|---|---|---|
| Static output for GH Pages | ✅ native, only mode | ✅ native | ⚠️ needs `output:'export'` + constraints |
| Added client JS | **0 by default** | 0 by default (islands opt-in) | ❌ React runtime always |
| Output HTML control | ✅ template = output, byte-exact | ◐ component compiler in between | ❌ hydration markup |
| Keep calculators as vanilla JS | ✅ paste into templates as-is | ✅ possible, islands tempt rewrites | ❌ rewrite as components |
| Data cascade for `rates.json` | ✅ core feature (global data → any page) | ✅ content collections | ◐ manual wiring |
| i18n for EN/HI/BN dirs | ✅ directory data + one layout | ✅ built-in i18n routing | ◐ manual |
| Skillset fit (HTML/CSS/JS, no React) | ✅ Nunjucks ≈ HTML | ◐ JSX-ish syntax | ❌ React required |
| Build speed, 150→300 pages | ✅ ms-fast | ✅ fast | ◐ slower |
| Risk of scope creep | Low | Medium (islands, integrations) | High |

**Why not Astro (the honest case for the runner-up):** Astro wins if we wanted interactive component islands or a richer authoring DX. But the calculators are already working vanilla JS — the rebuild's job is to wrap them in shared layouts, not re-author them. Eleventy's "template in, identical HTML out" is the lowest-risk path to requirement 2. If Phase 3+ ever demands rich interactive components, an Astro migration from clean 11ty templates is straightforward — the content model (front-matter + data files) transfers as-is.

## Target architecture

```
fin-cal/
├── eleventy.config.js        # URL mapping (preserve all 148), sitemap, hreflang
├── src/
│   ├── _layouts/base.njk     # ONE head/nav/footer/schema/GA/AdSense shell
│   ├── _includes/            # rate-badge, breadcrumb, FAQ block, calc shell
│   ├── _data/
│   │   ├── rates.json        # per instrument: value, effectiveFrom, sourceUrl, verifiedOn
│   │   ├── site.json         # org schema, social, analytics IDs
│   │   └── i18n/{en,hi,bn}.json
│   ├── en/ hi/ bn/           # one .njk (front-matter + content) per calculator
│   └── assets/               # calc JS modules, purged CSS
└── _site/                    # build output → GitHub Pages (URLs identical to today)
```

- **URL freeze contract:** build asserts output URL set ⊇ `docs/url-map.txt` (Phase 1.4); CI fails on any regression.
- **Migration order:** scaffold + base layout → 3 pilot pages (index, ppf, sgb) verified byte-compatible → bulk migration by template family (post-office / bank / tax / info) → hi/bn → cut over `main`.
- **The 41 crawled-not-indexed pages** get their Phase 2 depth sections (formula, rate table, FAQs) added *as front-matter data* during migration — one pass, two goals.

## Next actions (Phase 1.2)

1. `npm init` + `@11ty/eleventy` dev-dependency on a `phase1-ssg` branch
2. Export `docs/url-map.txt` from the live sitemap (the freeze contract)
3. Build `base.njk` from the current `index.html` head (post-Phase-0 clean schema)
4. Pilot: migrate `ppf-calculator` ×3 langs; diff output HTML against current files
5. GitHub Actions: build + URL-assertion + deploy to Pages
