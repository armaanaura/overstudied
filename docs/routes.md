# Routes

| Route | Purpose |
| --- | --- |
| `/` | Latest content across articles, system designs, and study domains, sorted by date |
| `/articles` | Complete publication archive across normal articles and system-design explainers, latest first, with filters for the four study domains |
| `/articles/[slug]` | Static article detail page generated from canonical article data |
| `/system-design` | Large system design explainers, latest first |
| `/architectures` | Permanent redirect to `/system-design` for old links |
| `/algorithms` | Algorithm and data-structure articles selected from canonical article metadata |
| `/domains` | Study-domain index |
| `/domains/[slug]` | A domain overview and articles selected by `article.category` metadata |
| `/about` | About Overstudied and author Armaandeep Singh |

The four study domains are System Design, Quantum Computing, Psychology, and Data Structures and Algorithms. Every article must belong to exactly one through its required `category` field.

Homepage tabs filter the already-rendered static feed in the browser: `Latest`, `Articles`, `System Design`, and `Study Domains`. The Articles page uses the same local filtering behavior for its category tabs. Search is local and filters content already present on the current page; there is no backend or search service.

`/articles` is the canonical all-content index. A system-design explainer may remain stored in `src/data/architectures.ts` because it has additional structured fields, but it must still appear in the Articles archive and in the System Design category views.

Article titles link directly to `/articles/[slug]`. Each detail page includes breadcrumbs, links to its author and study domain, and newer/older article navigation. System design titles link to anchors on `/system-design`; detail pages for these explainers remain out of scope.

`/algorithms` is a curated view of canonical articles whose `category` is `dsa`; it does not duplicate article data. Navbar links for Psychology and Quantum Computing point to `/domains/psychology` and `/domains/quantum-computing`.
