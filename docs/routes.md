# Routes

| Route | Purpose |
| --- | --- |
| `/` | Latest content across articles, system designs, and study domains, sorted by date |
| `/articles` | Complete publication archive across normal articles and system-design explainers, latest first, with domain filters |
| `/articles/[slug]` | Static article detail page generated from canonical article data |
| `/system-design` | Large system design explainers, latest first |
| `/architectures` | Permanent redirect to `/system-design` for old links |
| `/algorithms` | Algorithm and data-structure articles selected from canonical article metadata |
| `/domains` | Study-domain index |
| `/domains/[slug]` | A domain overview and articles selected by `article.category` metadata |
| `/about` | About Overstudied and its authors, Armaandeep Singh and Vanshika Chawla |

Study domains currently include Databricks, Snowflake, Quantum Computing, Artificial Intelligence, Hardware, Data Structures and Algorithms, Psychology, System Design, and Quantum Mechanics. Every article belongs to exactly one through its required `category` field.

The homepage has separate Articles and Study Domains sections. Their `View all` links navigate to `/articles` and `/domains`. The Articles page retains local category filtering, and search filters content already present on the current page; there is no backend or search service.

The homepage shows six latest publications, the first three study domains, and the next six publications. Publications are drawn from normal articles and System Design explainers without duplication. These limits do not apply to `/articles` or `/domains`.

`/articles` is the canonical all-content index. All publication metadata lives in the per-domain JSON files under `src/content/domains`, including System Design publications. Article bodies live in `src/content/articles` as Markdown.

Article titles link directly to `/articles/[slug]`. Each detail page includes breadcrumbs, links to its author and study domain, heading navigation, and newer/older article navigation. System Design publications use the same article detail layout.

`/algorithms` is a curated view of canonical articles whose `category` is `dsa`; it does not duplicate article data. Navbar links for Psychology and Quantum Computing point to `/domains/psychology` and `/domains/quantum-computing`.
