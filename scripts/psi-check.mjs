#!/usr/bin/env node
// PageSpeed Insights / Core Web Vitals batch checker for Phase 0 (checklist 0.1).
// Anonymous PSI has a tiny daily quota (429s quickly) — get a free key at
// https://developers.google.com/speed/docs/insights/v5/get-started and pass it:
//
//   node scripts/psi-check.mjs YOUR_API_KEY
//
// Runs mobile-strategy PSI on the highest-traffic pages and prints a table of
// Lighthouse score + LCP / INP / CLS (lab) and CrUX field data where available.

const API_KEY = process.argv[2] || "";
const STRATEGY = "mobile";
const PAGES = [
  "https://nivesguru.in/",
  "https://nivesguru.in/ppf-calculator",
  "https://nivesguru.in/systematic-investment-plan-sip-return-calculator",
  "https://nivesguru.in/emi-calculator-online",
  "https://nivesguru.in/income-tax-calculator",
  "https://nivesguru.in/sukanya-samriddhi-yojana-ssy-calculator",
  "https://nivesguru.in/fixed-deposit-fd-calculator",
  "https://nivesguru.in/sbi-fd-calculator",
  "https://nivesguru.in/national-pension-system-nps-calculator",
  "https://nivesguru.in/gst-calculator"
];

async function run(url) {
  const api = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
  api.searchParams.set("url", url);
  api.searchParams.set("strategy", STRATEGY);
  api.searchParams.append("category", "performance");
  if (API_KEY) api.searchParams.set("key", API_KEY);
  const res = await fetch(api);
  if (!res.ok) return { url, error: `${res.status} ${res.statusText}` };
  const j = await res.json();
  const a = j.lighthouseResult?.audits || {};
  const le = j.loadingExperience?.metrics || {};
  return {
    url,
    score: Math.round((j.lighthouseResult?.categories?.performance?.score ?? 0) * 100),
    lcp: a["largest-contentful-paint"]?.displayValue,
    tbt: a["total-blocking-time"]?.displayValue,
    cls: a["cumulative-layout-shift"]?.displayValue,
    fieldLCP: le["LARGEST_CONTENTFUL_PAINT_MS"]?.percentile,
    fieldINP: le["INTERACTION_TO_NEXT_PAINT"]?.percentile,
    fieldCLS: le["CUMULATIVE_LAYOUT_SHIFT_SCORE"]?.percentile,
    fieldPass: j.loadingExperience?.overall_category
  };
}

console.log(`PSI (${STRATEGY})${API_KEY ? "" : "  [no API key — expect 429 after ~1 call]"}\n`);
for (const p of PAGES) {
  const r = await run(p).catch(e => ({ url: p, error: e.message }));
  if (r.error) { console.log(`✗ ${r.url}\n    ERROR ${r.error}`); }
  else {
    console.log(`${r.score >= 90 ? "✓" : r.score >= 50 ? "~" : "✗"} [${r.score}] ${r.url}`);
    console.log(`    lab  LCP ${r.lcp} | TBT ${r.tbt} | CLS ${r.cls}`);
    console.log(`    field ${r.fieldPass || "no CrUX data"}${r.fieldLCP ? ` — LCP ${r.fieldLCP}ms · INP ${r.fieldINP}ms · CLS ${r.fieldCLS / 100}` : ""}`);
  }
  await new Promise(r => setTimeout(r, 400));
}
