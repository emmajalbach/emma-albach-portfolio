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
 *    coverText             Set to false when the cover image already shows the title
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
			title: "The Book of Em",
			description: "Essays on Substack.",
			link: { label: "Read on Substack", url: "https://emmaalbach.substack.com/" },
			books: [
				{ title: "The Pieces of Jennifer’s Body", venue: "Substack", date: "April 2026", blurb: "The thing the camera always does...", excerpt: "The distinction goes like this: sexual imagery can function symbolically or critically.", url: "https://emmaalbach.substack.com/p/the-pieces-of-jennifers-body", cover: "img/covers/substack-jennifers-body.jpg" },
				{ title: "Knowing the Unknowable Self", venue: "Substack", date: "March 2026", blurb: "Or, Anthony Bourdain, the Hermit, and Me.", excerpt: "Your instinct, I imagine, is to say yes. Of course. Obviously. What a strange question.", url: "https://emmaalbach.substack.com/p/knowing-the-unknowable-self", cover: "img/covers/substack-unknowable-self.jpg" },
				{ title: "Awake and find no baby.", venue: "Substack", date: "March 2026", blurb: "Frankenstein, Hamnet, and the Posthuman Ethics of Creation.", excerpt: "There are two stories about what artists do with the deaths of their children. The first is the story we prefer.", url: "https://emmaalbach.substack.com/p/awake-and-find-no-baby-155", cover: "img/covers/substack-awake-and-find-no-baby.jpg" },
				{ title: "there is a crack in everything", venue: "Substack", date: "March 2026", blurb: "On broken glass, anarchitecture, and the bodies that refuse to hold.", url: "https://emmaalbach.substack.com/p/there-is-a-crack-in-everything", cover: "img/covers/substack-crack-in-everything.jpg" },
				{ title: "Busting the Ghost in the Machine", venue: "Substack", date: "June 2025", blurb: "An Affect and Emotion-Centric, Feminist Discourse on Cartesian Dualism.", excerpt: "René Descartes might not have intended to launch a metaphysical coup, but with cogito, ergo sum, he did more than crown the mind king—he slit the throat of the body.", url: "https://emmaalbach.substack.com/p/busting-the-ghost-in-the-machine", cover: "img/covers/substack-ghost-in-the-machine.jpg" },
				{ title: "Who Knows What I Could Become?", venue: "Substack", date: "June 2025", blurb: "How Class Obstructs Women’s Access to Article 2 in Domestic Abuse Contexts.", url: "https://emmaalbach.substack.com/p/who-knows-what-i-could-become", cover: "img/covers/substack-who-knows-what-i-could-become.jpg" },
				{ title: "The Death of Camp.", venue: "Substack", date: "June 2025", blurb: "Camp is dead. We have killed her.", excerpt: "There is an almost chronic need to avoid cringe. To be cool. To be ‘in’.", url: "https://emmaalbach.substack.com/p/the-death-of-camp", cover: "img/covers/substack-death-of-camp.jpg" },
				{ title: "On Anti-Intellectualism", venue: "Substack", date: "June 2025", blurb: "A Critique of Misogyny and Short Attention Spans.", excerpt: "Whatever device you are reading this piece on has the capacity to access almost every piece of knowledge that has ever been.", url: "https://emmaalbach.substack.com/p/on-anti-intellectualism-a-critique", cover: "img/covers/substack-anti-intellectualism.jpg" },
				{ title: "Underconsumption Core", venue: "Substack", date: "June 2025", blurb: "Can Aesthetics Ever be Divorced From Their Consequences?", excerpt: "We live in the gilded age of influencers.", url: "https://emmaalbach.substack.com/p/underconsumption-core-can-aesthetics", cover: "img/covers/substack-underconsumption-core.jpg" }
			]
		},
		{
			id: "emma-recommends",
			title: "Emma Recommends",
			description: "Curating the bookshelves that celebrities don’t have yet. @recommendedby.emma on Instagram.",
			link: { label: "Follow on Instagram", url: "https://www.instagram.com/recommendedby.emma/" },
			books: [
				{ title: "The Character Study", venue: "Instagram", date: "April 2026", blurb: "What are your favourite characters reading, and what does it say about them?", url: "https://www.instagram.com/p/DWv3aYjjAV7/", instagram: "https://www.instagram.com/p/DWv3aYjjAV7/", cover: "img/covers/ig-character-study.jpg", coverText: false, color: "#1b2a2e", ink: "#fff" },
				{ title: "Michael B. Jordan’s Bookshelf", venue: "Instagram", date: "April 2026", blurb: "For his recent Oscar win, the books Michael B. Jordan’s shelf is missing.", url: "https://www.instagram.com/p/DWoEy7biL-k/", instagram: "https://www.instagram.com/p/DWoEy7biL-k/", cover: "img/covers/ig-michael-b-jordan.jpg", coverText: false, color: "#2a3a2a", ink: "#fff" },
				{ title: "Sabrina Carpenter’s Bookshelf", venue: "Instagram", date: "March 2026", blurb: "The books Sabrina Carpenter’s shelf is missing.", url: "https://www.instagram.com/p/DWTreWeiJjx/", instagram: "https://www.instagram.com/p/DWTreWeiJjx/", cover: "img/covers/ig-sabrina-carpenter.jpg", coverText: false, color: "#111111", ink: "#fff" },
				{ title: "Hi, I’m Emma", venue: "Instagram", date: "March 2026", blurb: "Every week I pick a celebrity and build them the bookshelf they didn’t know they needed.", url: "https://www.instagram.com/p/DWOziK-CAt7/", instagram: "https://www.instagram.com/p/DWOziK-CAt7/", cover: "img/covers/ig-hi-im-emma.jpg", coverText: false, color: "#3b2a1e", ink: "#fff" },
				{ title: "Kendall Jenner’s Bookshelf", venue: "Instagram", date: "March 2026", blurb: "The books Kendall Jenner’s shelf is missing.", url: "https://www.instagram.com/p/DWBi-pPiKvF/", instagram: "https://www.instagram.com/p/DWBi-pPiKvF/", cover: "img/covers/ig-kendall-jenner.jpg", coverText: false, color: "#1e1e1a", ink: "#fff" }
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
