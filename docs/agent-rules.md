# Rules for future agents

1. Read `docs/design.md`, `docs/routes.md`, `docs/components.md`, and `docs/content-model.md` before changing UI or content structure.
2. Treat the Figma file and named frames in `docs/design.md` as the source of truth.
3. Do not redesign the UI unless the user explicitly asks. Preserve the token-driven Light/Dark/Reading palettes, thin borders, typography, compact 800px feed, and mobile behavior.
4. The homepage keeps the approved full-width study illustration and text overlay, followed by separate Articles and Study Domains sections with `View all` links. Never replace it with a marketing landing page or add another hero, feature grid, CTA section, gradient, animation, shadow, or decorative artwork.
5. Use Astro, TypeScript, and plain CSS. Do not add Tailwind, DaisyUI, a component library, or a client framework without explicit approval.
6. Keep the public content routes distinct: articles, system design, and study domains. `/architectures` exists only as a legacy redirect to `/system-design`.
7. Do not duplicate article content for domain pages. Put each article in exactly one domain JSON file; the loader derives its category and domain routes filter the canonical list.
8. Reuse the existing components. Add a component only when it has a clear responsibility and matches the minimal UI contract.
9. Keep data dates as ISO `YYYY-MM-DD` strings so lexical sorting remains correct.
10. Run `npm run check` and `npm run build` after changes. For visual work, check at 1440px desktop and 390px mobile widths.
11. Keep article images optional. An article without an explicit thumbnail receives a deterministic feed image from `src/Assets/abstract`; it must not become an article-detail cover. A missing `coverImage` leaves the article cover empty.
12. Preserve the shared footer on every page, including the Overstudied company name, important links, Armaandeep Singh's LinkedIn contact, and both author summaries. Vanshika Chawala is responsible for Psychology content.
13. Manage domains in `src/content/meta.json`, article metadata in the matching `src/content/domains/*.json` file, and article bodies in `src/content/articles/*.md`. Do not move authored content back into TypeScript.
14. Treat `/articles` as the complete publication archive. It must include every article from every domain, including System Design, sorted together by date.
15. Keep domain list items limited to a square thumbnail, domain name, and one crisp tagline. Do not add topics, dates, counts, or other metadata to `DomainCard`.
16. Homepage content order is six latest publications, three domains, then six more publications. Article groups must not overlap. Keep the compact two-column presentation homepage-only, and never apply these limits to `/articles` or `/domains`.
17. Use `##` Markdown headings for article sections so the generated table of contents stays navigable. Add inline images with normal Markdown paths under `/images/articles/<slug>/`; never hardcode article images in an Astro component.
18. Every article JSON record must include its own `author.name`. Use the optional `author.url` for a profile link; never assume that every article was written by Armaandeep Singh.
