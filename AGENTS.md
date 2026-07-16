# Overstudied agent instructions

Before modifying this repository, read every file in `docs/`, especially `docs/agent-rules.md` and `docs/design.md`.

The homepage is a minimal latest-content feed based on the named Figma frames. It is not a marketing landing page. Do not redesign it or add visual effects unless the user explicitly requests a redesign.

Use Astro, TypeScript, and plain CSS. Keep articles canonical and associate them with study domains through `Article.domain` metadata. Run `npm run check` and `npm run build`, then check 1440px and 390px layouts after UI changes.
