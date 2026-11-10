# S. Tolga Er — academic website

Static HTML and CSS website hosted on GitHub Pages at https://stolgaer.com/.

## Pages

- `index.html`: biography and the three latest updates.
- `work-in-progress/index.html`: four working papers, with available abstracts shown openly and PNG image placeholders.
- `publications/index.html`: publications grouped by Political Economy & Finance, Health Economics & Mental Health, and Governance and Tourism.
- `teaching/index.html`: tutorials and thesis supervision, based on `personal/academic_cv.pdf`.
- `cv/index.html`: embedded CV with direct open and download links.
- `stylesheets/styles.css`: the shared layout, font stack, colors, and responsive rules.

The same photo, navigation, profile links, and outer margins appear on all five pages. Main navigation links are repeated in each HTML file so the site works without JavaScript or a build step. If changing navigation, update all five pages.

## Compact layout

At viewport widths of 900px or less, and on touch devices, the sidebar moves above the content. A boxed three-line menu uses native HTML details/summary to reveal the five page links. The photo, site name, and page heading share the left edge. Academic and professional profiles use a row of local SVG icons with accessible link names in this layout; desktop retains text labels.

The desktop column gap is 25px (17.5px on the intermediate layout). The hosting credit is a footer inside the right-hand content column on every page. All pages use the same versioned stylesheet URL to avoid stale CSS after layout revisions.

Icon sources and notices are documented in `assets/icons/README.md`.

## Content maintenance

- Add new updates at the top of the list in `index.html`; keep three entries.
- Keep paper titles, coauthors, publication details, abstracts, and links together in each article.
- The current source supplies an abstract for the AI-related corporate name changes working paper only. Add the other abstracts when available.
- To add a research image, replace that paper's `figure.paper-image-placeholder` with an `img.paper-image` using the PNG's path and meaningful alt text.
- Replace `personal/academic_cv.pdf` to update both the embedded CV and the download.
- Preserve the Google and Facebook verification meta tags in the homepage.
- The survey thank-you page in `helloworld/` and its Meta Pixel are unchanged.

## Backup

The complete repository state before the November 2026 revision is preserved on:

`backup/before-website-revision-2026-11-10`

Original commit: `b3812ee2539578ca9be1398a3a57b1424072e94a`.

The revision uses the existing GitHub Pages setup and custom domain; it introduces no new build dependencies.
