# Part 2 feedback and Part 3 implementation audit — Hands of Hope Foundation

**Student:** Mathebula Bright Vuyo (ST1020829)  
**Basis:** supplied website archive, project proposal, Part 2 feedback PDF, Part 2 instructions available in the project context, and technical implementation references.

## Part 2 feedback response

The supplied assessment shows 80/100. Strong areas included the external stylesheet and much of the original desktop/responsive CSS. We retained the six-page sitemap and responsive source imagery while improving the visual system and documentation.

| Feedback area | Response in current project | Status / limitation |
|---|---|---|
| Feedback for Part 1: 5/10 | Detailed changelog and audit notes added; content and shared UI rebuilt | Cannot verify every Part 1 correction because the original Part 1 feedback is not in the supplied materials |
| External stylesheet: 10/10 | One shared stylesheet linked across all six pages | Static check required after final edits |
| Responsive typography: 4/5 | Fluid heading sizes and responsive spacing added | Needs visual browser testing at multiple widths |
| Descriptive commits: 4/5 | Suggested commit plan should be recorded in Git | Cannot be satisfied by a ZIP alone; create real commits in repository |
| README: 2/5 | Expanded README with pages, features, SEO, tests and limitations | Student should review and understand the document |
| Changelog: 0/5 | Detailed dated changelog added | Check course preference for changelog embedded in README as well as separate file |
| References: 0/5 | Technical references added; asset provenance warning documented | Student must verify source/licence records and actual consultation dates |

## Part 3 feature map

| Feature area | Implementation | Verification boundary |
|---|---|---|
| JavaScript functionality beyond form validation | Mobile nav, dynamic JSON programme list, search/filter/sort, current-year footer, gallery lightbox and FAQ disclosure | Static checks and local browser interaction tests passed with programme data mocked; test on actual local server and live site |
| Interactive map | Leaflet/OpenStreetMap map centred on illustrative Pretoria area with marker popup | Requires network access for Leaflet and map tiles; test in browser |
| SEO | Unique titles/descriptions, rubric-requested meta keywords, Open Graph metadata, semantic HTML, alt text, internal links, `robots.txt` and `sitemap.xml` template | Sitemap currently uses example.org placeholders; replace with real published URL before deployment |
| HTML forms | Contact and get-involved forms with labels, required fields, consent notice and explicit action/method attributes | Front-end demonstration; contact opens an email draft rather than automatically delivering it |
| JavaScript validation | Custom field-level validation, messages, character counts, focus management and local summary | Browser test required |
| Contact email workflow | Validated contact form creates a mailto draft to reserved `hello@example.org` | Not a live inbox; user must send from an email app |
| Responsive testing evidence | README checklist supplied | Final screenshots must be captured after genuine browser tests; old screenshots are not final evidence |
| GitHub | Project prepared for repository | Must be committed, pushed and tested on the final live URL |

## Final status

This is a substantial implementation pass, not a guarantee of marks or a claim that every requirement is already verified. Live-network map testing, final deployed-site screenshot evidence, image provenance verification, real Git commits, GitHub deployment, canonical URLs and replacing the example.org sitemap placeholders remain to be completed. Local browser interaction tests and static checks are documented in `TEST_REPORT.md`.
