# pi-portfolio

My portfolio site — [nkivett.com](https://nkivett.com/). React + Vite, self-hosted on a Raspberry Pi behind Apache and a Cloudflare Tunnel.

It started as a CS class project in PHP. I rewrote it in React to cut the load time, and it now builds to a static bundle that Apache serves straight off the Pi.

## Stack

| Layer | What |
|---|---|
| UI | React 19, single page, no router — one scrolling document |
| Build | Vite 7 |
| Styling | Hand-written CSS in `src/App.css`, no framework |
| Icons | Inline SVG paths (Bootstrap Icons + Simple Icons), no icon font at runtime |
| Hosting | Apache on a Raspberry Pi, exposed via Cloudflare Tunnel |

## Local development

```bash
npm install
npm run dev      # Vite dev server
npm run build    # static bundle -> dist/
npm run preview  # serve the built bundle locally
```

## Deploying

`dist/` is **committed on purpose.** The Pi has no Node toolchain and building on it is slow, so the deploy is just:

```bash
# on the Pi
git pull
```

Apache serves `dist/` directly. The trade-off is that every rebuild churns a minified bundle into git history — worth it to keep the Pi dumb. **Build before you commit**, or the live site won't match the source.

The repo exists so I can work on the site from my laptop instead of running VS Code Server on the Pi.

## Layout

```
index.html           page shell, meta tags, favicon
src/
  main.jsx           React entry
  App.jsx            renders MainPage + Footer
  MainPage.jsx       nav, hero, highlight stats
  About.jsx          about / experience / projects / skills / education
  ContactMe.jsx      icon link row (hero and footer)
  EdgeArt.jsx        decorative circuit SVGs in the desktop gutters
  Footer.jsx
  App.css            the whole stylesheet
public/
  files/             resume PDF
  games/             standalone Pico-8 / Phaser builds
dist/                committed build output
```

Most page content lives in arrays at the top of `About.jsx` (`charterGroups`, `projects`, `skills`) and gets mapped to markup. Edit the arrays, not the JSX.

### CSS notes

`App.css` is commented with the reasoning behind the non-obvious rules — the `clamp()` root font scale and why it's anchored where it is, the sticky-nav scroll offsets, the TV breakpoint heuristic, and a couple of layout bugs I hit and fixed. Read the comments before changing a value.

### Leftovers

`Projects.jsx`, `Resume.jsx`, `Experience.jsx`, `Education.jsx`, `Games.jsx`, and `GameDetail.jsx` are from the PHP-to-JSX translation and are **not rendered**. Their content is out of date and their class names no longer exist in `App.css`. Kept for reference; don't treat them as current.

Related: `npm run lint` currently reports thousands of errors because `eslint.config.js` only ignores `dist/`, so it also lints the minified game bundles in `public/games/`.
