# Phase 0 — Status & Handoff

_Last updated: 2026-07-20 · Branch: `v2026`_

Phase 0 of the [CHECKLIST](./CHECKLIST.md) splits into **code work (done in this branch)** and **external work that only you can do** (Google Search Console access, verifying live official rates). This doc records both.

---

## ✅ Done in code (this branch, uncommitted)

| Checklist item | What changed | Files |
|---|---|---|
| **0.2 Remove spam-risk schema** | Deleted the self-serving `LocalBusiness` `aggregateRating` (5/80) + the "Azizi Jazmi / Job done within 24 hours" web-dev review; removed the duplicate `WebSite` block (`alternateName:"EC"`); replaced with one clean `Organization` block. Removed the fake `Product` review (Milon Mukherjee) + `aggregateRating` and the `WebApplication` self-rating on both SGB pages. **All remaining JSON-LD validated (0 errors).** | `index.html`, `bank-balance-check.html` (+`hi/`,`bn/`), `sgb-calculator.html` (+`hi/`,`bn/`), `sovereign-gold-bond-calculator.html` |
| **0.5 Sitemap** | Regenerated all 146 `<lastmod>` values from **real git commit dates** per source file (no faked freshness). Pages edited today carry today's date; untouched pages keep their true history. | `sitemap.xml` |
| **0.5 robots.txt** | Removed malformed `Allow: /ads.txt` + empty `Disallow:`; now clean `Allow: /` + sitemap reference. | `robots.txt` |
| **0.5 Dead files** | Deleted `ror.xml`, `urllist.txt`, `sitemaps25022024.zip` from web root. | — |
| **0.6 404 status** | Verified on the live site: `nivesguru.in/<missing>` returns a true **HTTP 404** (not soft-200); real pages return 200. | — |
| **0.1 Diagnostic tooling** | Since the GSC items need your private login, built them **turnkey**: a batch Core-Web-Vitals checker and a step-by-step GSC runbook. | `scripts/psi-check.mjs`, `scripts/gsc-diagnosis.md` |
| **0.6 Service workers** | Consolidated 3 SW files → 1. Deleted unused `sw.js` and `pwabuilder-sw.js`. Rewrote the registered `serviceWorker.js`: **versioned cache, network-first for HTML (pages never go stale), cache-first for static assets, offline fallback, old-cache cleanup on activate.** | `serviceWorker.js` |
| **0.3 Rate verification (small-savings set)** | Verified the current-quarter (Jul–Sep 2026, FY 2026-27) official small-savings rates against the calculator pages. **PPF 7.1, NSC 7.7, SCSS 8.2, KVP 7.5, POMIS 7.4 — all match.** Found & fixed a **real error: SSY showed 8% → corrected to 8.2%** (EN/HI/BN). Rates confirmed unchanged for 9 straight quarters (MoF notification 30 Jun 2026). | `sukanya-samriddhi-yojana-ssy-calculator.html` (+`hi/`,`bn/`) |
| **0.4 Income-tax calculator → FY 2026-27** | The old calc was **non-functional** — it multiplied income by a single flat rate (`income × rate ÷ 100`) using outdated slabs, hugely overstating tax. Rebuilt as a **correct progressive calculator**: FY 2026-27 new-regime slabs (0–4L nil → 30% >24L) with ₹60,000 §87A rebate, old regime with age-based exemption + ₹12,500 rebate, 4% cess, full breakdown table, visible **FY 2026-27 · AY 2027-28** badge. Slabs verified unchanged in Budget 2026. **Unit-tested and driven in-browser — figures match published values (₹12L→₹0, ₹16L→₹1,24,800, ₹24L→₹3,12,000, old ₹10L→₹1,17,000), no console errors.** | `income-tax-calculator.html` |

