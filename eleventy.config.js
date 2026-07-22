// NivesGuru Eleventy scaffold — Phase 1 rebuild (docs/SSG-DECISION.md).
// Output contract: every page renders to the same flat `.html` path the live
// site serves today (see docs/url-map.txt) — /ppf-calculator.html etc., never
// directory/index.html, so extensionless GitHub Pages URLs stay identical.
module.exports = function (eleventyConfig) {
  // Verification files must remain byte-exact — never templated.
  eleventyConfig.addPassthroughCopy("google843786092a7f748f.html");
  eleventyConfig.addPassthroughCopy("hdu16dvs7z7j2wf1um4dj8md16j4v0.html");

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
