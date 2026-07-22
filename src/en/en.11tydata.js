module.exports = {
  lang: "en",
  layout: "base.njk",
  eleventyComputed: {
    // index.njk fileSlug is the parent dir name in Eleventy — use filePathStem.
    permalink: (data) =>
      data.page.filePathStem.endsWith("/index")
        ? "/index.html"
        : `/${data.page.fileSlug}.html`,
    pageUrl: (data) =>
      data.page.filePathStem.endsWith("/index") ? "/" : `/${data.page.fileSlug}`
  }
};
