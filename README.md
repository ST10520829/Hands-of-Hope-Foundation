# Hands of Hope Foundation — WEDE5020 Website Project

**Student:** Mathebula Bright Vuyo  
**Student number:** ST1020829  
**Module:** WEDE5020 — Web Development (Introduction)  
**Project:** Hands of Hope Foundation (fictional non-profit concept)

## Project overview

Hands of Hope Foundation is a fictional community-support organisation concept. This six-page website demonstrates how a non-profit could explain its purpose, present proposed community programmes and invite people to explore volunteering or donation enquiries. It is a student project, not a live charity, and does not collect money.

## Pages

- `index.html` — Home, mission introduction and calls to action
- `about.html` — Background, mission, vision and values
- `programmes.html` — Proposed food drives, clothing support and community outreach; includes interactive filters
- `donate.html` — Responsible ways to support and donation FAQ; no payment processing
- `enquiry.html` — Accessible, client-validated get-involved form
- `contact.html` — Project information and client-validated contact demonstration form

## Technology

- HTML5 semantic structure
- Shared responsive CSS: `css_assets/style.css`
- JavaScript enhancements: `js_assets/main.js`
- Local images in `_images/page/` and `_images/gallery/`
- Git/GitHub for version control and publication

## Functionality implemented

- Responsive navigation toggle with `aria-expanded`, close-on-link and Escape-key handling
- Dynamic programme data loaded from `js_assets/programmes.json`, with working keyword search, category filters, A–Z/Z–A sorting, a no-results state and a static fallback
- Current-year footer text generated with JavaScript
- Native form validation enhanced with clear custom messages, field-level error text, `aria-invalid`, minimum lengths, character counters, consent confirmation, and a review summary
- Copy-to-clipboard option for the local demonstration form summary, with a selection fallback
- FAQ disclosure widgets using native `<details>` and `<summary>`
- Responsive image gallery lightbox using native `<dialog>`, close button, backdrop click, Escape-key support and focus return
- Leaflet/OpenStreetMap interactive map centred on Pretoria as an explicitly illustrative area, not a real organisation address
- Keyboard focus styling, skip link, semantic landmarks, image alternative text and reduced-motion support

### Important form limitation

The get-involved form is a **front-end demonstration**. It validates entries and provides a tailored, local next-step response; it does not send or store the enquiry. The contact form validates entries and prepares a `mailto:` draft to the reserved example address `hello@example.org`; this is not a live inbox and the visitor must still send the email in their own email application. The site must not be described as a live enquiry system. No real backend or live inbox is configured. This is clearly documented in the interface and `DEPLOYMENT_NOTES.md`.

## SEO and performance work

- Unique page titles, meta descriptions and rubric-requested meta keywords on all six pages
- HTML language and responsive viewport metadata
- Open Graph title, description, site name and image metadata
- Crawl directive in `robots.txt`
- Semantic headings, descriptive link text, meaningful image alt text and crawlable internal links
- Responsive image `srcset` and `sizes` for large page imagery; dimensions, lazy loading and async decoding on below-the-fold images
- Local assets and shared stylesheet/JavaScript files

**Deployment-dependent SEO still required:** replace the `example.org` placeholders in `sitemap.xml` and `robots.txt` with the final GitHub Pages URL, then add matching canonical URL tags to each page. Do not publish the template URLs unchanged. SEO work does not guarantee search indexing or rankings.

## Part 2 feedback response

The Part 2 assessment awarded 80/100. The main weaker areas were the response to Part 1 feedback (5/10), responsive typography (4/5), descriptive commits (4/5), README (2/5), changelog (0/5) and references (0/5).

- The stylesheet has been redesigned as a shared responsive design system with relative units, fluid type sizing, desktop/tablet/mobile breakpoints, active navigation, form controls and visible focus states.
- README documentation has been expanded with a page inventory, functionality, SEO approach, testing boundaries and remaining deployment tasks.
- `CHANGELOG.md` records the actual changes in this project iteration.
- `REFERENCES.md` documents technical references and distinguishes source/licence details that still require confirmation.
- `PART2_AUDIT_REPORT.md` records the assessment response. The original Part 1 marker feedback was not supplied, so each Part 1 correction cannot yet be cross-checked individually.
- Descriptive Git commits must be created in the final repository; they cannot be represented by a ZIP alone.

