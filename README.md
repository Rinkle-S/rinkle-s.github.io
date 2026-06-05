# Rinkle Sebastian — Portfolio

A clean, responsive single-page portfolio website. No build step, no dependencies: just HTML, CSS, and a little JavaScript.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure and all content |
| `styles.css` | Styling, layout, light/dark theme |
| `script.js` | Theme toggle + footer year |

## Editing your content

All the text lives in `index.html`. Look for the placeholder copy and replace it:

- **Hero**: your role/title and tagline
- **About**: short bio paragraph
- **Projects**: duplicate a `<article class="card">` block per project
- **Skills**: edit the `<li>` items
- **Contact**: update the email and add your LinkedIn URL

## Preview locally

Just open `index.html` in a browser, or run a tiny server:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploying (free, via GitHub Pages)

This repo is set up to publish from the `main` branch root. In your repo:

1. Go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **`main`** and folder **`/ (root)`**, then **Save**.
4. Wait ~1 minute. Your site goes live at `https://rinkle-s.github.io/rinkle-portfolio/`.
