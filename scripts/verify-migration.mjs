#!/usr/bin/env node
// Migration fidelity check: for every built page in _site/, the <body> content
// must be byte-identical (modulo CRLF) to the original file at the same path,
// and every JSON-LD block in the output must parse. Run after `npm run build`.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

function walk(dir, acc = []) {
  for (const f of readdirSync(dir)) {
    const full = join(dir, f);
    if (statSync(full).isDirectory()) walk(full, acc);
    else if (f.endsWith(".html")) acc.push(full);
  }
  return acc;
}

const norm = s => s.replace(/\r/g, "");
const bodyOf = s => {
  const i = s.search(/<body[\s>]/i);
  return norm(s.slice(s.indexOf(">", i) + 1, s.lastIndexOf("</body>"))).trim();
};

// Passthrough files are byte-copied, not templated — compare whole-file only.
const PASSTHROUGH = new Set(["google843786092a7f748f.html", "hdu16dvs7z7j2wf1um4dj8md16j4v0.html"]);

let pass = 0, fail = 0;
for (const built of walk("_site")) {
  const rel = relative("_site", built).replace(/\\/g, "/");
  if (PASSTHROUGH.has(rel)) {
    const same = norm(readFileSync(built, "utf8")) === norm(readFileSync(rel, "utf8"));
    if (same) { pass++; console.log(`✓ ${rel} (passthrough, byte-identical)`); }
    else { fail++; console.error(`✗ ${rel} passthrough differs`); }
    continue;
  }
  const out = readFileSync(built, "utf8");
  const problems = [];

  if (!existsSync(rel)) problems.push("no original file to compare");
  else if (bodyOf(out) !== bodyOf(readFileSync(rel, "utf8"))) problems.push("BODY DIFFERS from original");

  let n = 0;
  for (const m of out.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    n++;
    try { JSON.parse(m[1]); } catch (e) { problems.push(`invalid JSON-LD #${n}: ${e.message.slice(0, 50)}`); }
  }
  for (const probe of ["<title>", 'rel="canonical"', "adsbygoogle"])
    if (!out.includes(probe)) problems.push(`missing ${probe}`);

  if (problems.length) { fail++; console.error(`✗ ${rel}\n    ${problems.join("\n    ")}`); }
  else { pass++; console.log(`✓ ${rel} (body identical, ${n} JSON-LD ok)`); }
}
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
