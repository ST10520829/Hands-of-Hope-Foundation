# Changelog — Hands of Hope Foundation

All entries describe changes actually made to this project.

## 2026-11-01 — Part 3 development pass and Part 2 feedback improvements

### Design and responsive layout
- Rebuilt the shared CSS design system with forest green, sage, warm gold, neutral surfaces, rounded imagery, consistent spacing and a clearer typographic hierarchy.
- Reworked the shared header, responsive navigation, page heroes, programme cards, split-feature sections, form panels, notices and footer.
- Added mobile menu controls, visible focus styles, skip navigation and reduced-motion handling.
- Added responsive typography and breakpoints for large desktop, tablet, mobile and narrow screens.
- Preserved responsive `srcset` image variants and added intrinsic image dimensions plus loading hints where appropriate.

### Additional Part 3 requirements implemented
- Added dynamic programme data in `js_assets/programmes.json`, loaded by JavaScript with keyword search, category filters, alphabetical sorting and a no-results state; static HTML remains available if loading fails.
- Added a responsive image gallery with a native dialog lightbox, close button, backdrop handling, Escape support and focus return.
- Added a Leaflet/OpenStreetMap interactive map centred on Pretoria for demonstration purposes only; interface text states it is not a real office location.
- Added meta-keywords requested by the assessment rubric, unique titles/descriptions and Open Graph metadata across all six pages.
- Added a syntactically valid sitemap template and linked it from `robots.txt`; the example.org URLs must be replaced with the final published URL before deployment.
- Contact form now builds a mailto email draft to the reserved example.org address, while the get-involved form gives a topic-specific next-step response. Both remain clearly marked as demo workflows.

### Page content and functionality
- Rebuilt the six pages while preserving the proposed sitemap: Home, About, Programmes, Support/Donate, Get Involved and Contact.
- Clarified throughout the site that Hands of Hope is a fictional student project, avoiding invented live contact details or claims that a real charity accepts donations.
- Added interactive programme filters with accessible pressed states and a live result announcement.
- Added responsive navigation toggle behaviour, Escape-key support and current-year footer text.
- Added custom client-side validation, field-specific errors, character counts, consent acknowledgement and local review summaries for contact and involvement forms.
- Added a copy-summary interaction with a fallback when clipboard access is unavailable.
- Added native FAQ disclosure elements and clear donation/payment limitations.

### SEO and documentation
- Added unique page titles, meta descriptions, Open Graph metadata, language/viewport metadata and descriptive alternative text.
- Added `robots.txt` allowing normal crawling.
- Added this detailed changelog and expanded README, audit report and deployment notes.
- Deferred canonical URLs and `sitemap.xml` until the real GitHub Pages URL is confirmed; placeholder URLs would be misleading.

### Known limitations / next steps
- Browser-based visual and interaction tests must be run against the final local and deployed versions; static validation is not a substitute.
- Forms validate and display a local summary only; there is no server-side storage or email delivery.
- If the lecturer specifically requires a Google Form embed, the student must create the real Google Form and insert its actual embed URL.
- Verify image source/licence records against the original sources. Do not infer licences from filenames.
- The original Part 1 marker feedback was not included, so Part 1 corrections cannot be individually verified.
- Create multiple descriptive commits and push the final site to the correct GitHub repository.
