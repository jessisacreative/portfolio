# Website redesign — Launch candidate

**Status: READY FOR VISUAL REVIEW, NOT YET APPROVED OR PUBLISHED**

This branch contains a complete, replacement portfolio site at the public-facing paths. If GitHub Pages is configured to deploy from `main` at the repository root, **merging draft PR #4** will replace the current site. Do not merge until final visual review.

## What is included

- 16 HTML pages: homepage; Work, Photography, Journal, About and Contact; ten full case studies.
- Two shared stylesheets: `case-study.css`, `sections.css`; homepage CSS embedded in `index.html`.
- Three original concert photographs in `photography/`, copied from the user's connected Drive. They are displayed with photographer attribution.
- Existing portfolio images reused from `images/` and existing case-study copy retained and refined.
- Homepage project-category filtering and Work page category filtering.
- Unique titles/descriptions, canonical URLs, Open Graph metadata, structured data on relevant pages, descriptive image alt attributes and a 16-URL sitemap.

## Sources and factual handling

Based on Jess's current public portfolio, their connected Google Drive documents "Master CV Template (2026)", "Portfolio Copy", "Portfolio / Journal", and selected self-authored photographs from the My Photography collection. These documents were **read**, not modified. The master CV clarified that a PGCert in Creative Practice was awarded; avoid retaining an outdated claim that the MA remains in progress.

Sources include both employer-led projects and independently made work. Text distinguishes responsibilities and collaborators. No sensitive information from private work documents has been added deliberately.

## Static checks completed

- 16/16 HTML pages checked
- 97 image tags: all have alt attributes
- 169 relative internal links: no missing local targets identified
- All 16 pages have a single H1, a meta description and a canonical URL
- No remaining `src="../images/"` paths in publication HTML
- Three added photographic image blobs found on the launch branch
- Sitemap includes 16 URLs; `robots.txt` points to that sitemap

## Final review before merging

1. **Visual QA in an actual browser.** Check desktop, tablet and phone widths, focus visibility, font rendering, colour contrast, image crops and motion preferences.
2. **Image verification.** Look through every gallery image and caption to confirm visual match and image usage rights. A few assets originate from institutional campaigns rather than personal photography.
3. **Performance.** The three JPEGs in `photography/` total approximately 4.7 MB. Create lightweight WebP or AVIF derivatives before launch where possible, and inspect image load performance with Lighthouse.
4. **Crediting and consent.** Ensure artist, organisational, contributor and photographer credits are correct. A shared client project is not necessarily entirely Jess's personal production.
5. **Cross-check case studies.** Confirm wording/attribution and that all public statistics may be published. Remove anything commercially sensitive.
6. **SEO.** If keeping the GitHub Pages URL, canonicals already point there. If switching to a custom domain, update every canonical/OG URL and the sitemap first, then configure Search Console.
7. **Functional smoke test.** Navigation, filters, mailto links, external links, back/next project controls, mobile layout.
8. **Launch.** Only then mark PR ready and merge; submit the sitemap to Google Search Console. Link the older Canva portfolio to the new URL.

## How to work without writing code

Describe changes by intent and location, e.g. "make the hero less corporate", "put gig photography before museum work", or "the caption on photo 03 is wrong". Changes can be implemented on this branch before any public launch.

## Draft and release branches

- `concept/editorial-portfolio-2026` contains the working prototype under `concept/`.
- `launch/editorial-site-2026` contains the **root-path replacement site** and is the actual launch candidate.
- `main` is the current live portfolio and has not been changed by this work.
