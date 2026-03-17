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
    desktop: require('./desktop-accessibility-conformance.json'),
    desktop3: require('./desktop3-accessibility-conformance.json'),
    desktop4: require('./desktop4-accessibility-conformance.json'),
    android: require('./android-accessibility-conformance.json'),
    ios: require('./ios-accessibility-conformance.json'),
    mobile: require('./android-accessibility-conformance.json'),
    web: require('./web-accessibility-conformance.json')
  },

  // Consolidated accessibility export (for backward compatibility)
  conformance: {
    desktop: require('./desktop-accessibility-conformance.json'),
    desktop3: require('./desktop3-accessibility-conformance.json'),
    desktop4: require('./desktop4-accessibility-conformance.json'),
    android: require('./android-accessibility-conformance.json'),
    ios: require('./ios-accessibility-conformance.json'),
    mobile: require('./android-accessibility-conformance.json'),
    web: require('./web-accessibility-conformance.json')
  },

  // EPUB Reading System 3.3 Support
  epubRS33: {
    desktop: require('./desktop-epub-rs-33-support.json'),
    desktop3: require('./desktop3-epub-rs-33-support.json'),
    desktop4: require('./desktop4-epub-rs-33-support.json')
  },

  // EPUB Reading System 3.4 Support (also referred to as epub_rs)
  epubRS34: {
    desktop: require('./desktop-epub-rs-support.json'),
    desktop3: require('./desktop3-epub-rs-support.json'),
    desktop4: require('./desktop4-epub-rs-support.json')
  },

  // Alias for EPUB RS 3.4
  epubRS: {
    desktop: require('./desktop-epub-rs-support.json'),
    desktop3: require('./desktop3-epub-rs-support.json'),
    desktop4: require('./desktop4-epub-rs-support.json')
  },

  // Web Sustainability Guidelines Conformance
  wsg: {
    desktop: require('./desktop-wsg-conformance.json'),
    desktop3: require('./desktop3-wsg-conformance.json'),
    desktop4: require('./desktop4-wsg-conformance.json')
  },

  // Android accessibility (for backward compatibility with accessibility_3)
  accessibility3: require('./desktop3-accessibility-conformance.json'),

  // Desktop 4 accessibility (for backward compatibility with accessibility_4)
  accessibility4: require('./desktop4-accessibility-conformance.json'),

  // EPUB RS 3.3 variants
  epubRS33_3: require('./desktop3-epub-rs-33-support.json'),
  epubRS33_4: require('./desktop4-epub-rs-33-support.json'),

  // EPUB RS 3.4 variants
  epubRS34_3: require('./desktop3-epub-rs-support.json'),
  epubRS34_4: require('./desktop4-epub-rs-support.json'),

  // WSG variants
  wsg3: require('./desktop3-wsg-conformance.json'),
  wsg4: require('./desktop4-wsg-conformance.json'),
  wsgSupport: require('./desktop-wsg-conformance.json')
};