## Testing checklist

The local interaction checks completed so far are summarised in `TEST_REPORT.md`. Run these additional checks after opening the site in a browser (preferably Live Server) and repeat on the published URL:

1. Navigate between all six pages and verify the current-page state.
2. At mobile width, open/close the menu, follow a link and test Escape.
3. On Programmes, test category filters, keyword search, A–Z/Z–A sorting, no-results behaviour and clearing search.
4. Select each gallery image; test close button, backdrop and Escape, then confirm keyboard focus returns to the selected image button.
5. On Contact, test map pan/zoom and marker popup; confirm fallback text is readable if external map resources are blocked.
6. Submit each form empty; verify errors, focus placement and accessible messages.
7. Submit valid demo data and test the summary/copy interaction. Use test data only.
8. Open each FAQ disclosure and verify keyboard access.
9. Inspect at approximately 1440px, 1024px, 768px, 390px and 320px widths for overflow, overlap, readability and image cropping.
10. Check browser console and Network panel for missing local assets or JavaScript errors.
11. Confirm the deployed URL, canonical metadata and sitemap before final publication.
12. Capture genuine desktop, tablet and mobile screenshots after the final browser test; do not reuse pre-redesign screenshots as final evidence.

## Repository structure

```text
Hands-of-Hope-Foundation/
├── index.html
├── about.html
├── programmes.html
├── donate.html
├── enquiry.html
├── contact.html
├── css_assets/style.css
├── js_assets/main.js
├── js_assets/programmes.json
├── _images/
├── evidence/
├── README.md
├── CHANGELOG.md
├── REFERENCES.md
├── PART2_AUDIT_REPORT.md
├── PART3_PROCESS.md
├── TEST_REPORT.md
├── DEPLOYMENT_NOTES.md
├── WEB DEVELOPMENT PROJECT PROPOSALS.docx
├── robots.txt
└── sitemap.xml
```

## AI use and academic integrity

AI-assisted drafting and coding must be disclosed in the format required by the course. The student should review the code, understand the implementation, run the tests, document genuine changes, and follow the lecturer's rules for permitted AI assistance. Do not claim browser tests or Google Form deployment that have not actually been completed.


## Changelog

### 1 November 2026 — Part 3 build and Part 2 feedback response

- Rebuilt the six-page site with a consistent forest-green, sage, warm-gold and neutral design system; added responsive navigation, fluid headings, improved mobile layouts, focus styling and reduced-motion support.
- Added JavaScript navigation interaction, a dynamic programme list sourced from JSON, keyword search, category filters, sorting and an accessible no-results state.
- Added a responsive gallery lightbox and an interactive Leaflet/OpenStreetMap map that clearly identifies Pretoria as an illustrative area rather than a real office.
- Added client-side form validation, field-level feedback, character counts, tailored involvement responses and a contact email-draft workflow.
- Added unique page titles, descriptions, rubric-requested meta keywords, Open Graph metadata, `robots.txt` and a `sitemap.xml` template.
- Expanded this README, `REFERENCES.md`, `PART2_AUDIT_REPORT.md`, `PART3_PROCESS.md`, `TEST_REPORT.md` and `DEPLOYMENT_NOTES.md`.
- Remaining before publication: test the actual local-server/live site and map with internet access, capture genuine final screenshots, verify image provenance, replace sitemap placeholders and add canonical URLs after the GitHub Pages URL is known, then commit/push and test the live site.

## References (summary)

- MDN Web Docs. *Client-side form validation*. https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation
- MDN Web Docs. *Using responsive images in HTML*. https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images
- W3C WAI. *Labeling Controls*. https://www.w3.org/WAI/tutorials/forms/labels/
- W3C WAI. *Validating Input*. https://www.w3.org/WAI/tutorials/forms/validation/
- Google Search Central. *SEO Starter Guide*. https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Leaflet. *A JavaScript library for interactive maps*. https://leafletjs.com/
- OpenStreetMap contributors. *Copyright and License*. https://www.openstreetmap.org/copyright

Full reference details and the unresolved image-provenance note are in `REFERENCES.md`.
