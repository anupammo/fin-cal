// NivesGuru Eleventy build — Phase 1 rebuild (docs/SSG-DECISION.md).
// Output contract: every page renders to the same flat `.html` path the live
// site serves today (see docs/url-map.txt) — /ppf-calculator.html etc., never
// directory/index.html, so extensionless GitHub Pages URLs stay identical.
const { execSync } = require("node:child_process");

const gitDateCache = new Map();
function gitLastMod(inputPath) {
  // Honest sitemap lastmod: the source file's last git commit date.
  if (gitDateCache.has(inputPath)) return gitDateCache.get(inputPath);
  let d;
  try {
    d = execSync(`git log -1 --format=%cI -- "${inputPath}"`, { stdio: ["ignore", "pipe", "ignore"] })
      .toString().trim();
  } catch { d = ""; }
  if (!d) d = new Date().toISOString();
  gitDateCache.set(inputPath, d);
  return d;
}

module.exports = function (eleventyConfig) {
  // Verification files must remain byte-exact — never templated.
  eleventyConfig.addPassthroughCopy("google843786092a7f748f.html");
  eleventyConfig.addPassthroughCopy("hdu16dvs7z7j2wf1um4dj8md16j4v0.html");

  // Full static asset set — _site must be a complete deployable site.
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("ads.txt");
  eleventyConfig.addPassthroughCopy("feed.rss");
  eleventyConfig.addPassthroughCopy("browserconfig.xml");
  eleventyConfig.addPassthroughCopy("manifest.json");
  eleventyConfig.addPassthroughCopy("app.js");
  eleventyConfig.addPassthroughCopy("serviceWorker.js");
  eleventyConfig.addPassthroughCopy("bootstrap.min.css");
  eleventyConfig.addPassthroughCopy("bootstrap.min.css.map");
  eleventyConfig.addPassthroughCopy("fincal.css");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("res");
  eleventyConfig.addPassthroughCopy("svg");
  eleventyConfig.addPassthroughCopy("*.png");
  eleventyConfig.addPassthroughCopy("*.webp");
  eleventyConfig.addPassthroughCopy("*.svg");
  eleventyConfig.addPassthroughCopy("*.jpg");
  eleventyConfig.addPassthroughCopy("*.jpeg");
  eleventyConfig.addPassthroughCopy("*.gif");

  eleventyConfig.addFilter("gitLastMod", gitLastMod);

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
