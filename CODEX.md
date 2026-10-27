# Project guide for Codex

## Purpose

Maintain an independent eBay-style shopping demo using plain HTML, CSS, and JavaScript. All products, prices, seller information, and delivery terms are illustrative. Keep account, selling, and checkout actions clearly labeled as demos; never collect credentials or payments.

## Folder structure

```text
buoi1/
|-- index.html                 # Page markup, SVG symbols, and dialog shell
|-- CODEX.md                   # Project instructions and conventions
|-- README.md                  # Setup and feature documentation
|-- .gitignore
|-- .vscode/
|   `-- settings.json          # Live Server on port 5501
|-- assets/
|   |-- css/
|   |   `-- styles.css         # Components, layout, responsive styles
|   |-- js/
|   |   `-- app.js             # Sample catalog, state, rendering, interactions
|   `-- images/                # Local photography and favicon.svg
|-- scripts/
|   `-- download-assets.py     # Optional photo restoration helper
|-- tests/
|   `-- browser.cjs            # Playwright browser regression checks
`-- .qa/                      # Generated screenshots, ignored by Git
```

## Local development

Run commands from the project root. Open `index.html` with VS Code Live Server, or run:

```sh
python -m http.server 5501 --bind 127.0.0.1
```

Visit `http://127.0.0.1:5501`. There is no build step, production dependency, backend, or deployment configuration. Keep the site local unless the user requests publication.

## Implementation conventions

- Keep `index.html` at the root and use document-relative paths (`assets/...`). Paths in JavaScript-generated markup also resolve against `index.html`, not against the script directory.
- Use CSS custom properties and the existing responsive breakpoints; verify at 390, 768, and 1440 pixels. Avoid page overflow while retaining horizontal product rails.
- Keep runtime assets local. Do not add CDN dependencies, a framework, a bundler, or a backend without a task that requires it.
- Keep JavaScript as a deferred classic script so direct file opening continues to work. Preserve the 24 sample listings and existing behavior during structural changes.
- Use `data-*` attributes and the existing delegated event handler for interactions. Escape dynamic text before inserting it into HTML; prefer `textContent` for user input.
- Preserve accessible labels, visible keyboard focus, native dialog behavior, Escape-to-close, focus restoration, and reduced-motion support.
- Persist only validated watchlist product IDs and cart quantities under `ebay-shopping-demo-v1`. Quantities range from 1 to 99. Recover from invalid or unavailable browser storage.
- Keep generated screenshots and local dependencies out of source control. Do not modify `.vscode/settings.json` unnecessarily.
- Do not download photos on page load. Restore missing assets with `python scripts/download-assets.py` when network access is available; keep source photo IDs in that script.

## Validation

Run a syntax check after JavaScript changes:

```sh
node --check assets/js/app.js
```

The optional browser suite requires Node.js, Playwright, and its Chromium browser. If they are not installed, install development-only tooling:

```sh
npm install --no-save --package-lock=false playwright
npx playwright install chromium
```

With the local server running, execute:

```sh
node tests/browser.cjs
```

`PLAYWRIGHT_MODULE` may point to an existing Playwright or playwright-core installation; `TEST_BASE_URL` overrides the default local URL. Screenshots are written to `.qa/`.

The suite checks search/category intersections, empty results, reset, product details, carousel controls, watchlist/cart persistence, quantity totals, removal, demo checkout, storage recovery, local image loading, keyboard focus, responsive overflow, JavaScript errors, and HTTP failures. Changes to asset paths must pass these checks. Report any checks that could not be run.
