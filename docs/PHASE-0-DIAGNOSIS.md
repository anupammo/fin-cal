# Phase 0 — Diagnosis (real GSC + PageSpeed data)

_Data: Google Search Console export (Web, last 16 months, ending 2026-07-17) + PageSpeed Insights (2026-07-20). Compiled 2026-07-20._

## TL;DR

The site hasn't just declined — **organic search has collapsed to near-zero** and stayed there. It now averages **0.57 clicks/day** (28-day avg), down from ~56/day at the start of the window and from the historic 8,500/day peak (which predates this 16-month window entirely). The cause is a **sustained algorithmic demotion** (positions fell from ~20 to ~60) compounded by a **sharp impression cliff around Sep–Oct 2025**. Impressions still exist (~195/day) but almost nothing converts, because pages sit on page 4–8 and titles have near-zero CTR. This validates the revamp thesis and gives us concrete recovery footholds.

## The decline, month by month

| Month | Clicks/day | Impr/day | Avg pos | Phase |
|---|---|---|---|---|
| 2025-03 | 55.7 | 2,605 | 23 | baseline (already well below the 8.5K peak) |
| 2025-04 | 41.4 | 1,929 | 31 | 🔻 ranking decay |
| 2025-05 | 25.9 | 1,931 | 35 | 🔻 |
| 2025-06 | 18.6 | 1,857 | 38 | 🔻 |
| 2025-07 | 10.0 | 1,120 | 50 | 🔻 |
| 2025-08 | 3.9 | 928 | 53 | 🔻 |
| 2025-09 | 2.1 | 646 | 31 | — |
| **2025-10** | **1.5** | **156** | 35 | 🧨 **impression cliff (−76%)** |
| 2025-11 → 2026-07 | 0.3–1.2 | 140–200 | 46–65 | 💀 flatlined near zero |

Two distinct events:
1. **Mar–Sep 2025 — gradual ranking demotion.** Average position slid 23 → 53; clicks bled out month over month. Classic core-update / E-E-A-T erosion signature (anonymous YMYL site, self-serving review schema, stale rates).
2. **Sep → Oct 2025 — impression cliff.** Impressions/day fell 646 → 156 in one month (−76%) and never recovered. This magnitude = pages losing impression eligibility en masse (mass de-ranking or indexing loss). The stale cache-first service worker, duplicate/invalid schema, and staleness signals are all plausible contributors.

## Baseline numbers (for [REVAMP-PLAN §3](./REVAMP-PLAN-2026.md#3-targets--kpis))

- **Organic clicks/day:** 0.57 (28-day avg) · 0.62 (90-day avg)
- **Impressions/day:** ~195 (28-day avg)
- **16-month totals:** 4,115 clicks / 342,517 impressions / avg CTR ~1.2%
- **Avg position (India):** 29.4
- **Queries ranking ≤ pos 10:** 197 of 1,000 · **pos 11–20 (near page 1):** 72
- **Peak day in window:** 68 clicks (2025-03-31) — the 8.5K/day record is pre-window
- **Devices:** Mobile 3,262 clk (79%) · Desktop 821 · Tablet 32 → **mobile-first recovery**
- **Countries:** India 3,156 clk · **Bangladesh 730 clk at 9.35% CTR, pos 8.9** (vernacular bright spot)

## Recovery footholds (where the clicks will come back fastest)

Ranked by opportunity (impressions × fixability):

1. **🥇 MIS / Post Office Monthly Income Scheme — the single biggest opportunity.**
   `/post-office-monthly-income-scheme-calculator` has **71,162 impressions** but only 22 clicks (pos 21). Query "mis calculator" = **22,448 impressions, position 12.9, CTR 0.02%**. This is page-2 positioning *and* a title nobody clicks. Get it to top-3 with a compelling title/meta and this one cluster could recover thousands of clicks. **Note:** there are two competing URLs (`/post-office-monthly-income-scheme-calculator` and `/post-office-monthly-income-scheme-mis-calculator`) — consolidate to one canonical, 301 the other.
