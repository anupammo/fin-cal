module.exports = {
  lang: "en",
  layout: "base.njk",
  eleventyComputed: {
    // Flat .html output at site root — matches the live URL contract.
    permalink: (data) => `/${data.page.fileSlug}.html`,
    // Extensionless public URL used for canonical/og/hreflang.
    pageUrl: (data) => `/${data.page.fileSlug}`
  }
};
