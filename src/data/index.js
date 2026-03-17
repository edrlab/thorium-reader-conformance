/**
 * Consolidated Thorium Reader Conformance Data
 * 
 * This file combines all conformance assessment data:
 * - Accessibility conformance (WCAG, UAAG, EPUB Accessibility, DAISY)
 * - EPUB Reading System support (RS 3.3 and RS 3.4)
 * - Web Sustainability Guidelines
 * 
 * Each section exports both individual platform data and consolidated collections.
 */

module.exports = {
  // Accessibility Conformance Data
  accessibility: {
    desktop3: require('./desktop3-accessibility-conformance.json'),
    android: require('./android-accessibility-conformance.json'),
    ios: require('./ios-accessibility-conformance.json'),
    mobile: require('./android-accessibility-conformance.json'),
    web: require('./web-accessibility-conformance.json')
  },

  // Consolidated accessibility export (for backward compatibility)
  conformance: {
    desktop3: require('./desktop3-accessibility-conformance.json'),
    android: require('./android-accessibility-conformance.json'),
    ios: require('./ios-accessibility-conformance.json'),
    mobile: require('./android-accessibility-conformance.json'),
    web: require('./web-accessibility-conformance.json')
  },

  // EPUB Reading System 3.3 Support
  epubRS33: {
    desktop3: require('./desktop3-epub-rs-33-support.json')
  },

  // EPUB Reading System 3.4 Support (also referred to as epub_rs)
  epubRS34: {
    desktop3: require('./desktop3-epub-rs-support.json')
  },

  // Alias for EPUB RS 3.4
  epubRS: {
    desktop3: require('./desktop3-epub-rs-support.json')
  },

  // Web Sustainability Guidelines Conformance
  wsg: {
    desktop3: require('./desktop3-wsg-conformance.json')
  },

  // Android accessibility (for backward compatibility with accessibility_3)
  accessibility3: require('./desktop3-accessibility-conformance.json'),

  // EPUB RS 3.3 variants
  epubRS33_3: require('./desktop3-epub-rs-33-support.json'),

  // EPUB RS 3.4 variants
  epubRS34_3: require('./desktop3-epub-rs-support.json'),

  // WSG variants
  wsg3: require('./desktop3-wsg-conformance.json')
};