2. **🥈 SGB / Sovereign Gold Bond — current best performer.** `/sgb-calculator` 1,673 clk, pos 24, 3.07% CTR. Already earns; push to page 1. (Also the page whose fake Product-review schema we just removed.)
3. **🥉 SBI deposit calculators — high demand, buried.** "sbi fd calculator" 2,891 impr @ **pos 73**; SBI RD @ pos 63; `/sbi-sb-calculator` 41,457 impr @ pos 37. Big branded-query volume sitting on page 4–8 → depth + trust + rate freshness.
4. **Bengali content / Bangladesh.** `/bn/compound-interest-calculator` 762 clk @ **pos 7.27**; Bangladesh CTR 9.35%. The vernacular strategy already works — expand it.
5. **PMJJBY** `/pradhan-mantri-jeevan-jyoti-bima-yojana-pmjjby-calculator` 300 clk @ pos 41 — decent clicks despite poor position.

## Core Web Vitals (PageSpeed, `/sgb-calculator`, mobile, Moto G / Slow 4G)

| Metric | Value | Target | Verdict |
|---|---|---|---|
| **Performance score** | **42** | ≥ 90 | ✗ |
| Largest Contentful Paint | **6.9 s** | < 2.5 s | ✗ |
| First Contentful Paint | 3.3 s | < 1.8 s | ✗ |
| Total Blocking Time | 610 ms | < 200 ms | ✗ (INP risk) |
| Cumulative Layout Shift | 0.162 | < 0.1 | ✗ |
| Speed Index | 7.1 s | < 3.4 s | ✗ |
| CrUX field data | **None** | — | too little traffic to report |

Accessibility 91 · **Best Practices 77** · SEO 100.

**PSI opportunities → Phase 1 punch-list:**
- Reduce **unused JavaScript — 371 KiB** (Chart.js 2.5.0, Bootstrap JS, ad scripts)
- Reduce **unused CSS — 26 KiB** (PurgeCSS on Bootstrap — already planned §1.5)
- **Minimize main-thread work — 4.1 s** · **JS execution — 2.3 s** · **14 long tasks** (INP)
- **Render-blocking requests — 150 ms** · **Efficient cache lifetimes — 215 KiB** (our new SW helps)
- **Serves low-resolution images** → webp/avif + `srcset` (§1.5)
- Best Practices: deprecated API (1), missing security headers (CSP/HSTS/COOP/XFO — add meta CSP; full headers limited on GitHub Pages)
- Accessibility: insufficient color contrast, non-sequential headings, no `<main>` landmark

## What this means for the plan

- **The Phase 0 fixes target the likely root causes** (fake-review schema, staleness, stale-cache SW) — deploy them and request re-indexing; recovery from algorithmic demotion follows re-crawl + trust rebuild.
- **Phase 2 (E-E-A-T + titles/meta)** is the ranking-recovery lever; prioritize the MIS and SBI clusters and rewrite titles for CTR (the 0.02% CTR on 22K impressions is pure waste).
- **Phase 1 (performance)** is non-optional: LCP 6.9s / CLS 0.162 / TBT 610ms all fail and are ranking inputs.
- **Recalibrate targets:** getting back to 8.5K/day from 0.57/day is a rebuild, not a bounce-back. Suggested interim: **50 clicks/day by Dec 2026** (≈ the Mar-2025 level, i.e. recover the demotion), **500/day by Mar 2027**, then chase the record through H2 2027. (The [REVAMP-PLAN §3](./REVAMP-PLAN-2026.md#3-targets--kpis) 5,000/8,500 numbers were placeholders assuming a shallow dip — the real hole is far deeper.)

## Still open (needs you)
- **Manual Actions panel** — you confirmed *Security Issues* = clean, but please also check **Manual actions** explicitly. The Sep–Oct 2025 impression cliff *could* be a manual action (though the gradual pattern leans algorithmic). If flagged → deploy fixes, then Request Review.
- **Page Indexing report** — export the "Why pages aren't indexed" counts (Crawled-not-indexed / Duplicate) to confirm whether the cliff was an indexing loss.
