# Rinkle Sebastian — Portfolio

A hand-built product portfolio. No build step, no framework, no dependencies: plain HTML,
one stylesheet, and ~100 lines of JavaScript. Hosted free on GitHub Pages at
**https://rinkle-s.github.io/**.

## Design

Warm-paper light theme — bone and sand grounds, charcoal ink, deep teal with terracotta and
gold accents, over a very subtle paper grain. Display type is **Fraunces** (with `SOFT` and
`WONK` turned up for a bit of character), UI type is **Inter**.

A dark theme ships alongside it: the site follows the visitor's system preference by default,
and the sun/moon button in the nav overrides that choice and remembers it in `localStorage`.

Everything is driven by CSS custom properties in the `:root` block of `styles.css` — change
the palette there and the whole site follows, in both themes.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Home: hero, metrics, what I do, work, experience, outside work, contact |
| `about.html` | The longer story, outside work, leadership and honours |
| `resume.html` | Full resume, mirrors the PDF |
| `agent-connectors.html` | Case study — MCP server + Claude Code plugin (hackathon winner) |
| `concept-boost.html` | Case study — Duolingo Concept Boost, with embedded prototype |
| `styles.css` | Design tokens, layout, components, both themes |
| `script.js` | Theme toggle, mobile nav, sticky-nav shadow, reveal-on-scroll |
| `assets/` | `rinkle.png` illustration, `Rinkle_Sebastian_Resume.pdf` |

## Conventions

- Every page shares the same `<head>` block, nav and footer — if you change one, change all five.
- Pages opt into the scroll animation with `class="reveal"` on a section.
- Full-bleed background bands use `<section class="band"><div class="wrap section">…`.
- Case-study pages use the `cs-*` component set; `.cs-note` is small print, `.cs-note--flag`
  is the gold callout for a disclaimer.

## Running it locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Publishing

```bash
git add -A
git commit -m "Update content"
git push
```

GitHub Pages redeploys in about a minute.

## Updating the resume

Replace `assets/Rinkle_Sebastian_Resume.pdf`, then mirror the changes into `resume.html`
(and the hero/experience copy on `index.html` if a title or headline number changed).
