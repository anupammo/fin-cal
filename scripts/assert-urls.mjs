#!/usr/bin/env node
// URL-freeze contract check (Phase 1.4, docs/SSG-DECISION.md).
// Every file the build emits must correspond to a URL in docs/url-map.txt.
// During migration this guards against accidental URL drift; at cutover, run
// with --complete to also require that EVERY frozen URL has been migrated.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const complete = process.argv.includes("--complete");
const frozen = new Set(
  readFileSync("docs/url-map.txt", "utf8").trim().split(/\r?\n/)
);

function walk(dir, acc = []) {
  for (const f of readdirSync(dir)) {
    const full = join(dir, f);
    if (statSync(full).isDirectory()) walk(full, acc);
    else if (f.endsWith(".html")) acc.push(full);
  }
  return acc;
}

const built = walk("_site").map(p => {
  const rel = relative("_site", p).replace(/\\/g, "/").replace(/\.html$/, "");
  return "/" + (rel === "index" ? "" : rel.replace(/\/index$/, "/"));
});

let fail = 0;
for (const url of built) {
  if (!frozen.has(url)) { console.error(`✗ NOT IN CONTRACT: ${url}`); fail++; }
}
console.log(`${built.length} built page(s) checked against ${frozen.size} frozen URLs.`);

if (complete) {
  const builtSet = new Set(built);
  const missing = [...frozen].filter(u => !builtSet.has(u));
  if (missing.length) {
    console.error(`✗ ${missing.length} frozen URL(s) not yet migrated (run without --complete during migration).`);
    missing.slice(0, 10).forEach(u => console.error("   " + u));
    fail++;
  } else {
    console.log("✓ complete: every frozen URL is emitted by the build.");
  }
}

if (fail) { process.exit(1); }
console.log("✓ URL contract holds.");
