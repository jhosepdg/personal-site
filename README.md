# Jhosep Delgado — personal website

A responsive, self-contained website with About, Approach, Expertise, Ventures, and Contact sections. White background, orange accents, and locally hosted Space Grotesk and JetBrains Mono fonts.

## Preview

Run `python3 -m http.server 4173 --bind 127.0.0.1` from this folder, then open http://localhost:4173. No build or package installation is needed.

## Edit

- `index.html`: content and navigation
- `styles.css`: typography, colors, layout, and mobile styles
- `script.js`: mobile navigation, section tracking, and contact email drafts
- `assets/fonts`: open-source Google Fonts, hosted locally

## Content notes

The professional narrative is based on the supplied 2026 resume and the user's brief. The PhD is explicitly in progress, alongside the M.A. MEITE. Venture names follow the brief. Professional Language Studio has deliberately general copy because the resume does not give program details. The metrics and public-facing wording incorporate the supplied resume and subsequent copy revisions. No third-party endorsement or institutional affiliation is implied by campus visits.

The contact form opens a prefilled email draft; it does not send, store, or submit messages to a backend. Venture panels link to email inquiries because official venture URLs were not supplied. The original resume is not included in the website files.

Design reference: https://ivanshamaev.com. The visual hierarchy uses the same font families, fluid desktop hero type beside a left-aligned portrait, 96px About type, 72px section titles, and 30px feature titles, with fluid mobile sizing. The supplied portrait is displayed with a CSS grayscale treatment and orange-accented caption. The source photograph remains unchanged in `assets/jhosep-delgado.jpg`.

## Deploy to GitHub Pages

1. Extract the ZIP. Add its contents to the root of a GitHub repository on the `main` branch. Include the hidden `.github` directory and `.nojekyll` file. Upload the extracted files, not the ZIP itself.
2. In the repository, open **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.
3. Open **Actions → Deploy website to GitHub Pages → Run workflow**, selecting `main`. Future pushes to `main` deploy automatically.
4. Open the URL reported by the deployment. Relative asset links support both a root domain and a repository subpath.

The included workflow deploys only the website files and assets. No npm dependencies, build step, API keys, environment variables, database, or backend are required. All fonts, font licenses, and the portrait are included. This website does not use video files. GitHub Actions downloads its deployment tools when the workflow runs; these are not browser runtime dependencies.

The contact form retains its existing behavior: it opens an email draft in the visitor's configured email app. It does not send email automatically.

Official deployment documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
