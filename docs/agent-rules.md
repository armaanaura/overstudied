# Rules for future agents

1. Read `docs/design.md`, `docs/routes.md`, `docs/components.md`, and `docs/content-model.md` before changing UI or content structure.
2. Treat the Figma file and named frames in `docs/design.md` as the source of truth.
3. Do not redesign the UI unless the user explicitly asks. Preserve the token-driven Light/Dark/Reading palettes, thin borders, typography, compact 800px feed, and mobile behavior.
4. The homepage keeps the approved full-width study illustration and text overlay, followed by the latest-content feed. Never replace it with a marketing landing page or add another hero, feature grid, CTA section, gradient, animation, shadow, or decorative artwork.
5. Use Astro, TypeScript, and plain CSS. Do not add Tailwind, DaisyUI, a component library, or a client framework without explicit approval.
6. Keep the public content routes distinct: articles, system design, and study domains. `/architectures` exists only as a legacy redirect to `/system-design`.
7. Do not duplicate article content for domain pages. Every article must assign `Article.category` to exactly one of `system-design`, `quantum-computing`, `psychology`, or `dsa`; let the domain route filter canonical article data.
8. Reuse the existing components. Add a component only when it has a clear responsibility and matches the minimal UI contract.
9. Keep data dates as ISO `YYYY-MM-DD` strings so lexical sorting remains correct.
10. Run `npm run check` and `npm run build` after changes. For visual work, check at 1440px desktop and 390px mobile widths.
11. Keep article and system-design images optional. An article without an explicit image receives a deterministic feed thumbnail from `src/Assets/abstract`; it must not become an article-detail cover. System-design rows may remain blank when no image is supplied.
12. Preserve the shared footer on every page, including the Overstudied company name, important links, Armaandeep Singh's LinkedIn contact, and the short author biography.
13. Keep each article's metadata and typed `content` sections together in `src/data/articles.ts`. Article, algorithm, and domain routes must link to the same `/articles/[slug]` page.
14. Treat `/articles` as the complete publication archive. It must include both normal article records and structured System Design explainers, sorted together by date.
