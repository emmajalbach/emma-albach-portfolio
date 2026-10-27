/*
 * ============================================================
 *  EDIT THIS FILE TO CHANGE WHAT IS ON THE SHELVES
 * ============================================================
 *
 *  Each shelf has a list of "books". Every book can have:
 *
 *    title     (required)  The title shown on the cover and caption
 *    venue                 Where it appeared, e.g. "Substack", "Instagram", a magazine name
 *    date                  Any text, e.g. "March 2026"
 *    blurb                 One or two sentences shown in "Details" and inside the book
 *    excerpt               A short passage shown inside the book (optional)
 *    url                   Link to the full piece
 *    cover                 Path to a cover image, e.g. "img/covers/my-post.jpg" (optional)
 *    instagram             Link to an Instagram post; it will be embedded inside the book (optional)
 *    color                 Cover colour (any CSS colour). Leave out to use the shelf palette
 *    ink                   Text colour on the cover. Leave out for dark text
 *
 *  Everything below marked PLACEHOLDER should be replaced with Emma's real work.
 *  To add a book, copy a { ... } block, paste it after a comma, and change the text.
 *  To remove a book, delete its { ... } block.
 */

window.SITE = {
	name: "Emma Albach",
	tagline: "Writing, reading and everything in between",
	intro: "Pick a book off the shelf: open it to look inside, or turn it for the details.",
	email: "", // e.g. "hello@example.com" — leave empty to hide

	shelves: [
		{
			id: "substack",
			title: "Substack",
			description: "Essays and newsletters.",
			link: { label: "Read on Substack", url: "https://substack.com/" }, // PLACEHOLDER: Emma's Substack URL
			books: [
				{ title: "Essay title", venue: "Substack", date: "Month 2026", blurb: "PLACEHOLDER — one-sentence summary of the essay.", excerpt: "PLACEHOLDER — a short passage from the essay that makes someone want to read on.", url: "https://substack.com/" },
				{ title: "Essay title", venue: "Substack", date: "Month 2026", blurb: "PLACEHOLDER — one-sentence summary of the essay.", url: "https://substack.com/" },
				{ title: "Essay title", venue: "Substack", date: "Month 2026", blurb: "PLACEHOLDER — one-sentence summary of the essay.", url: "https://substack.com/" },
				{ title: "Essay title", venue: "Substack", date: "Month 2026", blurb: "PLACEHOLDER — one-sentence summary of the essay.", url: "https://substack.com/" }
			]
		},
		{
			id: "emma-recommends",
			title: "Emma Recommends",
			description: "Book recommendations on Instagram.",
			link: { label: "Follow on Instagram", url: "https://www.instagram.com/" }, // PLACEHOLDER: Emma Recommends profile URL
			books: [
				{ title: "Emma Recommends Vol. 1", venue: "Instagram", date: "Month 2026", blurb: "PLACEHOLDER — what this volume recommends.", url: "https://www.instagram.com/", color: "#e85d9b", ink: "#fff" },
				{ title: "Emma Recommends Vol. 2", venue: "Instagram", date: "Month 2026", blurb: "PLACEHOLDER — what this volume recommends.", url: "https://www.instagram.com/" },
				{ title: "Caught Reading", venue: "Instagram", date: "Month 2026", blurb: "PLACEHOLDER — about the series.", url: "https://www.instagram.com/" }
			]
		},
		{
			id: "published",
			title: "Published Works",
			description: "Fiction and non-fiction in print and online.",
			books: [
				{ title: "Story or article title", venue: "Publication name", date: "Year", blurb: "PLACEHOLDER — what the piece is about and where it appeared.", url: "" },
				{ title: "Story or article title", venue: "Publication name", date: "Year", blurb: "PLACEHOLDER — what the piece is about and where it appeared.", url: "" },
				{ title: "Story or article title", venue: "Publication name", date: "Year", blurb: "PLACEHOLDER — what the piece is about and where it appeared.", url: "" }
			]
		},
		{
			id: "university",
			title: "University Papers",
			description: "Selected academic writing.",
			books: [
				{ title: "Dissertation title", venue: "University of York, LLB Law", date: "Year", blurb: "PLACEHOLDER — abstract in two sentences.", url: "" },
				{ title: "Essay title", venue: "University of York, LLB Law", date: "Year", blurb: "PLACEHOLDER — abstract in two sentences.", url: "" },
				{ title: "Paper title", venue: "MA Social Research", date: "Year", blurb: "PLACEHOLDER — abstract in two sentences.", url: "" }
			]
		}
	],

	/* Cover colours used when a book has no "color" of its own.
	   These are the colours from the Codrops "Book Preview" demo the shelves are built on. */
	palette: [
		{ color: "#009bdb", ink: "#fff" },
		{ color: "#f6a7a5" },
		{ color: "#ebc989" },
		{ color: "#a6a1a5", ink: "#fff" },
		{ color: "#4cbb97", ink: "#fff" },
		{ color: "#a1cae5" },
		{ color: "#ebe6e5" },
		{ color: "#f8eb48" },
		{ color: "#f7a56e" }
	]
};
