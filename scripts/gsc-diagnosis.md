# GSC Diagnosis — turnkey runbook (Checklist 0.1)

These items require **your** Google Search Console login (property: `nivesguru.in`). They can't be automated from here without your credentials, but each is a few clicks. Do them in order and paste the outputs back — I'll turn them into the baseline in [REVAMP-PLAN §3](../docs/REVAMP-PLAN-2026.md#3-targets--kpis) and diagnose the drop.

> Sign in at **https://search.google.com/search-console** with the account that owns `nivesguru.in`.

## 1. Manual actions & security (2 min) — most urgent
- **Security & Manual Actions → Manual actions** — screenshot / note the result.
  - If it flags *structured data* or *spammy markup*: the fake-review schema I removed this session is the cause → deploy first, then **Request Review** here.
- **Security & Manual Actions → Security Issues** — confirm "No issues detected."

## 2. The drop (5 min)
- **Performance → Search results** → date range **Compare → last 16 months** (max). Toggle on **Total clicks** + **Total impressions** + **Average position**.
- Note the **week the decline started** and the shape (sudden cliff vs slow slide). Map the date against Google update history (core/spam updates).
- **Export** (top-right) → share the CSV, or paste: current clicks/day (28-day avg), vs the peak.
- **Pages** tab → which URLs lost the most clicks. **Queries** tab → which queries.

## 3. Baseline numbers (2 min) — needed to set real targets
Record these for the REVAMP-PLAN §3 table:
- Organic clicks/day (28-day average): ______
- Total indexed pages: from **Indexing → Pages → "Indexed"** count: ______
- Queries in positions 1–10: Performance → filter Position ≤ 10 → query count: ______

## 4. Indexing health (3 min)
- **Indexing → Pages** → list the top reasons under "Why pages aren't indexed" (esp. **"Crawled – currently not indexed"**, **"Duplicate without user-selected canonical"**, **"Alternate page with proper canonical tag"**).
- Note counts — these tell us if the duplicate `/hi/` `/bn/` sitemap entries or the `.com`/`.in` canonical mismatch are causing problems.

## 5. After deploying this session's fixes
- **Sitemaps** → resubmit `https://nivesguru.in/sitemap.xml`.
- **URL Inspection** → for each of the 8 schema-changed pages (index, bank-balance-check ×3, sgb ×3, sovereign-gold-bond) → **Request Indexing**.
- **Rich Results Test** (https://search.google.com/test/rich-results) → run the homepage + one SGB page → confirm 0 errors (validates the schema surgery in production).

## 6. Core Web Vitals (public — you can run without GSC)
```
node scripts/psi-check.mjs YOUR_PSI_API_KEY
```
Free key: https://developers.google.com/speed/docs/insights/v5/get-started
(Anonymous runs get rate-limited to ~1/day.) Paste the output — I'll turn failing pages into a Phase 1 performance punch-list. Also cross-check with **GSC → Experience → Core Web Vitals** for real-user (field) status.

---

**Paste back:** items 1 (manual action result), 3 (the three baseline numbers), and 6 (PSI output) at minimum — that unblocks the rest of the plan's targets and the drop diagnosis.
