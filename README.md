# Thorium Reader Conformance Assessments (EDRLab)

This repository hosts EDRLab’s materials related to **conformance assessments** for EPUB publications and reading systems, with a focus on accessibility (EPUB Accessibility 1.2, WCAG) and the Thorium Reader ecosystem.

It is **not** the user documentation for Thorium Reader.  
User guides and support documentation are available at:  
https://support.thoriumreader.com/

## Purpose

This lab space provides:

- Methodology and checklists used by EDRLab to evaluate:
  - EPUB publications against [EPUB Accessibility 1.2](https://www.w3.org/TR/epub-a11y-12/)
  - Reading systems against [EPUB Reading Systems 3.4](https://www.w3.org/TR/epub-rs-34/)
- Sample conformance reports and evaluation templates
- Notes on tooling, test files, and workflows used in assessments
- Links to relevant standards and guidance (W3C, DAISY, etc.)

## Scope

Work in this repository covers:

- Conformance assessment processes and criteria
- Example evaluation reports (anonymized where appropriate)
- Test EPUBs and test suites used internally by EDRLab
- Documentation of how Thorium Reader is used as part of the assessment workflow

## Standards and References

Key references include:

- [EPUB Accessibility 1.2](https://www.w3.org/TR/epub-a11y-12/)
- [EPUB Accessibility 1.2 Explainer](https://www.w3.org/TR/epub-a11y-explain-12/)
- [EPUB Reading Systems 3.4](https://www.w3.org/TR/epub-rs-34/)
- [WCAG 2.x](https://www.w3.org/WAI/standards-guidelines/wcag/)

## Contact

For questions about these assessments or collaboration opportunities, please open an issue or contact EDRLab via the usual channels.

# Thorium Reader Conformance Reports

An 11ty static site generator for publishing and updating Thorium Reader conformance reports. This project generates beautiful, accessible HTML reports from structured JSON data conforming to W3C specifications and accessibility standards.

## Quick Start

```bash
npm install
npm run build # Production build
npm start     # Dev server with live reload
```

## Features

- **11ty Static Site Generation** - Fast, simple static site builder
- **Multiple W3C Specifications** - EPUB Reading System 3.4, Web Sustainability Guidelines, WCAG, UAAG
- **Structured Conformance Data** - JSON-based assessment data with custom layouts
- **Responsive Design** - Mobile-friendly layouts with DataTables integration
- **Accessibility First** - ARIA labels, semantic HTML, keyboard navigation
- **EDRLab Branding** - Favicon and header banner with EDRLab logo
- **Custom Report Layouts** - Dedicated Nunjucks templates for each report type

## Project Structure

```
.
├── src/
│   ├── _layouts/          # Nunjucks page templates
│   │   ├── base.njk       # Base layout with header/footer
│   │   ├── epub-rs-report.njk     # EPUB RS 3.4 specific layout
│   │   ├── wsg-report.njk         # Web Sustainability Guidelines layout
│   │   └── report.njk     # General conformance report layout
│   ├── _includes/         # Reusable template components
│   ├── data/              # JSON conformance data and data accessors
│   │   ├── desktop-epub-rs-support.json
│   │   ├── desktop-wsg-conformance.json
│   │   ├── epub_rs.js     # Data accessor for EPUB RS
│   │   └── wsg_support.js # Data accessor for WSG
│   ├── documents/         # Markdown content pages
│   │   ├── desktop3/      # Desktop 3.x platform reports
│   │   ├── ios/           # iOS platform reports
│   │   ├── android/       # Android platform reports
│   │   └── web/           # Web platform reports
│   └── css/               # Stylesheets
├── _site/                 # Generated output (ignored in git)
└── .eleventy.js           # 11ty configuration
```

## Reports

### Desktop 3.x
- **EPUB Reading System 3.4 Conformance** - Assessment of Thorium Reader's compliance with W3C EPUB RS 3.4 specification
- **EPUB Reading System 3.3 Conformance** - Assessment against earlier EPUB RS version
- **Web Sustainability Guidelines** - Evaluation against sustainability best practices
- **Accessibility Conformance** - WCAG, UAAG, and DAISY URS compliance assessment

### iOS (Beta)
- To be done

### Web (Beta)
- To be done

### Android (Coming Soon)
- To be done

## Data Format

Conformance data is stored as JSON with the following structure:

```json
{
  "productName": "Thorium Reader Desktop",
  "version": "3.0.0",
  "platform": "Desktop (Windows, macOS, Linux)",
  "reportDate": "2025-02-26",
  "evaluationDate": "2025-02-26",
  "conformanceSummary": "Description of conformance level...",
  "keyFindings": {
    "strengths": ["Feature 1", "Feature 2"],
    "limitations": ["Limitation 1"]
  },
  "testingEnvironments": ["Windows 11", "macOS 12", "Ubuntu 20.04"],
  "epubRS": [
    {
      "number": "2.1",
      "title": "Conforming Reading Systems",
      "description": "Detailed requirement description",
      "level": "A",
      "result": "Pass",
      "notes": "Implementation details"
    }
  ]
}
```

## Creating New Reports

1. **Create Data File**: Add JSON conformance data to `src/data/desktop3-[spec]-conformance.json`
2. **Update Data Index**: Add exports to `src/data/index.js` to include the new data:
   ```javascript
   // Add to appropriate section, e.g.:
   mySpec: {
     desktop3: require('./desktop3-[spec]-conformance.json')
   }
   ```
3. **Create Layout** (if needed): Create `src/_layouts/[spec]-report.njk` with custom styling
4. **Create Report Page**: Add markdown file to `src/documents/desktop3/[spec]-report.md`:
   ```yaml
   ---
   layout: [spec]-report.njk
   title: Spec Name Conformance Report - Desktop
   permalink: /documents/desktop3/[spec]-report/
   reportedPlatform: desktop3
   date: YYYY-MM-DD
   ---
   ```
5. **Update Navigation**: Add link in `src/documents/desktop3/index.md`
6. **Build**: Run `npm run build` to generate the site

## File Structure

All conformance data is consolidated in `src/data/index.js`, which exports:
- `accessibility` - Accessibility conformance data for all platforms
- `conformance` - Alias for accessibility (backward compatibility)
- `epubRS33` - EPUB Reading System 3.3 support data
- `epubRS34` / `epubRS` - EPUB Reading System 3.4 support data
- `wsg` - Web Sustainability Guidelines conformance

## Build & Deployment

```bash
npm run build  # Generates _site/ directory
```

Deploy `_site/` directory to GitHub Pages, Netlify, Vercel, or any static hosting service.

## License

BSD 3-Clause License

Part of Thorium Reader by [EDRLab](https://www.edrlab.org)
