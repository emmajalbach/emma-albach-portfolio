/*
 * shelves.js
 * Turns the data in content.js into the HTML structure used by the
 * Codrops "Book Preview with BookBlock" demo (bookshelf.js + BookBlock),
 * so the books can be edited from one file instead of hand-written HTML.
 * The markup it writes is the demo's own: figure > .book / .buttons /
 * figcaption / .details, and .bb-custom-wrapper > .bb-bookblock > .bb-item.
 */
(function () {
	var site = window.SITE;
	if (!site) return;

	function esc(s) {
		return String(s == null ? '' : s)
			.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
	}
	function line(parts) { return parts.filter(Boolean).map(esc).join(' &middot; '); }

	document.title = site.name;
	document.querySelector('[data-site="name"]').textContent = site.name;
	document.querySelector('[data-site="tagline"]').textContent = site.tagline;
	document.querySelector('[data-site="intro"]').textContent = site.intro;
	var footerName = document.querySelector('[data-site="footer-name"]');
	if (footerName) footerName.textContent = site.name;
	var mail = document.querySelector('[data-site="email"]');
	if (mail) {
		if (site.email) { mail.href = 'mailto:' + site.email; mail.textContent = site.email; }
		else mail.parentNode.removeChild(mail);
	}

	var nav = document.querySelector('[data-site="nav"]');
	var main = document.getElementById('shelves');
	var wrappers = document.getElementById('bookblocks');
	var paletteIndex = 0;
	var needsInstagram = false;

	site.shelves.forEach(function (shelf) {
		nav.insertAdjacentHTML('beforeend', '<a href="#' + esc(shelf.id) + '">' + esc(shelf.title) + '</a>');

		var figures = '';
		shelf.books.forEach(function (book, i) {
			var id = shelf.id + '-' + (i + 1);
			var pal = site.palette[paletteIndex++ % site.palette.length];
			var color = book.color || pal.color;
			var ink = book.ink || (book.color ? '#222' : (pal.ink || '#222'));
			var style = '--book-color:' + color + ';--book-ink:' + ink + ';' +
				(book.cover ? '--cover-img:url(\'' + encodeURI(book.cover) + '\');' : '');
			var readLink = book.url ? '<a href="' + esc(book.url) + '" target="_blank" rel="noopener">Read it &rarr;</a>' : '';

			figures +=
				'<figure>' +
					'<div class="book" data-book="' + esc(id) + '" style="' + style + '">' +
						'<span class="cover-label' + (book.cover ? ' has-image' : '') + '"><em>' + esc(book.venue || shelf.title) + '</em><strong>' + esc(book.title) + '</strong></span>' +
					'</div>' +
					'<div class="buttons"><a href="#">Look inside</a><a href="#">Details</a></div>' +
					'<figcaption><h2>' + esc(book.title) + ' <span>' + line([book.venue, book.date]) + '</span></h2></figcaption>' +
					'<div class="details"><ul>' +
						'<li>' + esc(book.blurb || '') + '</li>' +
						'<li>' + esc(book.venue || shelf.title) + '</li>' +
						'<li>' + esc(book.date || '') + '</li>' +
						'<li>' + readLink + '</li>' +
					'</ul></div>' +
				'</figure>';

			/* Fullscreen BookBlock for "Look inside" */
			var rightOfTitle;
			if (book.instagram) {
				needsInstagram = true;
				rightOfTitle = '<div class="bb-custom-side page-layout-embed"><blockquote class="instagram-media" data-instgrm-permalink="' + esc(book.instagram) + '" data-instgrm-version="14"><a href="' + esc(book.instagram) + '">View this post on Instagram</a></blockquote></div>';
			} else {
				rightOfTitle = '<div class="bb-custom-side page-layout-3" style="' + style + '"></div>';
			}
			var items =
				'<div class="bb-item">' +
					'<div class="bb-custom-side page-layout-3"><div><h3>' + esc(book.title) + '</h3><p>' + line([book.venue, book.date]) + '</p></div></div>' +
					rightOfTitle +
				'</div>';
			if (book.excerpt) {
				items +=
					'<div class="bb-item">' +
						'<div class="bb-custom-side page-layout-1"><h3>From the page <span>Excerpt</span></h3></div>' +
						'<div class="bb-custom-side page-layout-1"><p>' + esc(book.excerpt) + '</p></div>' +
					'</div>';
			}
			items +=
				'<div class="bb-item">' +
					'<div class="bb-custom-side page-layout-1"><h3>' + esc(shelf.title) + ' <span>About</span></h3></div>' +
					'<div class="bb-custom-side page-layout-1"><p>' + esc(book.blurb || '') + (readLink ? '<br><br>' + readLink : '') + '</p></div>' +
				'</div>';

			wrappers.insertAdjacentHTML('beforeend',
				'<div class="bb-custom-wrapper" id="' + esc(id) + '" style="border-color:' + esc(color) + '">' +
					'<div class="bb-bookblock">' + items + '</div>' +
					'<nav><a href="#" class="bb-nav-prev">Previous</a><a href="#" class="bb-nav-next">Next</a><a href="#" class="bb-nav-close">Close</a></nav>' +
				'</div>');
		});

		var link = shelf.link ? '<a class="shelf-link" href="' + esc(shelf.link.url) + '" target="_blank" rel="noopener">' + esc(shelf.link.label) + ' &rarr;</a>' : '';
		main.insertAdjacentHTML('beforeend',
			'<section class="shelf animate__animated animate__fadeInUp" id="' + esc(shelf.id) + '">' +
				'<header class="shelf-header"><h2>' + esc(shelf.title) + '</h2>' +
					(shelf.description ? '<p>' + esc(shelf.description) + '</p>' : '') + link +
				'</header>' +
				'<div class="shelf-scroll"><div class="bookshelf">' + figures + '</div></div>' +
			'</section>');
	});

	if (needsInstagram) {
		var s = document.createElement('script');
		s.async = true;
		s.src = 'https://www.instagram.com/embed.js';
		document.body.appendChild(s);
	}
})();
