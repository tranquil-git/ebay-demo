# eBay-style shopping demo

An independent, responsive storefront built with plain HTML, CSS, and JavaScript. This project is not affiliated with eBay. All listings, prices, sellers, and delivery terms are sample data; no transactions are processed.

## Run locally

Open `index.html` using VS Code Live Server (the workspace config uses port **5501**), or run:

```sh
python -m http.server 5501 --bind 127.0.0.1
```

Visit **http://127.0.0.1:5501**. No installation or build step is required. Opening `index.html` directly also works; browser storage availability can depend on browser settings.

## Features

- 24 sample products, keyword search, category filters, product details, and empty results.
- Three manual promotional slides and horizontally scrolling product collections.
- Watchlist, cart quantities (1–99), removal, item counts, and subtotal.
- Browser persistence using `ebay-shopping-demo-v1` in localStorage, including validation and recovery from malformed data. No accounts, backend, analytics, or payments.
- Native accessible dialogs, keyboard controls, focus restoration, responsive layouts, and reduced-motion support.

## Project structure

```text
index.html              Page entry point
assets/css/styles.css   Styles and responsive layouts
assets/js/app.js        Catalog, shopping state, and interactions
assets/images/          Local photos and favicon
scripts/                Asset maintenance tools
tests/browser.cjs       Browser regression checks
CODEX.md                Development conventions and validation instructions
```

See [CODEX.md](CODEX.md) for the complete folder structure, coding conventions, and browser test setup. Generated test screenshots are stored in the ignored `.qa/` folder.

## Photography

Product and promotional photography is stored in `assets/images/` and downloaded from [Unsplash](https://unsplash.com/). The photo IDs and original image URLs are recorded in `scripts/download-assets.py`. Some photos illustrate multiple sample listings. The page does not request external assets at runtime.

To restore missing photographs, run `python scripts/download-assets.py` with internet access.
