# Content management

Overstudied keeps content in JSON and Markdown. Adding or editing content must not require changing an Astro component.

## File structure

```text
src/
  content/
    meta.json
    domains/
      dsa.json
      psychology.json
      system-design.json
      ...
    articles/
      binary-lifting-finally-visualized.md
      ...

public/
  images/
    articles/
      binary-lifting-finally-visualized/
        diagram.webp
```

- `src/content/meta.json` is the domain directory.
- Each `src/content/domains/*.json` file contains the articles assigned to that domain.
- Each `src/content/articles/*.md` file contains one article body.
- `src/data/content.ts` loads and validates these files, then produces the canonical domain and article lists used by every page.

## Domain directory

Every entry in `meta.json` has the information needed for domain cards and domain pages:

```json
{
  "name": "Data Structures and Algorithms",
  "slug": "dsa",
  "tagline": "Patterns and techniques for solving computational problems.",
  "description": "Longer description used on the domain page.",
  "topics": ["Dynamic Programming", "Graphs", "Trees"],
  "thumbnail": null,
  "articlesFile": "domains/dsa.json"
}
```

`articlesFile` points to the JSON file that owns the domain's article list. To use custom domain artwork, replace `null` with:

```json
{
  "src": "/images/domains/dsa.webp",
  "alt": "Abstract graph of connected nodes"
}
```

When `thumbnail` is `null`, the interface assigns a stable abstract fallback.

## Domain article file

A domain JSON file has one `domain` slug and an `articles` array:

```json
{
  "domain": "dsa",
  "articles": [
    {
      "title": "Binary Lifting, Finally Visualized",
      "excerpt": "A visual guide to ancestor queries on trees.",
      "date": "2026-07-20",
      "tags": ["Trees", "Binary Lifting"],
      "readTime": "8 min read",
      "author": {
        "name": "Armaandeep Singh",
        "url": "/about"
      },
      "slug": "binary-lifting-finally-visualized",
      "thumbnail": {
        "src": "/images/articles/binary-lifting-finally-visualized/thumbnail.webp",
        "alt": "Binary lifting table beside a tree"
      },
      "coverImage": {
        "src": "/images/articles/binary-lifting-finally-visualized/cover.webp",
        "alt": "Tree ancestors arranged by powers of two"
      },
      "contentFile": "articles/binary-lifting-finally-visualized.md"
    }
  ]
}
```

- `date` must use `YYYY-MM-DD`.
- `author.name` is required and is displayed with the article everywhere.
- `author.url` is optional. It can be an internal page such as `/about`, an external profile URL, or omitted when the author has no profile page.
- `slug` must be lowercase kebab-case and unique across the website.
- `thumbnail` is the square image shown in lists. Set it to `null` for a stable abstract fallback.
- `coverImage` is the large image at the top of the article page. Set it to `null` to show no cover.
- `contentFile` points to the article Markdown file.
- An article belongs to exactly one domain. Do not duplicate its JSON record or Markdown file.

The loader derives the article category, domain article count, last-updated date, and global latest-first order automatically.

## Writing an article

Article bodies use ordinary Markdown:

````md
Start with a short introduction. Do not add an `#` heading because the page
already displays the title from JSON.

## First section

Write paragraphs normally.

- Lists work
- Links work
- **Bold** and *italic* text work

## Code example

```ts
const answer = 42;
```
````

Use `##` for main subheadings. These headings automatically appear in the article's right-side navigation and become clickable anchors.

### Adding an image inside an article

Put the image in the article's public image folder:

```text
public/images/articles/binary-lifting-finally-visualized/jump-table.webp
```

Then mention it directly in Markdown:

```md
![A binary lifting jump table for a tree](/images/articles/binary-lifting-finally-visualized/jump-table.webp)
```

No Astro or CSS change is needed. Use a meaningful description inside the square brackets for accessibility.

## Add a new article

1. Choose the domain and open its file in `src/content/domains`.
2. Add one metadata object to its `articles` array.
3. Create the Markdown file named by `contentFile`.
4. Optionally add thumbnail, cover, and inline images under `public/images/articles/<slug>/`.
5. Run `npm run check` and `npm run build`.

## Add a new domain

1. Add the domain entry to `src/content/meta.json`.
2. Create the JSON file referenced by its `articlesFile`, starting with an empty `articles` array.
3. Optionally add a domain thumbnail under `public/images/domains/`.
4. Run `npm run check` and `npm run build`.

JSON does not allow comments or trailing commas. A build failure will identify missing domain files, duplicate article slugs, or missing Markdown bodies.
