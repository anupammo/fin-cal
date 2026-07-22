#!/usr/bin/env node
// Purge Bootstrap against every built page and emit a self-hosted slim CSS.
// Run AFTER eleventy (npm run build does both). PSI: 26 KiB unused CSS +
// a render-blocking CDN request — this removes both.
//
// Safelist covers classes Bootstrap's JS toggles at runtime (not present in
// static markup) and classes injected by calculator JS building result tables.
import { PurgeCSS } from "purgecss";
import { writeFileSync, mkdirSync, statSync } from "node:fs";

const result = await new PurgeCSS().purge({
  content: ["_site/**/*.html"],
  css: ["bootstrap.min.css"],
  safelist: {
    standard: [
      // Bootstrap runtime state classes
      "show", "showing", "hide", "hiding", "fade", "collapse", "collapsing",
      "active", "disabled", "visually-hidden", "modal-open", "modal-backdrop",
      "offcanvas-backdrop", "tooltip", "tooltip-inner", "popover", "arrow",
      "carousel-item-next", "carousel-item-prev", "carousel-item-start", "carousel-item-end",
      "dropdown-menu", "dropdown-item", "was-validated", "is-valid", "is-invalid",
      "hidden"
    ],
    greedy: [/^tooltip/, /^popover/, /^bs-/, /^modal/, /^offcanvas/, /^accordion/, /^navbar/, /^nav-/, /^carousel/]
  }
});

mkdirSync("_site/css", { recursive: true });
writeFileSync("_site/css/bootstrap-purged.min.css", result[0].css);
// Also write to source-tracked location so the file survives clean rebuilds
// (and passthrough copies it) — regeneration happens on every build anyway.
mkdirSync("css", { recursive: true });
writeFileSync("css/bootstrap-purged.min.css", result[0].css);

const before = statSync("bootstrap.min.css").size, after = result[0].css.length;
console.log(`bootstrap.min.css ${(before / 1024).toFixed(0)} KiB -> purged ${(after / 1024).toFixed(0)} KiB (${(100 - after / before * 100).toFixed(0)}% smaller)`);
