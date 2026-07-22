#!/usr/bin/env node
// Sitewide JSON-LD validity scan over the legacy HTML pages.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const files = [];
function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) { if (["hi", "bn"].includes(f)) walk(p); continue; }
    if (f.endsWith(".html")) files.push(p);
  }
}
walk(".");

const bad = [];
for (const f of files) {
  const s = readFileSync(f, "utf8");
  let i = 0;
  for (const m of s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    i++;
    try { JSON.parse(m[1]); }
    catch (e) { bad.push(`${f.replace(/\\/g, "/")} #${i}: ${e.message.slice(0, 50)}`); }
  }
}
console.log(bad.length ? bad.join("\n") : `ALL CLEAN — every JSON-LD block valid`);
console.log(`scanned ${files.length} files, ${bad.length} invalid block(s)`);
process.exit(bad.length ? 1 : 0);
