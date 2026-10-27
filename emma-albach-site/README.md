# Emma Albach — bookshelf portfolio

A static site for GitHub Pages. Each piece of writing is a book on one of four shelves: Substack, Emma Recommends, Published Works and University Papers. Click **Look inside** to open a book full screen and turn its pages (arrow keys work, Esc closes); click **Details** to spin it to the spine and see the summary and link.

Built on Codrops' *Book Preview with BookBlock* and Subtle Patterns textures — see [CREDITS.md](CREDITS.md).

## Changing the books

Everything on the shelves comes from **`js/content.js`**. Open it in any text editor (or edit it directly on GitHub) and replace the entries marked PLACEHOLDER.

```js
{ title: "The title", venue: "Substack", date: "March 2026",
  blurb: "One sentence about it.", excerpt: "A short passage (optional).",
  url: "https://…", cover: "img/covers/the-title.jpg" }
```

- `cover` is optional. Put the image in `img/covers/` and use its path. Without one, the book uses a colour from the palette.
- `instagram` (optional) — a link to an Instagram post; it is embedded inside the book.
- `color` / `ink` (optional) — cover colour and cover text colour.
- Add a shelf by copying a whole `{ id: …, title: …, books: [ … ] }` block.

## Putting it on GitHub Pages

1. Create a repository on GitHub (e.g. `emma-albach`) and upload everything in this folder, keeping the folder structure.
2. In the repository go to **Settings → Pages**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, and save.
3. After a minute the site is live at `https://<username>.github.io/<repository>/`.

To use a custom domain, add it under the same Pages settings.

## Preview locally

Open `index.html` in a browser. (Fonts and the fade-in load from Google Fonts and cdnjs, so you need to be online.)
