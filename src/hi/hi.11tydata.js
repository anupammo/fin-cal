module.exports = {
  lang: "hi",
  layout: "base.njk",
  eleventyComputed: {
    // index.njk fileSlug is the parent dir name in Eleventy — use filePathStem.
    permalink: (data) =>
      data.page.filePathStem.endsWith("/index")
        ? "/hi/index.html"
        : `/hi/${data.page.fileSlug}.html`,
    pageUrl: (data) =>
      data.page.filePathStem.endsWith("/index") ? "/hi/" : `/hi/${data.page.fileSlug}`
  }
};
