# Overstudied

A minimal, article-first technical blog built with Astro, TypeScript, and plain CSS.

The site includes articles, architecture explainers, algorithms, study domains, an About page, a shared author/contact footer, and Light, Dark, and warm Reading themes.

Static article detail pages are generated from typed records in `src/data/articles.ts` and include breadcrumbs plus newer/older navigation.

## Run locally

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

Open `http://localhost:4321`.

## Production build

```sh
npm run check
npm run build
npm run preview
```

The static deployment output is written to `dist/`.

## Project contract

Read `docs/design.md`, `docs/routes.md`, `docs/components.md`, `docs/content-model.md`, and `docs/agent-rules.md` before changing the site. The linked Figma frames are the visual source of truth, and the homepage must remain a latest-content feed rather than a marketing landing page.
