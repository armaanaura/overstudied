# Components

| Component | Responsibility |
| --- | --- |
| `BaseLayout` | Document metadata, global CSS, navbar, footer, saved theme initialization, and static filtering/search behavior |
| `Navbar` | Brand, primary route links, desktop search, Light/Dark/Reading segmented toggle, and mobile search shortcut |
| `Footer` | Company name, important links, author/contact details, and copyright information |
| `SearchBox` | Accessible search form used in the navbar and mobile page intros |
| `TopicTabs` | Reusable tab/link row; the homepage uses its interactive filter mode |
| `ArticleList` | Ordered rendering of article rows |
| `ArticleRow` | Compact article metadata, title, excerpt, first tag, read time, and optional desktop image |
| `ArticleBody` | Safe rendering of typed article sections, paragraphs, lists, and code blocks |
| `ArticleNavigation` | Newer/older links at the end of every article detail page |
| `TagChip` | Neutral pill used only for taxonomy metadata |
| `ArchitectureRow` | Compact architecture row with optional image, complexity, and systems covered |
| `DomainCard` | Bordered domain summary that links to `/domains/[slug]` |

Components are Astro components with typed props. Keep content in `src/data`, layout rules in `src/styles/global.css`, and page composition in `src/pages`. Avoid client frameworks: the current search/filter behavior needs only a small browser script in `BaseLayout`.

The theme toggle cycles `light` → `dark` → `reading` → `light`. It stores the selected value in `localStorage` under `theme` and applies it through `document.documentElement.dataset.theme`. The early inline script in `BaseLayout` restores the saved value before the page renders to prevent a theme flash.
