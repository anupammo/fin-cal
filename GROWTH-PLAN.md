# Nivesguru Traffic Recovery Plan — target 8,500 visits/day

_Audit date: 6 Nov 2026 · Site: https://nivesguru.in (GitHub Pages, `main` branch, custom domain via `CNAME`)_

## 1. Where the site stands

**What is already good**
- 148 static pages (≈50 English + Hindi + Bengali versions), served from GitHub Pages with HTTPS and a custom domain.
- Almost every page has a title, meta description, canonical URL, Open Graph tags, hreflang (en / hi / bn), Breadcrumb + FAQ + Article schema.
- `robots.txt`, `sitemap.xml`, `ads.txt` (pub-1195438021979002), GA4 (`G-YHX88MXWW4`), AdSense Auto Ads and the Funding Choices consent script are all in place.

**Why traffic and earnings dropped**

| # | Problem | Impact |
|---|---------|--------|
| 1 | **Income tax calculator gave wrong answers.** It charged the top slab rate on the whole income (₹10 lakh → ₹2 lakh tax), used pre-2023 slabs, and had no rebate, standard deduction or cess. | This is the highest-volume keyword family on the site and peaks in July (ITR season). Wrong results → users bounce → Google drops the page. |
| 2 | **GST calculator still offered 12% and 28%.** GST 2.0 (22 Sep 2025) moved most goods to 5% / 18% / 40%. | Outdated tool, outdated content. |
| 3 | **Content looks stale.** Meta/schema dates are 2023–2024, text says "2023-24", sitemap `lastmod` is Feb–May 2024. | Google rewards fresh finance (YMYL) content; CTR drops when snippets show old years. |
| 4 | **Missing the biggest salary-related calculators**: in-hand salary, EPF, HRA, gratuity, step-up SIP, CAGR. | These are among the highest-volume calculator searches in India; competitors own them. |
| 5 | **SGB traffic is gone.** The government stopped new Sovereign Gold Bond tranches, so the old SGB pages lost their seasonal spikes. | A big chunk of the old 8.5K/day peak likely came from SGB + ITR deadline spikes. |
| 6 | **Weight and speed.** `privacy-policy.html` was 1.6 MB (a formatter put every word on its own indented line). Large PNGs (`nivesguru.png` 1 MB, `nivesguru-1.png` 1.3 MB). Bootstrap CSS + Chart.js 2.5 render-blocking. | Hurts Core Web Vitals on mobile, the main Indian traffic source. |
| 7 | **No manual ad units.** Every in-content `<ins class="adsbygoogle">` is commented out; earnings depend fully on Auto Ads. | Fine once traffic returns, but check Auto Ads settings (below). |

## 2. Goal math

- Target: **8,500 visits/day ≈ 255K/month**.
- Realistic path: ~1,500/day by month 2, ~4,000/day by month 4, **8,500+/day in the July 2027 ITR season**, then holding 6–8K/day off-season.
- The biggest levers are (a) income tax + salary tools ranking in July and Jan–Mar, (b) evergreen investment calculators (SIP, PPF, FD, EMI, EPF), (c) quarterly rate-update freshness.

## 3. The plan

### Phase 0 — Done in this branch (code changes)
- [x] **Income tax calculator rebuilt** for FY 2026-27 / FY 2025-26: Budget 2025 new-regime slabs (0–4L nil … 24L+ 30%), ₹75K / ₹50K standard deduction, Section 87A rebate up to ₹12L with marginal relief, old regime with age-based exemption, 80C/80D/HRA/home-loan/NPS deductions, surcharge with marginal relief, 4% cess, slab-wise breakdown, old-vs-new comparison.
- [x] **GST calculator rebuilt** for GST 2.0 (5 / 18 / 40%, plus 0.25 / 3%), add or remove GST, CGST/SGST/IGST split.
- [x] **6 new calculators** with full guides, FAQs and schema: In-hand Salary, EPF, HRA (8-metro rule from FY 2026-27), Gratuity (incl. Labour Code notes), Step-up SIP, CAGR.
- [x] New pages linked from every English page (nav menu + related-links block) and the homepage.
- [x] `sitemap.xml` refreshed (new pages, current `lastmod`), stale "2023-24" labels updated, `dateModified` refreshed on edited pages.
- [x] `privacy-policy.html` shrunk from 1.6 MB to 176 KB (same text).
- [x] **SSY calculator fixed**: it used 8%; the current rate is 8.2% (English, Hindi, Bengali).
- [x] **Broken structured data fixed** on the 3 PNB FD pages (a line break inside JSON made Google ignore it).
- [x] Proper 1200×630 share images for the 8 rebuilt/new pages (the old income tax and GST og:images pointed to files that did not exist).
- [x] RSS feed and `urllist.txt` updated with the new pages.

### Batch 2 — done 12 Nov 2026
- [x] **SGB pages** (English, Hindi, Bengali): removed the stale "next issue 2023-24" claims; now explain that no new tranche has been issued since Feb 2024 and how premature redemption works (e.g. ₹14,167/gram on 2 Nov 2026).
- [x] **MSSC pages**: clear "closed to new deposits since 31 March 2025" notice in all three languages, with links to alternatives.
- [x] **Removed self-written star ratings** from structured data on 8 pages (fake "80 reviews" on the homepage/bank page, product ratings on SGB). Google treats these as spam and can penalise the whole site.
- [x] **4 more calculators**: Home loan EMI with prepayment, Retirement (corpus + step-up SIP), XIRR (with SIP auto-fill), Post Office RD (6.7%).
- [x] Fixed a bug where year-by-year tables on Step-up SIP and CAGR stayed empty.
- [x] Page generator saved in `tools/page-generator/` so new calculators can be built the same way.

