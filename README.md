# Rinkle Sebastian — Portfolio

A clean, colorful, single-page product portfolio. No build step, no dependencies: HTML, CSS, and a little JavaScript. Hosted free on GitHub Pages at **https://rinkle-s.github.io/**.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure and all content |
| `styles.css` | Styling, layout, colors (teal + amber on off-white) |
| `script.js` | Footer year + reveal-on-scroll animation |
| `assets/` | Your photo goes here as `rinkle.png` |

## Adding your photo (the one step left)

The hero shows an "RS" monogram until you drop in a real photo:

1. Take your headshot and **remove the background** with a free tool:
   - https://www.remove.bg  (one click, free) or
   - https://www.photoroom.com
2. Save the result as **`rinkle.png`** inside the `assets/` folder.
3. Commit and push (see below). It auto-appears in the circular gradient frame.

> Tip: a head-and-shoulders crop with a transparent background looks best inside the circle.

## Editing content

All text lives in `index.html`:

- **Hero**: greeting, headline, sub, and the stat chips
- **Projects**: three placeholder case-study cards (fill these in when ready)
- **Experience** / **Education**: duplicate an `<article class="entry">` block per item
- **Toolkit**: edit the `<li>` skill pills
- **Contact**: email, LinkedIn, GitHub

## Publishing changes

```powershell
cd ~/Desktop/rinkle-portfolio
git add -A
git commit -m "Update content"
git push
```

The site redeploys automatically in about a minute.
