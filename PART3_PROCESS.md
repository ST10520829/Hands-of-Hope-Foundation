# Part 3 Process Notes — Enhancing Functionality and SEO

**Project:** Hands of Hope Foundation (fictional non-profit website concept)  
**Student:** Mathebula Bright Vuyo — ST1020829  
**Module:** WEDE5020

## 1. Changes made in response to Part 2 feedback

The Part 2 assessment awarded 80/100. The lower-scoring documentation criteria were feedback response (5/10), README (2/5), changelog (0/5) and references (0/5); responsive typography scored 4/5 and descriptive commits 4/5. The original Part 1 feedback was not included with the materials available for this pass, so individual Part 1 corrections cannot be independently checked.

The site now has a consistent responsive design system, page-specific documentation, a detailed changelog, a reference list and an audit report. The final Git repository must still contain multiple descriptive commits; a ZIP cannot prove that history.

## 2. JavaScript functionality and interactive elements

### Responsive navigation

`js_assets/main.js` toggles the mobile navigation, updates `aria-expanded`, closes after a navigation link is selected and supports the Escape key. The menu uses a real button, so it can be operated with touch, mouse and keyboard.

### Interactive map

`contact.html` loads Leaflet and the map data from OpenStreetMap. `js_assets/main.js` creates a map centred on Pretoria and opens a marker popup. The page explicitly states that Pretoria is an illustrative project area, not a real Hands of Hope office. If the external library is unavailable, the page shows explanatory fallback text.

### Gallery lightbox

`programmes.html` includes four image buttons and a native `<dialog>` viewer. JavaScript sets the selected image and caption, opens the dialog, supports closing by button, backdrop or Escape, and returns focus to the image button that opened it.

### Dynamic programme content, search and sorting

The programme records are stored in `js_assets/programmes.json`. The Programmes page uses JavaScript `fetch()` to load that file and construct the visible programme cards. Visitors can search the title and description text, filter by category, sort A–Z or Z–A and clear a no-results state. The original HTML list remains as a fallback if the JSON request fails. This static-data request is an AJAX-style asynchronous fetch; it is not a form-submission backend.

### Other interaction

The footer year is updated by JavaScript. FAQ answers use native `<details>`/`<summary>` disclosure elements, which work without a JavaScript dependency. CSS transitions provide restrained feedback and respect `prefers-reduced-motion`.

## 3. Form functionality and validation

### Get Involved (`enquiry.html`)

The form requests a name, email, interest, message and confirmation that the visitor understands this is a demonstration. HTML constraints and JavaScript checks validate required fields, email format, minimum text length and consent. Field-level messages, `aria-invalid`, focus movement and a character count help users correct mistakes. After valid input, the page gives a topic-specific response describing what a real coordinator would check next, such as suitable dates, priority items, collection arrangements or partnership details.

### Contact (`contact.html`)

The contact form collects basic contact details, a topic and a full message. After validation, JavaScript compiles the information into a message and offers a `mailto:` link that opens an email application. The recipient is `hello@example.org`, a reserved example address because this is a fictional organisation; it is not a live inbox. The visitor must send the draft manually.

### Backend/AJAX boundary

GitHub Pages is static hosting and does not provide a server endpoint or database. No genuine AJAX form-submission endpoint, live inbox or storage service was supplied for this fictional project. The website therefore does not pretend to transmit or store submissions. To enable real asynchronous form delivery, a real endpoint and recipient must be configured by the project owner before launch.

## 4. SEO measures

- Each of the six HTML pages has a unique, descriptive `<title>` and meta description.
- Page-specific meta-keywords are included because the assessment rubric explicitly asks for them. They are relevant to each page and are not treated as a guarantee of Google ranking.
- Semantic headings, descriptive internal links, descriptive image `alt` text and crawlable navigation support users and crawlers.
- Responsive image `srcset`/`sizes` let browsers select suitable image sizes. Below-the-fold images use lazy loading and asynchronous decoding where appropriate.
- Open Graph title, description, site name and image metadata are present for link previews.
- `robots.txt` and `sitemap.xml` are included. Their `example.org` addresses are deployment placeholders and must be replaced with the actual GitHub Pages URL before publishing.
- Canonical tags are intentionally not guessed. Add matching canonical URLs to all six pages once the final public URL is confirmed.
- The project has no verified real business address, so local business schema and claims of a real office are intentionally omitted.

### Off-page SEO

Real backlinks and social-media promotion require publishing and legitimate outreach. They cannot be truthfully created by editing local HTML. After deployment, the student can share the live project in appropriate places and earn genuine links; do not create fake backlinks or claim rankings.

## 5. Performance and security considerations

- Shared local CSS and JavaScript reduce duplicated code.
- Responsive image variants reduce unnecessary downloads on smaller screens.
- Lazy loading is used for below-the-fold imagery.
- The map uses an external Leaflet CDN with Subresource Integrity and OpenStreetMap tiles; the map needs an internet connection.
- No payment information is requested or processed.
- No form data is stored by this site. Users are warned not to enter sensitive personal or financial information.
- Client-side validation improves usability but is not a substitute for server-side validation if a real backend is later added.

## 6. Testing and evidence

See `TEST_REPORT.md` for the checks already run and the verification boundaries. The static HTML/CSS/JS checks and local browser interaction tests passed with the dynamic JSON response mocked and external network resources disabled. Before submission, open the project through Live Server and then test the published site; verify the live map, actual assets, all responsive widths, forms, console and network requests. Capture genuine final desktop, tablet and mobile screenshots after that test. The old screenshots have been excluded from the final package so they cannot be mistaken for evidence of the redesign.
