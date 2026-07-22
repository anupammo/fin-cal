# NivesGuru Revamp Checklist

> Working tracker for [ROADMAP.md](./ROADMAP.md). Check items off as they ship; add dates in the ✅ column style `- [x] … (2026-07-25)`.
> Owner legend: **AM** = Anupam · **HB** = Hritick · **MD** = Mrinal · unassigned = open.

---

## Phase 0 — Triage & Emergency Fixes (20 Jul – 2 Aug 2026)

### Diagnosis
> ✅ Analyzed from your GSC export + PageSpeed PDF (2026-07-20). Full write-up: [PHASE-0-DIAGNOSIS.md](./PHASE-0-DIAGNOSIS.md); baseline in [REVAMP-PLAN §3](./REVAMP-PLAN-2026.md#3-targets--kpis).
- [x] Pull 16-month GSC performance export — analyzed: clicks/impr/CTR/position by page, query, device, country (2026-07-20)
- [x] Check GSC Manual Actions and Security Issues — **both confirmed clean** ("No issues detected", 2026-07-20). No penalty → the collapse is **algorithmic**; no reconsideration request needed — recovery comes from the trust/freshness/performance fixes on re-crawl
- [x] Identify the drop — two phases: gradual demotion Mar–Sep 2025 (pos 23→53), then **impression cliff −76% Sep→Oct 2025**, flatlined since (2026-07-20)
- [x] Record the real baseline — **0.57 clicks/day** (28-day), 195 impr/day, avg pos 29.4, 197 queries in top-10, ~141 pages (2026-07-20)
- [x] Check **Page Indexing** report — **Indexed 100 / Not indexed 52**: Crawled-not-indexed **41** (Google's thin-content verdict → Phase 2 priority list), Discovered-not-indexed 8, 404s 3, Duplicates 0 (2026-07-20). Cliff = **de-ranking, not deindexing**. Full read: [PHASE-0-DIAGNOSIS.md](./PHASE-0-DIAGNOSIS.md)
- [x] Run CrUX / PageSpeed on top page — **SGB: perf 42, LCP 6.9s, CLS 0.162, TBT 610ms, no field data**; 371KiB unused JS, 26KiB unused CSS, 14 long tasks (2026-07-20). Script `scripts/psi-check.mjs` ready for the full top-10 sweep with your API key

### Schema emergency surgery
- [x] Delete `LocalBusiness` `aggregateRating` + review block from `index.html` (2026-07-20)
- [x] Delete duplicate `WebSite` JSON-LD block (the `alternateName: "EC"` one) (2026-07-20)
- [x] Replace with one `WebSite` + one `Organization` block (logo, sameAs, contactPoint) (2026-07-20)
- [x] Grep all 148 pages for other `aggregateRating` / `review` markup; remove every self-serving instance — also fixed SGB `Product`/`WebApplication` fake ratings (2026-07-20)
- [x] Validate JSON-LD locally (0 errors, all 8 touched files) — ⚠️ still run Rich Results Test in production after deploy

### Data correctness sweep
- [x] Verify small-savings rates against Jul–Sep 2026 MoF notification — PPF/NSC/SCSS/KVP/POMIS correct; **SSY fixed 8%→8.2%** (EN/HI/BN); POTD spot-checked (default 7.0 = valid official 2-yr rate; official tenures 6.9/7.0/7.1/7.5); generic RD is a user-editable tool, default illustrative (2026-07-20)
- [x] Verify FD/RD/SB slabs for SBI, PNB, BOB, BOI, UBI — **verified: no hardcoded bank rates exist anywhere on these 15 pages.** Calculators use a user-set rate slider (1–15%) and prose contains zero percentage claims → nothing to drift stale (2026-07-20). Adding sourced current-rate tables = Phase 2 content enhancement
- [x] Update Income Tax calculator to FY 2026-27 / AY 2027-28 new-regime slabs (Budget 2026); label regime + assessment year visibly — rebuilt as correct progressive calc, verified in-browser (2026-07-20). ⚠️ EN only; marginal relief not yet applied
- [x] Verify APY, PMJJBY, PMSBY premium figures — **PMJJBY fixed** (stale "₹330/2021" prose → ₹436, EN/HI/BN); PMSBY ₹20 & APY ₹42–₹1,454 verified correct (2026-07-20)
- [x] Add/refresh a visible "Rates updated: {date} · Source" line on rate pages touched — added (localized) to SSY ×3 + MIS strong page (2026-07-20). Sitewide rollout becomes automatic via `rates.json` in Phase 1
- [x] Mirror every fix into `/hi` and `/bn` versions — SSY (rate + verified line) and PMJJBY (premium) mirrored ×3 langs. Note: income-tax & MIS-strong pages have no hi/bn counterpart yet (create in Phase 2)

### Crawl & infrastructure hygiene
- [x] Regenerate `sitemap.xml` with real lastmod dates (from git history) (2026-07-20). *Resubmit in GSC on deploy day — tracked in [PHASE-0-STATUS.md](./PHASE-0-STATUS.md) deploy checklist*
- [x] Fix `robots.txt` (remove malformed `Allow: /ads.txt` + empty `Disallow:` lines) (2026-07-20)
- [x] Delete `ror.xml`, `urllist.txt`, `sitemaps25022024.zip` from web root (2026-07-20)
- [x] Consolidate `sw.js` / `serviceWorker.js` / `pwabuilder-sw.js` into ONE service worker; version the cache; network-first for HTML (2026-07-20)
- [x] Confirm 404 page returns HTTP 404 (not soft-200) — verified live: `nivesguru.in/<missing>` → **404**, pages → 200 (2026-07-20)
- [x] Set up weekly KPI snapshot: `scripts/kpi-snapshot.mjs` — feed it the weekly GSC Chart.csv export → appends dated row to `docs/kpi-log.csv` (clicks/day, impr/day, CTR, position, WoW deltas). First row logged (2026-07-20)

> **Handoff:** code-side Phase 0 is complete — see [PHASE-0-STATUS.md](./PHASE-0-STATUS.md). Remaining items (GSC diagnosis 0.1, rate verification 0.3, income-tax FY2026-27 0.4) need your external access / official figures.

**Phase 0 exit gate:** ✅ all above checked (2026-07-20) · ✅ baseline documented in [REVAMP-PLAN §3](./REVAMP-PLAN-2026.md#3-targets--kpis) — **PHASE 0 COMPLETE.** Diagnosis: no penalty, no deindexing — algorithmic quality demotion; 41 crawled-not-indexed pages = Phase 2 priority list ([PHASE-0-DIAGNOSIS.md](./PHASE-0-DIAGNOSIS.md))

---

## Phase 1 — Technical Rebuild (3 Aug – 13 Sep 2026)

### Decisions
- [x] Write SSG decision doc — **Eleventy chosen**, Astro runner-up, `nextjs-fincal` retired with evidence (only ~5% migrated, no static-export config, React runtime conflicts with CWV goals). See [SSG-DECISION.md](./SSG-DECISION.md) (2026-07-20)
- [x] Freeze the URL map: all 148 live URLs exported to `docs/url-map.txt`; enforced by `scripts/assert-urls.mjs` (`npm run check`, `--complete` at cutover) (2026-07-20)

### Build system
- [x] Scaffold SSG: Eleventy 3.1.6 installed; `eleventy.config.js` (flat `.html` output = URL contract); `src/_layouts/base.njk` (one head: GA4, AdSense, clean schema, meta/og/twitter, favicons, canonical, generated hreflang); `_data/site.json` + `_data/rates.json`; en/hi/bn dir data with permalink rules. **Pilot: ppf-calculator migrated — body byte-identical to live page, all head probes pass, JSON-LD valid, 0.2s build** (2026-07-20)
- [ ] Template partials: schema (WebSite/Org, BreadcrumbList, FAQPage, WebApplication), hreflang trio generator
- [ ] `data/rates.json` — every instrument & bank rate with `effectiveFrom`, `sourceUrl`, `verifiedOn`
- [ ] Per-calculator content files (front-matter: title, description, formula, FAQ entries) × EN/HI/BN
- [ ] Migrate all 148 pages; build-time assertion: output URL set ⊇ `url-map.txt`
- [ ] Calculator JS refactored to shared modules (no per-page copy-paste logic)

### Performance
- [ ] Purge Bootstrap to used selectors (or replace with ~15 KB custom CSS); inline critical CSS
- [ ] Convert remaining PNG/JPEG to webp/avif with `srcset`; explicit width/height everywhere (CLS)
- [ ] Lazy-load AdSense units below the fold; reserve ad-slot dimensions
- [ ] `font-display: swap` / system font stack; preconnect only what's used
- [ ] Lab check on 10 heaviest pages: LCP < 2.0s, INP < 200ms, CLS < 0.1 (throttled Moto-G class)

### Automation
- [ ] Build-time `sitemap.xml` (lastmod from git/content dates) + `llms.txt`
- [ ] GitHub Actions: PR build check + deploy to Pages on merge to `main`
- [ ] Deploy in batches (EN → HI → BN); watch GSC indexing after each batch for 1 week

**Phase 1 exit gate:** ☐ one-commit rate change propagates site-wide · ☐ CWV lab targets met · ☐ zero URL regressions

---

## Phase 2 — Trust & Content Depth (24 Aug – 18 Oct 2026)

### E-E-A-T surface
- [ ] Author bio pages (Anupam, Hritick, Mrinal + any reviewer) with credentials, photo, `Person` + `ProfilePage` schema, sameAs links
- [ ] Byline + "Last reviewed: {date}" component on every calculator template
- [ ] Editorial & Data Policy page (sourcing, update cadence, corrections contact)
- [ ] Rewrite About page: who runs the site, why, contact routes
- [ ] Footer disclaimer: educational tool, not investment advice (YMYL hygiene)

### Page depth (run per calculator — track in a sheet, 45 pages)
- [ ] "How it's calculated" section: formula + one worked example with real numbers
- [ ] Current-rate table with official source link + verified date
- [ ] 5–8 genuine FAQs (from GSC queries + People-Also-Ask) with `FAQPage` schema
- [ ] 2–4 comparison cross-links (e.g., PPF ↔ SSY ↔ FD ↔ NSC)
- [ ] Meta title/description rewritten against current top-ranking SERP competitors

### Architecture
- [ ] Category hub pages: Post Office Schemes · Bank Deposits · Tax · Mutual Funds/SIP · Pension & Insurance
- [ ] Breadcrumbs (visible + schema) on every page, hub-linked
- [ ] HI/BN parity for top-20-traffic calculators (native phrasing, not machine-translation dumps)

**Phase 2 exit gate:** ☐ 100% EN pages have byline/date/citations · ☐ FAQ rich results in GSC · ☐ hubs indexed

---

## Phase 3 — Growth Engine (5 Oct – 13 Dec 2026)

### Research first
- [ ] Keyword-gap doc: GSC queries we rank 11–30 for; Keyword Planner volumes; HI/BN query set; competitor coverage map
- [ ] Priority-score every candidate page (volume × intent fit × effort); publish order locked

### Bank expansion (template-driven; EN+HI+BN each)
- [ ] HDFC — FD / RD / SB
- [ ] ICICI — FD / RD / SB
- [ ] Axis — FD / RD / SB
- [ ] Kotak — FD / RD / SB
- [ ] Canara — FD / RD / SB
- [ ] IDBI — FD / RD / SB
- [ ] IPPB — SB (+ others if rates published)

### New calculators
- [ ] Home Loan EMI (amortization table + prepayment)
- [ ] Car Loan EMI · [ ] Personal Loan EMI
- [ ] Gratuity · [ ] HRA exemption · [ ] Salary in-hand (CTC)
- [ ] EPF corpus · [ ] XIRR (mutual fund returns) · [ ] Retirement/FIRE corpus

### Hubs & scenarios
- [ ] "Post Office interest rates — {current quarter}" hub (quarterly refresh slot)
- [ ] "Bank FD rates compared" hub
- [ ] Scenario pages only where keyword data justifies; each has unique computed table; thin ones stay noindex

**Phase 3 exit gate:** ☐ 220+ pages indexed · ☐ new cohort earning impressions ≤ 14 days from publish

---

## Phase 4 — Distribution & Authority (19 Oct 2026 – Feb 2027, ongoing)

- [ ] Embeddable widget (iframe/script) with attribution link + "Embed this calculator" CTA on top-10 pages
- [ ] Outreach list: 30 Indian personal-finance blogs/newsletters (EN/HI/BN) — pitch widget + data drops
- [ ] Quarterly rate-change post engineered for Discover (large image, entity-rich, timely) — first: Oct 2026 rates
- [ ] Budget 2027 live plan (1 Feb 2027): tax calculator updated same-day + explainer post
- [ ] YouTube Shorts pipeline: 2/week, each ending on a tool link
- [ ] Data-drop PR pieces: "₹10K/month SIP since 2016", "PPF vs inflation over 15 years"
- [ ] GA4 channel group for AI referrals (chatgpt.com, gemini.google.com, perplexity.ai, copilot); monthly trend review
- [ ] Social profiles (FB/X/IG/LinkedIn/YT) audited: live links, consistent branding, link to site

**Phase 4 exit gate:** ☐ 25+ new referring domains · ☐ Discover impressions trending up · ☐ AI referrals measurable

---

## Phase 5 — Compounding & Operations (Dec 2026 →, permanent)

- [ ] Quarterly rate SOP documented (`docs/SOP-rate-update.md`) + calendar reminders: 1 Jan / 1 Apr / 1 Jul / 1 Oct, RBI MPC dates, Budget day
- [ ] Rate-change → live in < 24h drill executed once (Jan 2027 small-savings notification)
- [ ] Weekly 30-min KPI ritual running (clicks/day vs target line, CWV field data, indexation, RPM)
- [ ] Quarterly decay review: bottom-10% pages refreshed or pruned
- [ ] 8.5K/day milestone post-mortem written when reached

**Project success gate:** ☐ ≥ 8,500 organic visitors/day, 30-day average, by 31 Mar 2027