### Still to fix
- Hindi/Bengali versions of the 10 new calculators and the rebuilt income tax/GST pages.

### Phase 1 — Owner actions, this week (needs your Google logins)
1. **Merge this branch into `main`** so GitHub Pages publishes it. Then open https://nivesguru.in/income-tax-calculator and check it loads.
2. **Google Search Console**
   - Sitemaps → resubmit `https://nivesguru.in/sitemap.xml`.
   - URL Inspection → "Request indexing" for: `/income-tax-calculator`, `/gst-calculator`, `/salary-calculator`, `/epf-calculator`, `/hra-calculator`, `/gratuity-calculator`, `/step-up-sip-calculator`, `/cagr-calculator`, `/`.
   - Pages report: fix anything under "Crawled – currently not indexed" and "Duplicate without user-selected canonical".
   - Performance report: export the last 16 months, find pages that lost the most clicks — those are the next refresh targets.
   - Check Manual actions + Security issues are empty.
3. **AdSense**
   - Ads → By site → nivesguru.in → Auto ads ON with **in-page, anchor and vignette** formats; ad load at least the middle setting.
   - Sites → confirm `ads.txt` status is "Authorized".
   - Policy center → resolve any page-level restrictions.
   - Turn on "Optimize ads with experiments".
4. **GitHub Pages settings**: confirm source = `main` / root, custom domain `nivesguru.in`, "Enforce HTTPS" ticked.

### Phase 2 — Content engine, weeks 2–8
Publish **2 new calculators per week** using the same template as the new pages (calculator + 1,000-word guide + FAQ schema). Priority order by Indian search demand:

~~1. Home loan EMI with prepayment · 2. Retirement · 3. XIRR · 4. Post Office RD~~ (done) · 5. NPS vs PPF vs EPF comparison · 6. Car loan & personal loan EMI · 7. Age calculator / DA calculator (8th Pay Commission demand) · 8. Leave encashment · 9. Old vs new regime break-even · 10. Advance tax · 11. Rent receipt generator · 12. SGB redemption value calculator (existing holders still search this; SGB pages already explain it).

**Refresh calendar (freshness = rankings):**
| When | What to update |
|------|----------------|
| ~1 Jan, 1 Apr, 1 Jul, 1 Oct | Small-savings rates (PPF, SSY, SCSS, NSC, KVP, MIS, TD, RD) — update pages + `dateModified` + sitemap `lastmod` the same day and post on social. |
| 1 Feb (Budget) | Income tax, salary, HRA, capital gains pages within 48 hours. |
| June–July | ITR season: homepage banner to income tax calculator; publish "ITR last date" post. |
| Jan–Mar | Tax-saving season: 80C, ELSS, PPF, NPS pages. |
| Bank rate changes | SBI/PNB/BOB/BOI/UBI FD & RD pages. |

### Phase 3 — Distribution & authority, ongoing
- **YouTube Shorts / Instagram Reels** (accounts already exist): 30-second "How much tax on ₹15 lakh salary?" style clips that link to the calculator. One per new page.
- **Quora / Reddit (r/IndiaInvestments, r/personalfinanceindia)**: answer questions with a worked example; link only where it helps.
- **WhatsApp share button** on result panels (finance results get shared in family groups).
- **Backlinks**: list the site on free-tools directories, college finance clubs, and pitch guest posts to personal-finance blogs.
- **Hindi + Bengali versions** of the 6 new calculators (the hi/bn pages already have hreflang wiring — copy the pattern).

### Phase 4 — Technical
**Done (design system v2, see `DESIGN-SYSTEM.md`):**
- [x] One theme on all 152 pages: sticky navbar, calculator search (`/` or Ctrl+K), dark mode, language switch, new homepage hero.
- [x] Bootstrap 5.3.3 + Inter font self-hosted (no render-blocking third-party CSS); Bootstrap JS deferred; Wikimedia background image removed.
- [x] Images below the fold lazy-loaded; large SVG illustrations optimised (−16%); sharper navbar logo.
- [x] New service worker: always-fresh pages, cached static files, offline page; old stale caches cleared. Manifest no longer blocks the install prompt.
- [x] Lighthouse (local): SEO 100, accessibility 98–100, CLS 0. Fixed broken image/icon paths on Hindi/Bengali pages and a script error on the bank balance pages.

**Still to do:**
- Load Chart.js with `defer` (needs each legacy page's inline script moved into a `DOMContentLoaded` handler) or replace it with the CSS bars used on the new pages.
- Remove unused files from the repo root (`*.zip`, duplicate SVG/PNG variants).
- After merging, run PageSpeed Insights on the top 10 pages (third-party ad scripts could not be measured from the sandbox).

## 4. KPIs to watch weekly (Search Console + GA4 + AdSense)
| Metric | Now | Month 2 | Month 4 | July 2027 |
|--------|-----|---------|---------|-----------|
| Visits/day | low | 1,500 | 4,000 | 8,500+ |
| Indexed pages | ~148 | 160+ | 180+ | 200+ |
| Avg. position (top 20 queries) | — | < 20 | < 10 | < 5 |
| Page RPM (AdSense) | — | track | track | track |

## 5. Notes
- SEO changes usually take **4–12 weeks** to show in rankings. Do not undo changes if week 1 looks flat.
- Rates used on the new pages (Nov 2026): EPF 8.25% (FY 2025-26), PPF 7.1%, SSY/SCSS 8.2%, NSC 7.7%, KVP 7.5%, MIS 7.4%. Re-check each quarter.
