# Three Cinnamons — website (Nova Web Studio demo)

Six-page static site (HTML, CSS, JavaScript). No build step, no frameworks.

## Run locally
```
cd three-cinnamons
python3 -m http.server 8000      # then open http://localhost:8000
```
Opening `index.html` directly also works.

## Deploy (GitHub Pages / any static host)
Upload the whole folder. On GitHub Pages: push to a repo, then Settings → Pages → deploy from the main branch root.

## Where to edit things
Everything lives in **`js/config.js`**:
- `business` — address, phone, email, WhatsApp, opening hours, social links, form endpoint, site URL
- `images` — every photo slot (`src: null` shows a "Photo coming soon" tile; no broken images)
- `menu` — categories and items (the menu page, homepage featured cards and filters all read from here)
- `offers` — leave `[]` until real offers exist; add items and the offers page switches over automatically

### Photos currently on the site
The site now uses **20 licensed stock photos from Unsplash** (free licence) so it looks finished: cinnamon rolls, coffee, a milkshake, café interiors and pastries. They load straight from Unsplash's servers (internet needed), and the footer and gallery state clearly that they are stock images, not photos of Three Cinnamons. Photographer credits are on the Gallery page. If a photo ever fails to load, a branded placeholder tile appears instead of a broken image.
Before the site goes live, replace them with the restaurant's own photos (below) or download the stock files into `assets/img/photos/` so the site doesn't depend on Unsplash.

### Adding real photos
1. Put JPG/WebP files in `assets/img/photos/` (about 1600px wide, under 300 KB each).
2. In `js/config.js` set e.g. `"hero-1": { src: "assets/img/photos/hero-1.jpg", alt: "…", kind: "food" }`.
3. Use `kind: "stock"` for any stock photo — the gallery labels it as stock.

### Adding the real menu (arriving via WhatsApp)
Edit `menu.categories` and `menu.items` in `js/config.js`. Remove `isSample: true` from each item and set `menu.isSample: false` to hide the "Sample menu" notice. Prices: `price: 45` shows "K45"; `price: null` shows "Price on request".

## Contact form
No backend credentials were supplied, so the form does **not** claim to send anything. It validates, then opens the visitor's email app with the message pre-filled (and says so). To send straight to the inbox, create a Formspree or Web3Forms endpoint and paste it into `business.formEndpoint`.

## Research report (confidence)
| Detail | Value used | Source(s) | Confidence |
|---|---|---|---|
| Name | Three Cinnamons (page: "Three Cinnamons Zambia") | Facebook page, Tripadvisor, TikTok | High |
| Location | Agora Village, Thabo Mbeki Road, Lusaka | Facebook page, Tripadvisor, Yandex Maps, TikTok captions | High (area); exact pin unverified |
| Phone | +260 97 049 1449 | Facebook page, TikTok caption, Yandex Maps | High |
| Email | threecinnamons@gmail.com | Facebook page listing | Medium (single source) |
| Facebook | facebook.com/p/Three-Cinnamons-Zambia-100083156440790 | Matches the page ID supplied | High |
| TikTok | @threecinnamonszambia | TikTok | High |
| Delivery | Available | Official TikTok captions | Medium |
| Offerings | Cinnamon rolls (pecan mentioned), coffee, frappes, milkshakes | TikTok captions, Tripadvisor review | Medium |
| Opening hours | **None found** | — | Not verified |
| WhatsApp | Phone number used as a stand-in | Not confirmed as a WhatsApp number | **Unverified** |
| Instagram | **None found** | — | Not verified |

The Facebook page itself blocks automated access, so its details came from search-result snippets rather than the live page.

## Business details still requiring confirmation
1. Opening hours (the site says "to be confirmed").
2. Whether +260 97 049 1449 is the WhatsApp number (the WhatsApp buttons use it).
3. Exact Google Maps pin for Agora Village (map and directions currently search the address text).
4. Email address (single source).
5. Instagram account, if one exists.
6. Founding story, owners, and food philosophy (About page has marked placeholders).
7. Final domain name (for canonical URLs, `sitemap.xml`, `robots.txt`, and absolute `og:image` URLs).

## Temporary content to replace
- All menu items and descriptions in `js/config.js` (marked "Sample"); prices.
- All photos (currently Unsplash stock; menu cards also use them as illustrations, not as the real dishes).
- `YOUR-DOMAIN` in `sitemap.xml` and `robots.txt`.
- Structured data (JSON-LD) in `index.html` and `contact.html` — update if contact details change; add opening hours once confirmed. No ratings or reviews are included.

## Notes
- Logo: fully transparent PNG/WebP prepared from the supplied raster logo (no vector version was supplied). `assets/img/logo.png` is for light backgrounds; `assets/img/logo-light.png` recolours only the lettering to ivory for dark backgrounds (used on the transparent hero header and in the footer).
- Inner pages (About, Menu, Gallery, Offers, Contact) each have a banner photo set by `banner-*` slots in `js/config.js`; if a photo fails to load they fall back to the brown gradient.
- Welcome animation plays once per browser session and is skipped for reduced-motion users.
- Fonts (Cormorant Garamond, Inter) load from Google Fonts with Georgia/system fallbacks.
