# Deployment notes — Hands of Hope Foundation

This site is a fictional student project. The final GitHub Pages URL is not known yet. The current `sitemap.xml` and `robots.txt` sitemap directive use `https://example.org/` as a visible template only. **Do not publish those URLs unchanged.** Once the repository name and GitHub username are confirmed, replace all sitemap locations and the sitemap directive with the exact public URL. Add matching canonical URL tags to each HTML page after the base URL is confirmed.

## Forms

The contact form validates the message and prepares a `mailto:` draft addressed to `hello@example.org`, a reserved example-domain address. This demonstrates the workflow, but it is not a real inbox and will not deliver to a real foundation. The visitor must still send the email from their own email application. The get-involved form gives a topic-specific local response but does not send or store data. No payment processing exists. Never present the site as a live charity service.

## Map

The contact page loads Leaflet and OpenStreetMap tiles from third-party services. It is centred on Pretoria only to demonstrate map interaction. It does not represent a real office address. The map requires an internet connection; the page provides explanatory fallback text if the library is unavailable.

## Before publishing

- Confirm the GitHub repository name and Pages URL.
- Replace all `example.org` URLs in `sitemap.xml` and `robots.txt`; add canonical tags using the same published base URL.
- Test all pages, form validation, menu interactions, dynamic search/sort, gallery lightbox, interactive map and keyboard navigation in a browser.
- Verify image source/licence records against the original sources.
- Capture genuine final desktop, tablet and mobile screenshots after browser tests.
- Commit and push the final website, then test the deployed URL and its assets.
