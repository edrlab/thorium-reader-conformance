---
layout: epub-rs-report.njk
title: EPUB Reading System Conformance Report - Desktop
permalink: /documents/desktop3/epub-rs-report/
date: 2026-03-03
---

This is the EPUB Reading System conformance report for **Thorium Reader Desktop**. This report assesses Thorium Reader's compliance with both the [W3C EPUB Reading System 3.3 specification](https://www.w3.org/TR/epub-rs-33/) and the [W3C EPUB Reading System 3.4 specification](https://www.w3.org/TR/epub-rs-34/).

## Overview

Thorium Reader Desktop is evaluated against the EPUB Reading System 3.4 specification, which defines the mandatory requirements for applications that read EPUB 3 publications. The specification covers core media type support, publication handling, content rendering, navigation features, accessibility, user preferences, and metadata access.

## Platform Details

- **Operating Systems**: Windows (10+), macOS (10.13+), Linux (various distributions)
- **Architecture**: Based on Electron framework with web technologies
- **Specification Version**: EPUB Reading System 3.4
- **Reference**: [W3C EPUB RS 3.4](https://www.w3.org/TR/epub-rs-34/)

## Core Media Types Support

### Supported Formats
- **XHTML Content Documents**: Full support for EPUB 3 XHTML rendering
- **Scalable Vector Graphics (SVG)**: Comprehensive SVG support for illustrations and graphics
- **Images**: Support for GIF, JPEG, PNG, and SVG formats
- **CSS Styling**: CSS 2.1 and CSS 3 support for content presentation
- **Fonts**: OpenType font support for embedded typography

## Publication Handling

### Key Features
- **Navigation Document Processing**: Full support for EPUB Navigation Documents for publication navigation
- **Package Document Handling**: Proper processing of EPUB package documents metadata and structure
- **Publication Information**: Access to publication metadata, identifiers, and descriptive information

## Content Rendering

### Presentation Capabilities
- **Spine Order Processing**: Correct sequential processing of publication spine items
- **Content Dimensions**: Proper handling of content dimensions and viewport sizing
- **Reading Flow**: Support for both reflowable and fixed-layout EPUB publications
- **CSS Application**: Correct application of author and user stylesheets

## Navigation Features

### Navigation Support
- **Table of Contents (TOC)**: Full support for EPUB 3 table of contents navigation
- **Landmark Navigation**: Navigation to publication landmarks and document structures
- **Sequential Navigation**: Support for sequential reading through publication content
- **Page Navigation**: Support for page list navigation in EPUB 3 publications

## Accessibility Features

### Accessibility Support
- **Alternative Content**: Support for alternative content provisions (text alternatives, extended descriptions)
- **Semantic Markup**: Proper handling and rendering of semantic EPUB accessibility markup
- **Assistive Technology Integration**: Platform accessibility API integration for screen readers and assistive technologies
- **Navigation Accessibility**: Full keyboard and assistive technology access to all navigation features

## User Preferences & Customization

### User Control Features
- **Text Customization**: Support for font family, size, line height, letter spacing, and word spacing adjustments
- **Color Preferences**: Customizable foreground and background colors including high-contrast modes
- **Preference Persistence**: User preferences are saved and applied across reading sessions
- **Overrides**: User preferences properly override author stylesheets

## Additional Features

### Enhanced Reading Experience
- **Metadata Display**: Access to publication metadata, author, publisher, and other descriptive information
- **Media Overlays**: Support for EPUB Media Overlays with synchronized audio and text
- **Extended Features**: Support for additional EPUB 3 features and accessibility enhancements

## Testing & Verification

All test results are based on version 3.0.0 of Thorium Reader. Testing included:
- EPUB 3 publications from [epubtest.org](https://epubtest.org)
- W3C EPUB test suite samples
- Real-world EPUB publications from various publishers
- Platform-specific testing on Windows, macOS, and Linux
- Manual testing of features and user preferences
- Compatibility with EPUB Accessibility 1.1 features

## Summary

### Strengths
- **Complete EPUB 3 Support**: Full implementation of EPUB 3 publication reading requirements
- **Comprehensive Accessibility**: Excellent support for EPUB accessibility features and assistive technologies
- **Proper Content Rendering**: Correct rendering of XHTML, SVG, CSS, and all core media types
- **User Customization**: Extensive user preference options for personalizing reading experience
- **Cross-Platform**: Consistent implementation across Windows, macOS, and Linux
- **Standards Compliance**: Full conformance to EPUB Reading System 3.4 specification requirements
- **Navigation Features**: Complete support for EPUB navigation structures and landmark navigation

### Limitations
- **Advanced CSS Features**: Some specialized CSS features may have limited or partial support
- **DRM Support**: Digital rights management support may vary by platform and content provider
- **Specialized Profiles**: Some EPUB profiles or specialized extensions may have partial support
- **Rendering Edge Cases**: Very complex EPUB publications may encounter minor rendering differences

### Recommendations
- Continue monitoring emerging EPUB features and specifications
- Maintain regular testing with latest EPUB publications and test suites
- Consider expanding advanced CSS feature support
- Evaluate feasibility of enhanced DRM support where legally and technically permissible
- Engage with EPUB standards community for feedback and improvements
- Consider accessibility testing with real users of assistive technologies

## Conformance Declaration

Thorium Reader Desktop version 3.0.0 fully conforms to the EPUB Reading System 3.4 specification. This application successfully reads, processes, and renders EPUB 3 publications and implements all mandatory features defined in the specification.