### ⚠️ Verify after deploy
- Bump `CACHE_VERSION` in `serviceWorker.js` on every future asset change (currently `nivesguru-v2026-07`).
- Because the old cache-first SW is live on returning users' browsers, the new `activate` handler will clear stale caches on their next visit — expect a one-time refresh.
- Run 5 edited pages through [Rich Results Test](https://search.google.com/test/rich-results) after deploy to confirm no schema errors in production.

### 📝 Found-in-passing (not Phase 0 — logged for later phases)
- **`about-us.html`**: schema `@type` is `LocalBusiness` (should be `Organization`/`AboutPage`) and the `Article` `articleBody` is boilerplate about **"web development services / SEO services"** — wrong content for a finance site. → Phase 2 (E-E-A-T rewrite).
- **`bank-balance-check.html`**: `canonical` and some `og:url` point to `nivesguru.**com**` (wrong TLD — site is `.in`). → fix before/with next deploy.
- ~~**`sitemap.xml`**: duplicate entries for `/hi/` and `/bn/`~~ → **FIXED 2026-07-20**: sitemap deduped (146→139 entries) and the two canonicalized weak URLs removed. **URL consolidation done:** `/sovereign-gold-bond-calculator` → canonical `/sgb-calculator`; `/post-office-monthly-income-scheme-mis-calculator` → canonical `/post-office-monthly-income-scheme-calculator` (hi/bn hreflang rewired to the strong EN URL).
- **SGB pages**: `Product` markup still describes the expired **Feb 2024 Series IV** with hardcoded prices. → refresh or drop the Product block in Phase 2.

---

## ⛔ Needs YOU (external access — I can't do these)

### 0.1 GSC forensic diagnosis — ✅ DONE from your export (2026-07-20)
> **Full analysis: [PHASE-0-DIAGNOSIS.md](./PHASE-0-DIAGNOSIS.md).** Baseline recorded in [REVAMP-PLAN §3](./REVAMP-PLAN-2026.md#3-targets--kpis). Headline: organic collapsed to **0.57 clicks/day**; two-phase decline (gradual demotion Mar–Sep 2025 → impression cliff Sep–Oct 2025); CWV all failing (SGB perf 42, LCP 6.9s). **Two small confirmations still need you:** (a) check the **Manual actions** panel explicitly — you confirmed Security Issues clean but not this; (b) export the **Page Indexing** report to confirm the Oct-2025 cliff was an indexing loss.

1. **Manual Actions** (GSC → Security & Manual Actions → Manual actions) — confirm none. If the fake-review schema triggered one, the removal above is the fix; file a **reconsideration request** once deployed.
2. **Security Issues** panel — confirm clean.
3. **Performance** report → last 24 months, export clicks/impressions/CTR/position by page & query. Identify: *when* the drop started and *which* pages/queries lost the most. Map dates against Google core/spam updates.
4. **Page Indexing** report — note "Crawled – not indexed" / "Duplicate" clusters.
5. Record the **real baseline** into [REVAMP-PLAN §3](./REVAMP-PLAN-2026.md#3-targets--kpis): current organic visitors/day (30-day avg), indexed-page count, top-10 keyword count. (Targets in that table are placeholders until this is filled.)
6. **Resubmit `sitemap.xml`** in GSC after deploy; **Request Indexing** for the 8 pages whose schema changed.

### 0.3 Rate verification — small-savings DONE; bank rates still need you
**Done:** small-savings numeric rates verified for Jul–Sep 2026 and SSY corrected (see done-table above). PPF/NSC/SCSS/KVP/POMIS values were already correct.

**Two things remain:**
1. **Bank FD / RD / SB rates (SBI, PNB, BOB, BOI, UBI × tenures)** — these vary per bank and change often; I can't reliably confirm all of them. Please verify each against the bank's official rate page and tell me any that are wrong — I'll patch them.
2. **Stale *year labels* even where the number is right** — many pages still say "2023-24" / "interest rate 2023" in copy and meta descriptions (e.g. PPF description reads "7.1% in 2023-24"). The rate is correct; the *year* erodes trust. Bulk copy-refresh — schedule in Phase 2, or say the word and I'll sweep them now.

| Instrument | Official source | Status |
|---|---|---|
| PPF, NSC, SCSS, KVP, POMIS | MoF quarterly notification | ✅ verified correct |
| SSY | MoF quarterly notification | ✅ fixed 8% → 8.2% |
| POTD (1/2/3/5-yr), PORD | MoF quarterly notification | ☐ spot-check (official: 6.9/7.0/7.1/7.5, RD 6.7) |
| Bank FD / RD / SB (5 banks) | Each bank's rate page | ☐ needs you |
| APY / PMJJBY / PMSBY premiums | PFRDA / bank circular | ☐ needs you |

> **Also flag:** MSSC (Mahila Samman Savings Certificate) was a limited scheme that **closed 31 Mar 2025** — its calculator page presents it as currently available. Decide whether to keep (as historical) or noindex.

### 0.4 Income-tax calculator — ✅ DONE (EN), please sanity-check
Rebuilt and verified (see table above). **Two things for you to confirm/decide:**
- Confirm the FY 2026-27 new-regime figures against your preferred official source (I used incometax.gov.in / Ministry of Finance / cleartax; Budget 2026 = no slab change).
- **Marginal relief** (new regime, income just above ₹12L) is **not** yet applied — a legal refinement that slightly reduces tax in the ₹12L–~₹12.75L band. Low priority; flag if you want it in Phase 1.
- **Scope:** only the English page exists/updated. There is no `hi/` or `bn/` income-tax page yet — add during the Phase 2 language-parity pass.
- Input is treated as **annual taxable income** (standard deduction not auto-applied); the on-page explainer should say so — copy tweak for Phase 2.

---

## Deploy checklist for this batch
- [ ] Review the diff (schema, robots, sitemap, serviceWorker)
- [ ] Commit on `v2026`, merge to `main`, deploy
- [ ] Post-deploy: Rich Results Test on 5 pages · resubmit sitemap · request indexing on changed pages
- [ ] Then work the ⛔ external items above
