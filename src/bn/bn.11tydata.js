module.exports = {
  lang: "bn",
  layout: "base.njk",
  eleventyComputed: {
    permalink: (data) => `/bn/${data.page.fileSlug}.html`,
    pageUrl: (data) => `/bn/${data.page.fileSlug}`
  }
};
