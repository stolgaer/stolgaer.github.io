# S. Tolga Er — academic website

Static HTML and CSS website hosted on GitHub Pages at https://stolgaer.com/.

## Pages

- `index.html`: biography and the three latest updates.
- `working-papers/index.html`: the AI-related corporate name changes working paper with its open abstract and original figure, followed by three text-only entries under Work in progress.
- `work-in-progress/index.html`: redirects the previous page address to Working papers.
- `publications/index.html`: seven publications in the original website order, without topic headings.
- `teaching/index.html`: tutorials and thesis advisor experience, based on `personal/academic_cv.pdf` and author updates.
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
- The AI-related corporate name changes working paper has an open abstract. Work in progress entries are listed without images.
- `images/ai-active-inactive-returns.png` is the original embedded Figure 2 from `papers/ai_returns.pdf` (PDF page 28), comparing AI-active and AI-inactive firms. The figure links to the full-size PNG.
- To add a working paper image, use `figure.paper-figure` with an `img.paper-image`, intrinsic dimensions, and meaningful alt text.
- Replace `personal/academic_cv.pdf` to update both the embedded CV and the download.
- Preserve the Google and Facebook verification meta tags in the homepage.
- The survey thank-you page in `helloworld/` and its Meta Pixel are unchanged.

## Backup

The complete repository state before the November 2026 revision is preserved on:

`backup/before-website-revision-2026-11-10`

Original commit: `b3812ee2539578ca9be1398a3a57b1424072e94a`.

The revision uses the existing GitHub Pages setup and custom domain; it introduces no new build dependencies.
