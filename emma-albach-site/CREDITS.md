# Credits and sources

Every visual design, animation and script on this site comes from an existing, published source. Nothing here was drawn or animated from scratch.

| What it does on the site | Source | Licence |
|---|---|---|
| 3D books, cover-opening animation, "Details" spin-to-spine panel, fullscreen "Look inside" view, page layouts inside the book, cover colour palette | **Book Preview with BookBlock** by Codrops (2014) — [article](https://tympanus.net/codrops/2014/01/14/look-inside-book-preview-with-bookblock/), [code](https://github.com/codrops/BookPreview) (commit 29c446b). Files: `css/component.css`, `js/bookshelf.js` | Codrops licence: free to integrate or build upon in personal or commercial projects; not to be republished, redistributed or sold as-is. `bookshelf.js` is MIT. [Licensing](https://tympanus.net/codrops/licensing/) |
| 3D page-turning inside the book, and the arrow-key page turning | **BookBlock** by Codrops — [article](https://tympanus.net/codrops/2012/09/03/bookblock-a-content-flip-plugin/), [code](https://github.com/codrops/BookBlock). Files: `js/bookblock.min.js`, `css/bookblock.css`; keyboard handling taken from the BookBlock demo page | MIT |
| Class helper used by the above | **classie** by David DeSandro (from bonzo) — `js/classie.js` | MIT |
| Browser feature detection used by the above | **Modernizr 2.7.1** custom build shipped with BookPreview — `js/modernizr.custom.js` | MIT / BSD |
| Base CSS reset | **normalize.css** (shipped with BookPreview) — `css/normalize.css` | MIT |
| Shelf and header fade-in | **Animate.css 4.1.1** by Daniel Eden, loaded from cdnjs — [animate.style](https://animate.style/) | Hippocratic License 2.1 |
| Wall, shelf planks and bookcase back | **Subtle Patterns** — "Natural Paper", "Purty Wood", "Dark Wood" ([github.com/subtlepatterns/SubtlePatterns](https://github.com/subtlepatterns/SubtlePatterns), commit bf8adf7). Files: `img/textures/` | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) — © Subtle Patterns / Toptal; original pattern authors are credited on subtlepatterns.com |
| Typefaces | **Playfair Display**, **Jost** (the Emma Recommends brand fonts) and **Cardo** (used inside the Codrops demo), from [Google Fonts](https://fonts.google.com/) | SIL Open Font License |
| Instagram embeds (only if an `instagram` link is added to a book) | Instagram's official `embed.js` | Instagram terms |

## What was changed

- `component.css`: the demo's nine per-book colour rules were collapsed into one rule that reads each book's colour from a CSS variable; fonts swapped to the ones above.
- `bookshelf.js`: works across several shelves instead of one, keeps the cover title text, and adds the BookBlock demo's arrow-key handling plus Esc to close.
- `js/shelves.js` writes the Codrops demo's own HTML structure from `js/content.js`, so books can be edited in one place.
- `css/site.css` lays the Codrops books out in rows on the Subtle Patterns textures.

Demo images from the Codrops download (cover and spine artwork, the portrait photo and backpack illustration) are **not** used.
