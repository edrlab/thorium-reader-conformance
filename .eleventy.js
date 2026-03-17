const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {
  // Configure Nunjucks to use different delimiters for comments
  // to avoid conflicts with Markdown anchor IDs like {#id}
  eleventyConfig.setNunjucksEnvironmentOptions({
    tags: {
      blockStart: '{%',
      blockEnd: '%}',
      variableStart: '{{',
      variableEnd: '}}',
      commentStart: '{##',
      commentEnd: '##}'
    }
  });

  // Configure Markdown to support {#id} anchor syntax
  let markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: true
  });

  markdownLibrary.use(markdownItAnchor, {
    slugify: (s) => {
      // Extract the ID from {#id} syntax if present
      const match = s.match(/\{#(.+?)\}/);
      if (match) return match[1];
      return s.toLowerCase().replace(/\s+/g, '-');
    }
  });

  // Remove {#id} syntax from text in the output
  const originalText = markdownLibrary.renderer.rules.text;
  markdownLibrary.renderer.rules.text = function(tokens, idx) {
    let text = tokens[idx].content;
    // Remove {#id} anchor syntax from the text
    text = text.replace(/\s*\{#[\w-]+\}\s*$/, '');
    return text;
  };

  eleventyConfig.setLibrary("md", markdownLibrary);

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
