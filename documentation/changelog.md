# Changelog

All notable changes to the **GrainCraft** template will be documented in this file.

## [1.0.1] - 2026-03-07
### Added
- Mandatory `404.html` error page.
- Mandatory `coming-soon.html` maintenance page.
- `robots.txt` and `sitemap.xml` for production readiness.
- JSON-LD structured data for local business SEO.
- Separate `dark-mode.css` and `rtl.css` for modular architecture.

### Changed
- Refactored `style.css` to externalize theme and layout overrides.
- Updated homepage hero visibility with darkening overlays and text shadows.
- Centered portfolio hero content for improved visual balance.
- Standardized CTA button classes across all secondary pages.

### Fixed
- CSS Specificity Conflict: Upgraded theme selectors to `html[data-theme="dark"]` ensuring variables and layout overrides in separate files correctly override base styles across the entire site.
- Vertical white space issues in the footer.
- Visibility of "Meet the Maker" and "Featured Commission" eyebrow text in various themes.
- Misalignment of CTA description on the Maker Journal page.

## [1.0.0] - 2026-03-05
### Added
- Initial release of the GrainCraft premium woodworking portfolio template.
- Integrated multiple "elite" custom visual assets.
- Implemented filtering system for portfolio projects.
- Added dynamic stats counter and interactive intersection observes.

## [1.0.2] - 2026-03-11
### Changed
- Internal implementation updates during styling experiments.

### Fixed
- Cleaned the project back to the stylesheet-driven baseline after removing the unused Tailwind runtime approach.
