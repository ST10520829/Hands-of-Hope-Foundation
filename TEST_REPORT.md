# Test report — Hands of Hope Foundation

**Test date:** 1 November 2026  
**Test scope:** static project checks plus browser interaction checks against the actual HTML/CSS/JavaScript source, with local image assets embedded and the programme JSON response mocked for the browser test harness. External map resources were disabled to test the fallback. This is not a live-deployment test.

## Passed checks

- JavaScript syntax check (`node --check`) passed for `js_assets/main.js`.
- All six HTML files have a page title, one H1, description and keywords metadata, viewport metadata, the shared stylesheet and the shared JavaScript file.
- No duplicate IDs were found in the six pages.
- All local image paths and responsive `srcset` references checked by the static audit exist; images have `alt` attributes.
- All local page links and checked in-page fragments resolve to existing files/IDs.
- Both forms have explicit `action` and `method` attributes, and form controls have associated labels.
- `js_assets/programmes.json` parses successfully and all programme image paths exist.
- `sitemap.xml` parses as XML. Its `example.org` URLs are placeholders and must be replaced before publication.
- `css_assets/style.css` parsed with `tinycss2` without top-level parse errors.
- Browser rendering confirmed the homepage at desktop and mobile viewport sizes.
- Browser interaction tests passed for mobile navigation open/close using Escape; dynamic programme data load; keyword search; no-results state and reset; category filtering; alphabetical sorting; gallery lightbox open/close using Escape; invalid enquiry form feedback; tailored valid enquiry response; and contact-form email-draft generation.
- With external map resources disabled, the contact page displays the explanatory map fallback instead of a broken blank region.

## Not yet verified

- Live Leaflet and OpenStreetMap tile loading and attribution on an internet-connected browser.
- Final appearance and interactions when opened through the actual local server and after GitHub Pages deployment. The browser environment blocked navigation to localhost, so the interaction harness rendered the project source in-page instead.
- Final screenshots from the actual deployed website. Existing `evidence/reference-before-redesign/` images are historical only and must not be submitted as final evidence.
- Final canonical URLs, sitemap URLs and `robots.txt` sitemap directive. These depend on the repository's real GitHub Pages URL.
- Image provenance/licences; the original source pages were not included in the supplied archive.
- Email delivery: the contact form creates a `mailto:` draft to `hello@example.org`, which is a reserved example address, not a live inbox. The visitor must send the draft from an email application. The involvement form is a local demonstration response only. Neither form stores submissions or has a backend.
- Off-page SEO actions such as real backlinks and social promotion. These require publishing and outreach; they cannot be truthfully created by local code alone.

## Before submission

1. Create/confirm the GitHub repository and enable Pages.
2. Replace `example.org` URLs with the exact live Pages URL; add canonical tags consistently.
3. Verify all images' original source and licensing details and complete accurate credits.
4. Open the published site on desktop and mobile, test the full checklist in `README.md`, and inspect the browser console/network requests.
5. Capture new desktop, tablet and mobile screenshots from the final deployed site.
6. Make multiple descriptive Git commits, push the project, and confirm the public repository and Pages URLs.
