---
layout: report.njk
title: Conformance Report - Desktop
permalink: /documents/desktop4/accessibility-report/
reportedPlatform: desktop4
date: 2026-03-01
---

This is the accessibility conformance report for **Thorium Reader Desktop**. Thorium Reader is a EPUB reading application designed with accessibility as a core feature.

## Platform Details

- **Operating Systems**: Windows (10+), macOS (10.13+), Linux (various distributions)
- **Architecture**: Based on Electron framework with web technologies
- **Primary Focus**: Reading and navigation of EPUB publications
- **Accessibility Features**: Screen reader support, keyboard navigation, text customization

## Key Accessibility Features

### Navigation & Interaction
- Full keyboard navigation support
- Tab order and focus management
- Keyboard shortcuts for common tasks
- No keyboard traps

### Visual Accessibility
- Adjustable font sizes
- Customizable colors and contrast
- User stylesheet support
- Zoom functionality

### Content Accessibility
- Support for EPUB accessibility features
- Text-to-speech (when available)
- Alternative text for images
- Proper document semantics

### Assistive Technology Support
- Screen reader compatibility (NVDA, JAWS, VoiceOver)
- Platform accessibility APIs
- ARIA support for interactive components

## Testing Notes

All test results are based on version 3.0.0 of Thorium Reader. Tests were conducted using:
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS)
- Orca (Linux)
- Manual keyboard navigation testing
- Functional testing with various EPUB publications

## Summary

###  strengths
    * Comprehensive keyboard navigation with all features accessible
    * Excellent compatibility with major assistive technologies (NVDA, JAWS, VoiceOver, Orca)
    * Extensive text and visual customization options (font, size, color, spacing, contrast)
    * Full support for EPUB accessibility features including navigation documents and page lists
    * Proper platform accessibility service integration on all supported platforms
    * Clean, accessible user interface design
    * Accessible documentation in multiple languages
  
###  limitations
    * Interface zoom without breaking reading experience remains challenging
    * Citation generation feature not yet implemented
    * Text-to-speech caption view needs extension to visual reading mode for some scenarios
    * Tactile graphics support for refreshable Braille displays not yet available

###  recommendations
    * Continue enhancement of viewport zoom functionality to maintain reading experience integrity
    * Implement citation/reference generation for future versions
    * Extend caption/clean view mode to all visual reading scenarios
    * Investigate compatibility with tactile graphics devices as technology evolves
    * Regular testing with latest versions of assistive technologies and new EPUB publications
