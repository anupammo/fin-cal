# NivesGuru Revamp Checklist

> Working tracker for [ROADMAP.md](./ROADMAP.md). Check items off as they ship; add dates in the ✅ column style `- [x] … (2026-07-25)`.
> Owner legend: **AM** = Anupam · **HB** = Hritick · **MD** = Mrinal · unassigned = open.

---

## Phase 0 — Triage & Emergency Fixes (20 Jul – 2 Aug 2026)

### Diagnosis
- [ ] Pull 24-month GSC performance export (clicks, impressions, CTR, position — by page & query)
- [ ] Check GSC **Manual Actions** and **Security Issues** panels; file reconsideration if anything is flagged
- [ ] Identify the drop: date range, affected page cohorts, affected query classes; map against known Google update dates
- [ ] Record the real current baseline: organic visitors/day (30-day avg), top-10 keyword count, indexed-page count
- [ ] Check Page Indexing report for "Crawled – not indexed" / "Duplicate" clusters
- [ ] Run CrUX / PageSpeed Insights on the 10 highest-traffic pages; log LCP/INP/CLS

### Schema emergency surgery
- [ ] Delete `LocalBusiness` `aggregateRating` + review block from `index.html`
- [ ] Delete duplicate `WebSite` JSON-LD block (the `alternateName: "EC"` one)
- [ ] Replace with one `WebSite` + one `Organization` block (logo, sameAs, contactPoint)
- [ ] Grep all 148 pages for other `aggregateRating` / `review` markup; remove every self-serving instance
- [ ] Validate 10 sample pages in Rich Results Test + Schema.org validator — zero errors/warnings

### Data correctness sweep
- [ ] Verify small-savings rates (PPF, SSY, NSC, SCSS, KVP, MIS, TD, MSSC) against the current quarter's Ministry of Finance notification
- [ ] Verify FD/RD/SB slabs for SBI, PNB, BOB, BOI, UBI against each bank's official rate page
- [ ] Update Income Tax calculator to FY 2026-27 / AY 2027-28 new-regime slabs (Budget 2026); label regime + assessment year visibly
- [ ] Verify APY, PMJJBY, PMSBY premium figures
- [ ] Add/refresh a visible "Rates updated: {date} · Source" line on every page touched
- [ ] Mirror every fix into `/hi` and `/bn` versions

### Crawl & infrastructure hygiene
- [ ] Regenerate `sitemap.xml` with real lastmod dates; resubmit in GSC
- [ ] Fix `robots.txt` (remove malformed `Allow: /ads.txt` + empty `Disallow:` lines)
- [ ] Delete `ror.xml`, `urllist.txt`, `sitemaps25022024.zip`, stray verification/demo files from web root
- [ ] Consolidate `sw.js` / `serviceWorker.js` / `pwabuilder-sw.js` into ONE service worker; version the cache; network-first for HTML
- [ ] Confirm 404 page returns HTTP 404 (not soft-200)
- [ ] Set up weekly KPI snapshot (GSC API or manual sheet): clicks/day, impressions, top queries

**Phase 0 exit gate:** ☐ all above checked · ☐ baseline documented in REVAMP-PLAN §3 table

---

## Phase 1 — Technical Rebuild (3 Aug – 13 Sep 2026)

### Decisions
- [ ] Write SSG decision doc: Eleventy vs Astro vs salvaging `nextjs-fincal` branch (criteria: static output, build speed, i18n support, contributor familiarity)
- [ ] Freeze the URL map: export all 148 live URLs to `docs/url-map.txt` as the migration contract

### Build system
- [ ] Scaffold SSG; base layout (head, meta, GA4, AdSense, favicon set, nav, footer)
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
