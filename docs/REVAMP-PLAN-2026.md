# NivesGuru Revamp Plan — July 2026

> **Mission:** Recover — and then exceed — the site's all-time record of **8,500+ organic visitors/day**, sustainably, by Q1 2027.

- **Site:** [https://nivesguru.in](https://nivesguru.in)
- **Prepared:** 18 July 2026
- **Working branch:** `v2026`
- **Companion docs:** [ROADMAP.md](./ROADMAP.md) · [CHECKLIST.md](./CHECKLIST.md)

---

## 1. Where We Are (Audit Summary — July 2026)

### 1.1 What the site is

A static, hand-authored HTML site of **~45 financial calculators for India** (SIP, EMI, PPF, SSY, NSC, FD/RD/SB across SBI/PNB/BOB/BOI/UBI, GST, Income Tax, etc.) in **three languages** (English, Hindi `/hi`, Bengali `/bn`) — **148 HTML pages total**. Bootstrap 5 UI, GA4, AdSense, PWA with offline support, per-page JSON-LD and hreflang.

### 1.2 What is working (keep and protect)

| Strength | Why it matters in 2026 |
|---|---|
| **Tool intent** (calculators, not articles) | Interactive tools are the most resilient page type against Google AI Overviews / AI Mode answer absorption. People still need to *use* a calculator. |
| **Clean, keyword-rich URLs** | `/ppf-calculator`, `/sbi-fd-calculator` — no restructure needed; preserve every URL. |
| **hreflang EN/HI/BN with x-default** | Correctly implemented; Hindi/Bengali finance queries are an underserved, growing segment. |
| **Bank × product matrix** (5 banks × FD/RD/SB) | Proven programmatic-SEO template ready to scale. |
| **PWA + AdSense + GA4 already wired** | Monetization and measurement don't need rebuilding. |

### 1.3 What is broken or risky (root-cause candidates for the traffic drop)

Ranked by likely impact:

1. **🔴 Spam-risk structured data.** `index.html` carries a `LocalBusiness` block with a **self-serving `aggregateRating` (5.0, 80 reviews)** and a review that is about web-development services, not the calculator site ("Job done within 24 hours… contact him for my website"). Self-serving review markup violates Google's structured-data policies and on a **YMYL finance site** this invites algorithmic devaluation or a manual action. There are also **two duplicate `WebSite` blocks** (one with `alternateName: "EC"`).
2. **🔴 Staleness signals.** `sitemap.xml` `<lastmod>` values are overwhelmingly from **2024** (newest single entry: Aug 2025). Interest rates (FD/PPF/SSY/NSC change quarterly; RBI repo moves affect EMI expectations) are hardcoded per page and drift out of date. For finance queries, freshness is a direct ranking input — and stale rates destroy trust *and* return visits.
3. **🔴 No E-E-A-T surface.** No named authors with credentials on calculator pages, no editorial/review policy, no "last reviewed" dates, no citations to RBI / India Post / Ministry of Finance sources. Post-2024 core updates, YMYL pages without demonstrable expertise have been systematically demoted.
4. **🟠 148 hand-maintained files.** Every head tag, nav, rate figure, and schema block is copy-pasted 148×. Updates are slow and error-prone (this is *why* rates go stale). No templating/build system on this branch.
5. **🟠 Page weight & Core Web Vitals risk.** `index.html` alone is 109 KB of HTML; full Bootstrap (220 KB) ships to every page; legacy PNGs alongside webp; **three service-worker files** (`sw.js`, `serviceWorker.js`, `pwabuilder-sw.js`) risk cache conflicts serving outdated pages. INP and LCP on mid-range Android (the core audience device) are unverified.
6. **🟠 Outdated tax logic.** The Income Tax calculator must reflect **FY 2026-27 (AY 2027-28) new-regime slabs** post-Budget 2026, plus the Income-tax Act 2025 terminology ("tax year"). A tax calculator with old slabs is worse than none.
7. **🟡 Housekeeping.** `robots.txt` has a malformed block (`Allow: /ads.txt`, empty `Disallow:`); `ror.xml`/`urllist.txt` are dead formats; a `sitemaps25022024.zip` sits in the web root; stale branches (`nextjs-fincal`, `seo-urls`, `NewCalculators`) hold unmerged ideas.

### 1.4 The 2026 search landscape (what changed since the 8.5K/day peak)

- **AI Overviews & AI Mode** now absorb most "what is PPF" / "ppf interest rate" informational clicks. **Strategy: stop competing for definitions; win the *do* intent (calculate/compare/plan) where AI answers still hand off to tools.**
- **AI assistants cite tools.** ChatGPT/Gemini/Claude recommend calculators to users; being crawlable, fast, clearly described (`llms.txt`, clean schema) earns referrals from a channel that didn't exist at the peak.
- **E-E-A-T is table stakes for YMYL.** Anonymous finance sites lost across 2024–2025 core updates; sites with named experts, review dates, and citations recovered.
- **Discover + vernacular growth.** Hindi/Bengali finance content on mobile is still under-supplied; Discover rewards fresh, entity-rich pages — quarterly rate-change updates are perfect Discover fodder.
- **INP replaced FID**; heavy main-thread work on ad-loaded pages is now a measured ranking input.

---

## 2. Strategy — Five Pillars

### Pillar 1: Trust (E-E-A-T for YMYL) — *the recovery unlock*

- Remove all self-serving/irrelevant review & rating schema **immediately** (single highest-leverage fix).
- One canonical `WebSite` + `Organization` schema; per-page `WebApplication`/`FAQPage`/`BreadcrumbList` only where content genuinely matches.
- Named author + reviewer on every calculator: "Written by X, reviewed by Y — Last reviewed: {date}" with real author bio pages (existing team: Anupam, Hritick, Mrinal + contributors).
- Cite primary sources on every page: RBI, India Post, NSI, incometax.gov.in, bank rate pages — with "rates verified on {date}".
- Publish an **Editorial & Data Policy** page (how rates are sourced, update cadence, correction policy) and a proper About page with credentials.

### Pillar 2: Freshness as a system (not an event)

- **Single source of truth for rates:** one `rates.json` (per instrument, per bank, with `effectiveFrom` + source URL). Pages render from data; one edit updates every affected page *and* its `lastmod`.
- **Quarterly SOP** (small-savings rates: Jan/Apr/Jul/Oct; RBI MPC dates; Budget day): update data file → rebuild → auto-regenerated sitemap → request indexing. Target: rates live **within 24h** of any official change.
- Every calculator shows a visible **"Rates updated: {date}"** badge — trust signal for users, freshness signal for crawlers.

### Pillar 3: Technical rebuild (make Pillars 1–2 cheap)

- Migrate the 148 static files to a **static site generator (Eleventy or Astro)** — same URLs, same static-hosting output, zero server cost. One layout template + one data file per calculator replaces 148 hand-edited heads. *(Evaluate salvaging the `nextjs-fincal` branch; but SSG output must stay pure-static for GitHub Pages.)*
- Performance budget: **LCP < 2.0s, INP < 200ms, CLS < 0.1 on mid-range Android**; PurgeCSS-trimmed Bootstrap (or CSS rewrite), self-hosted critical CSS, lazy AdSense below the fold, one service worker with versioned cache, webp/avif everywhere.
- Regenerate `sitemap.xml` at build time with true lastmods; fix `robots.txt`; delete `ror.xml`, `urllist.txt`, zip archives from web root; add `llms.txt`.

### Pillar 4: Content & keyword expansion (the growth engine)

- **Deepen every calculator page:** intent-matched sections — how it's calculated (formula, worked example), current rate table with source, 5–8 real FAQs (with `FAQPage` schema), comparison links ("PPF vs SSY vs FD").
- **Programmatic expansion, tier by tier:**
  - Banks: add HDFC, ICICI, Axis, Kotak, Canara, IDBI, IPPB × FD/RD/SB (proven template; high-volume "hdfc fd calculator" class queries).
  - Scenario pages where volume justifies: "SIP ₹5,000 for 10 years", "FD ₹1 lakh for 5 years" (only with unique computed content — no thin doorways).
  - Rate hub pages: "Post Office interest rates Oct 2026", "FD rates compared" — quarterly-refreshed, Discover-friendly, internal-link hubs.
- **Missing high-volume calculators:** Home/Car/Personal-loan EMI (dedicated pages), Gratuity, HRA, Salary/CTC in-hand, EPF, Mutual-fund XIRR, RD goal planner, FIRE/retirement corpus.
- **Language parity:** every new EN page ships with HI + BN within the same sprint; hreflang generated by the build.

### Pillar 5: Distribution & measurement

- **Discover play:** rate-change news cards (quarterly), Budget-day tax-calculator update post — entity-rich, image-led.
- **Digital PR / links:** free embeddable calculator widget (attribution link), data snippets journalists can cite ("what ₹10K SIP since 2016 is worth today"), outreach to PF/finance bloggers in HI/BN space.
- **AI-referral readiness:** `llms.txt`, descriptive meta, clean semantics — measure `chatgpt.com` / `gemini` referrals in GA4.
- **YouTube Shorts** (existing channel @nivesguru-india): 30-sec "calculate your X" clips linking to tools.
- **KPI dashboard** (GSC + GA4): clicks/day, indexed pages, CWV pass rate, top-10 keyword count, AdSense RPM. Review weekly.

---

## 3. Targets & KPIs

| Metric | Baseline (audit, Jul 2026) | Dec 2026 | Mar 2027 |
|---|---|---|---|
| Organic visitors/day | *establish from GSC in Phase 0* | 5,000 | **8,500+ (record) → 12,000 stretch** |
| Indexed, non-duplicate pages | ~146 | 220 | 300+ |
| Pages passing CWV (mobile) | unverified | 90% | 100% |
| Keywords in top 10 (IN) | *establish in Phase 0* | +50% | +150% |
| Rate freshness lag | months | < 7 days | **< 24 hours** |
| Pages with author + review date | 0 | 100% (EN) | 100% (EN/HI/BN) |

> ⚠️ Phase 0 must pull the *actual* current GSC baseline before targets are finalized — the numbers above assume a significant decline from the 8.5K peak; recalibrate once real data is in hand.

## 4. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Migration breaks URLs/rankings | Freeze URL map; build-time diff of old vs new URL list; 301 only if unavoidable; migrate in batches with GSC monitoring |
| Schema cleanup temporarily drops rich results | Accept it — invalid rich results are a liability; valid `FAQPage`/`BreadcrumbList` will replace them |
| Programmatic pages read as thin/doorway | Ship only pages with unique computed tables, real FAQ content, and genuine search volume; noindex anything thin |
| AdSense hurts INP/LCP | Lazy-load ad units below the fold; reserve slot dimensions (CLS); measure before/after |
| Solo/small-team bandwidth | The SSG rebuild (Phase 1) is what makes every later phase cheap — do not skip it to chase content first |

## 5. Governance

- **Weekly:** KPI review (30 min) against [CHECKLIST.md](./CHECKLIST.md).
- **Quarterly:** rate-update SOP execution (calendar-blocked: 1 Oct 2026, 1 Jan 2027, 1 Apr 2027…).
- **Per phase:** exit criteria in [ROADMAP.md](./ROADMAP.md) must be met before the next phase starts (Phases 2–4 may overlap; Phase 0 → 1 is strictly sequential).
