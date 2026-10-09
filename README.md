# Pierce Health — Have Your Plants

Marketing site for **Have Your Plants**, a whole-food, plant-based consulting practice.

The MVP is a static, mobile-first responsive site: plain HTML, CSS, and a small amount of vanilla JavaScript. There is no build step and no dependencies to install.

## Project structure

```
MVP/
├── index.html          # The site
├── css/styles.css      # Mobile-first styles (breakpoints at 600px and 860px)
├── js/main.js          # Mobile menu, email signup validation, footer year
└── Plant-Based.html    # Original design export (reference only; not part of the site)
```

## Running locally

### Option 1: Open the file directly

Open `MVP/index.html` in any modern browser (double-click it, or drag it into a browser window).

On macOS you can also run:

```sh
open MVP/index.html
```

### Option 2: Run a local web server (recommended)

Serving the site over `http://` behaves more like production than opening the file directly.

With Python 3 (preinstalled on macOS):

```sh
cd MVP
python3 -m http.server 8000
```

Or with Node.js:

```sh
npx serve MVP
```

Then visit <http://localhost:8000> (or the URL `serve` prints). Press `Ctrl+C` to stop the server.

## Testing on mobile

- **Browser dev tools:** open dev tools and toggle device mode (Chrome/Edge: `Cmd+Shift+M` on macOS, `Ctrl+Shift+M` on Windows/Linux; Firefox: `Cmd+Opt+M` / `Ctrl+Shift+M`). Check widths around 390px (phone), 900px (tablet), and 1280px (desktop).
- **A real phone:** start the local server, make sure your phone is on the same Wi-Fi network, find your computer's local IP address (macOS: `ipconfig getifaddr en0`), and visit `http://<your-ip>:8000` on the phone.

## Customizing

- **Accent color:** change `--accent` at the top of `MVP/css/styles.css`. All theme colors are CSS variables in `:root`.
- **Placeholder content:** search `index.html` for `[` to find text still to fill in, such as `[YOUR NAME]`, `[YOUR PRICE]`, and `[EMAIL]`.
- **Photos:** each image area is a colored-shape placeholder (`<div class="ph" …>`). Replace it with an `<img>` that has descriptive `alt` text.

## Known gaps

- **Navigation:** the Myths, Data, Tools, and For Kids links point to sections that don't exist yet.
- **Free guide form:** it validates the email and shows a confirmation, but it doesn't send anything yet. Connect it to an email service (Mailchimp, ConvertKit, Formspree, etc.) by following the note in `MVP/js/main.js`.
- **Booking:** the "Book a Consultation" buttons need a real scheduling link (Calendly, Acuity, etc.). See the TODO in `index.html`.
- **Fonts:** fonts load from Google Fonts, so they need an internet connection. Without one, the page falls back to system fonts.
