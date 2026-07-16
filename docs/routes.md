# Routes

| Route | Purpose |
| --- | --- |
| `/` | Latest content across articles, architectures, and study domains, sorted by date |
| `/articles` | All normal technical articles, latest first |
| `/articles/[slug]` | Static article detail page generated from canonical article data |
| `/architectures` | Large system design and architecture explainers, latest first |
| `/algorithms` | Algorithm and data-structure articles selected from canonical article metadata |
| `/domains` | Study-domain index |
| `/domains/[slug]` | A domain overview and articles selected by `article.domain` metadata |
| `/about` | About Overstudied and author Armaandeep Singh |

Homepage tabs filter the already-rendered static feed in the browser: `Latest`, `Articles`, `Architectures`, and `Study Domains`. Search is also local and filters the content already present on the current page. There is no backend or search service.

Article titles link directly to `/articles/[slug]`. Each detail page includes breadcrumbs, links to its author and study domain, and newer/older article navigation. Architecture titles currently link to their anchors on `/architectures`; architecture detail pages remain out of scope.

`/algorithms` is a curated view of canonical articles whose `domain` is `dsa`; it does not duplicate article data.
