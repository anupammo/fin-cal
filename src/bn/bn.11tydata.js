module.exports = {
  lang: "bn",
  layout: "base.njk",
  eleventyComputed: {
    // index.njk fileSlug is the parent dir name in Eleventy — use filePathStem.
    permalink: (data) =>
      data.page.filePathStem.endsWith("/index")
        ? "/bn/index.html"
        : `/bn/${data.page.fileSlug}.html`,
    pageUrl: (data) =>
      data.page.filePathStem.endsWith("/index") ? "/bn/" : `/bn/${data.page.fileSlug}`
  }
};
