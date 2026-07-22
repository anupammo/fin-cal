module.exports = {
  lang: "hi",
  layout: "base.njk",
  eleventyComputed: {
    permalink: (data) => `/hi/${data.page.fileSlug}.html`,
    pageUrl: (data) => `/hi/${data.page.fileSlug}`
  }
};
