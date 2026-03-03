module.exports = function(eleventyConfig) {
  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  // Custom filters
  eleventyConfig.addFilter("sortByNumber", function(array, key) {
    if (!array || !Array.isArray(array)) return array;
    return [...array].sort((a, b) => {
      const aVal = parseInt(a[key]) || 0;
      const bVal = parseInt(b[key]) || 0;
      return aVal - bVal;
    });
  });

  eleventyConfig.addFilter("sortByKey", function(array, key) {
    if (!array || !Array.isArray(array)) return array;
    return [...array].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
  });

  // Configure input and output directories
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "data"
    },
    pathPrefix: "/",
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
