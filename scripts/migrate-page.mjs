#!/usr/bin/env node
// Bulk page migrator (Phase 1.3, docs/SSG-DECISION.md).
//
//   node scripts/migrate-page.mjs <file.html> [more.html ...]
//
// For each source page, extracts into the Eleventy scaffold:
//   - title / meta description / og:image / canonical / hreflang -> ---json front matter
//   - head <style> blocks           -> src/_includes/styles/<lang>-<slug>.njk
//   - page-specific JSON-LD blocks  -> src/_includes/schema/<lang>-<slug>.njk
//     (site-wide WebSite/Organization/LocalBusiness top-level blocks are dropped;
//      base.njk emits the canonical versions)
//   - <body> content (verbatim, {% raw %}-wrapped) -> src/<lang>/<slug>.njk
//
// The build then reproduces the page byte-identically in the body while the
// head is regenerated from the single layout. Verify with verify-migration.mjs.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { basename, dirname } from "node:path";

const SITE = "https://nivesguru.in";

function extract(srcPath) {
  const html = readFileSync(srcPath, "utf8");
  const slug = basename(srcPath, ".html");
  const dir = dirname(srcPath).replace(/\\/g, "/");
  const lang = dir.endsWith("hi") ? "hi" : dir.endsWith("bn") ? "bn" : "en";

  const head = html.slice(0, html.search(/<body[\s>]/i));
  const bodyStart = html.indexOf(">", html.search(/<body[\s>]/i)) + 1;
  const body = html.slice(bodyStart, html.lastIndexOf("</body>")).replace(/^\r?\n/, "").replace(/\s+$/, "");

  const attr = (re) => (head.match(re) || [])[1];
  const title = attr(/<title>([\s\S]*?)<\/title>/);
  const description = attr(/name="description"[^>]*\scontent="([^"]*)"/) ||
                      attr(/name="description"\s*\n?\s*content="([^"]*)"/);
  const ogImage = attr(/property="og:image"[^>]*content="([^"]*)"/) ||
                  attr(/property="og:image"\s*\n?\s*content="([^"]*)"/);
  const canonicalHref = attr(/rel="canonical" href="([^"]*)"/);

  // hreflang list, preserving order; ignore x-default (layout emits it)
  const translations = [...head.matchAll(/hreflang="([a-z-]+)"/g)]
    .map(m => m[1]).filter(l => l !== "x-default");

  // page style blocks
  const styles = [...head.matchAll(/<style[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]);

  // page-specific JSON-LD (drop site-wide blocks the layout provides)
  const pageSchema = [];
  for (const m of head.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let type = "";
    try { const j = JSON.parse(m[1]); type = Array.isArray(j["@type"]) ? j["@type"].join(",") : (j["@type"] || ""); }
    catch { console.warn(`  ! unparseable JSON-LD kept as-is in ${srcPath}`); pageSchema.push(m[0]); continue; }
    if (["WebSite", "Organization", "LocalBusiness"].includes(type)) continue;
    pageSchema.push(m[0]);
  }

  const pageUrl = (lang === "en" ? "/" : `/${lang}/`) + slug;
  const fm = { title, description, translations };
  if (ogImage) fm.ogImage = ogImage;
  if (canonicalHref && canonicalHref !== SITE + pageUrl) fm.canonical = canonicalHref.replace(SITE, "");
  if (!translations.length) delete fm.translations;

  if (styles.length) {
    mkdirSync("src/_includes/styles", { recursive: true });
    writeFileSync(`src/_includes/styles/${lang}-${slug}.njk`, "{% raw %}\n" + styles.join("\n") + "\n{% endraw %}\n");
    fm.pageStyle = `styles/${lang}-${slug}.njk`;
  }
  if (pageSchema.length) {
    mkdirSync("src/_includes/schema", { recursive: true });
    writeFileSync(`src/_includes/schema/${lang}-${slug}.njk`, "{% raw %}\n" + pageSchema.join("\n") + "\n{% endraw %}\n");
    fm.pageSchema = `schema/${lang}-${slug}.njk`;
  }

  mkdirSync(`src/${lang}`, { recursive: true });
  writeFileSync(`src/${lang}/${slug}.njk`,
    "---json\n" + JSON.stringify(fm, null, 2) + "\n---\n{% raw %}\n" + body + "\n{% endraw %}\n");
  console.log(`✓ ${srcPath} -> src/${lang}/${slug}.njk` +
    (styles.length ? ` (+style)` : "") + (pageSchema.length ? ` (+${pageSchema.length} schema)` : ""));
}

const files = process.argv.slice(2);
if (!files.length) { console.error("Usage: node scripts/migrate-page.mjs <file.html> [...]"); process.exit(1); }
files.forEach(extract);
