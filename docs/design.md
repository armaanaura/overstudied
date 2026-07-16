# Design contract

The visual source of truth is the [Overstudied Figma file](https://www.figma.com/design/Sf8FTQ8Rf25EgIsd6KDPR8).

Implement and verify against these frames:

- `Desktop / Article Feed` (`3:2`, 1440px wide)
- `Mobile / Article Feed` (`3:53`, 390px wide)
- `Implementation Notes / Minimal UI Contract` (`3:87`)

## Visual direction

Overstudied is an article-first, Medium-like reading feed. It is not a marketing site. The homepage starts with a compact editorial introduction, filters, and the latest content. Do not add a hero treatment, calls to action, gradients, animation, shadows, illustrations, or decorative sections.

The Figma frames establish these tokens:

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#ffffff` | Page and card background |
| `--text` | `#171717` | Primary text |
| `--muted` | `#6b6b6b` | Secondary text |
| `--line` | `#e5e5e5` | Thin dividers and borders |
| `--chip` | `#f2f2f2` | Tag chips |
| `--search` | `#f6f6f6` | Search surfaces |
| `--toggle-active` | `#ffffff` | Active theme-toggle segment in Light mode |
| `--max-width` | `800px` | Main feed width |

Typography uses Inter when available, followed by Helvetica Neue and Arial. Desktop page titles are 42/52px, article titles are 28/36px, and body copy is 16/24px. Mobile page titles are 32/40px, article titles are 22/29px, and body copy is 14/22px.

The desktop navbar is 72px tall with a 1px bottom border. The segmented theme toggle sits immediately to the right of the desktop search. The feed is centered at 800px. Desktop article rows include a 180×120 optional image area; missing images remain blank. Feed rows use a compact rhythm with 20px desktop separation and 18–20px mobile separation. At 1000px and below, navigation links and desktop search collapse while the theme toggle and search shortcut remain. At 640px and below, the toggle labels shorten to `L`, `D`, and `R`. At 720px and below, an in-page search field appears, thumbnails disappear, and the page uses 20px side gutters.

Domain cards are the only card-style UI. They use a 1px border, 4px radius, white background, and no shadow.

## Themes and footer

The site supports three token-driven themes:

- Light: the original Figma palette.
- Dark: charcoal background with soft off-white text and restrained contrast.
- Reading: a warm cream/yellow background intended to reduce cool screen light during reading.

Do not implement separate component styles for themes. Components must use the shared CSS tokens. The footer is deliberately plain: a top border, company identity, important links, contact information, and author context with no card or decorative background.
