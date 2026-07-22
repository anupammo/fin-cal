// NivesGuru Eleventy scaffold — Phase 1 rebuild (docs/SSG-DECISION.md).
// Output contract: every page renders to the same flat `.html` path the live
// site serves today (see docs/url-map.txt) — /ppf-calculator.html etc., never
// directory/index.html, so extensionless GitHub Pages URLs stay identical.
module.exports = function (eleventyConfig) {
  // Static passthroughs are added per-family as migration proceeds.

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
