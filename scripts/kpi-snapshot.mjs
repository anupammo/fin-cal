#!/usr/bin/env node
// Weekly KPI snapshot (checklist 0.1 — "set up weekly KPI snapshot").
//
// Ritual: once a week, in Search Console → Performance → export → unzip →
// run this on the Chart.csv (the daily time series). It computes last-7-day
// vs prior-7-day KPIs and APPENDS a dated row to docs/kpi-log.csv so you build
// a trend line over time.
//
//   node scripts/kpi-snapshot.mjs <path-to-Chart.csv>
//
// Tracks: clicks/day, impressions/day, CTR, avg position, and WoW deltas.

import { readFileSync, existsSync, appendFileSync, writeFileSync } from "node:fs";

const csvPath = process.argv[2];
if (!csvPath || !existsSync(csvPath)) {
  console.error("Usage: node scripts/kpi-snapshot.mjs <path-to-Chart.csv>");
  process.exit(1);
}

const rows = readFileSync(csvPath, "utf8").trim().split(/\r?\n/).slice(1)
  .map(l => l.split(","))
  .filter(r => r.length >= 5);

function agg(slice) {
  const c = slice.reduce((a, r) => a + (+r[1] || 0), 0);
  const i = slice.reduce((a, r) => a + (+r[2] || 0), 0);
  const pos = slice.reduce((a, r) => a + (+r[4] || 0), 0) / (slice.length || 1);
  return {
    clicksDay: (c / (slice.length || 1)),
    imprDay: (i / (slice.length || 1)),
    ctr: i ? (c / i * 100) : 0,
    pos
  };
}

const last7 = agg(rows.slice(-7));
const prev7 = agg(rows.slice(-14, -7));
const asOf = rows.at(-1)?.[0] ?? new Date().toISOString().slice(0, 10);
const pct = (a, b) => b ? (((a - b) / b) * 100).toFixed(0) + "%" : "n/a";

console.log(`\nKPI snapshot — week ending ${asOf}\n`);
console.log(`  Clicks/day:      ${last7.clicksDay.toFixed(2)}   (WoW ${pct(last7.clicksDay, prev7.clicksDay)})`);
console.log(`  Impressions/day: ${last7.imprDay.toFixed(0)}   (WoW ${pct(last7.imprDay, prev7.imprDay)})`);
console.log(`  CTR:             ${last7.ctr.toFixed(2)}%`);
console.log(`  Avg position:    ${last7.pos.toFixed(1)}   (prev ${prev7.pos.toFixed(1)})`);

const logPath = new URL("../docs/kpi-log.csv", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const header = "week_ending,clicks_per_day,impr_per_day,ctr_pct,avg_position\n";
if (!existsSync(logPath)) writeFileSync(logPath, header);
const line = `${asOf},${last7.clicksDay.toFixed(2)},${last7.imprDay.toFixed(0)},${last7.ctr.toFixed(2)},${last7.pos.toFixed(1)}\n`;
appendFileSync(logPath, line);
console.log(`\n  → appended to docs/kpi-log.csv`);
