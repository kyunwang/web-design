const h = require('./helpers');

const $ = h.$;
const $$ = h.$$;

(function() {
	const bookmark = {
		bookmarkLink: '',
		init: function() {
			this.bookmarkLink = $('#bookmark-link a span');

			// this.bookmarkLink.addEventListener('click', this.updateBookmark);


			console.log(this.bookmarkLink);
			
			const bookmarks = $$('.bookmark').forEach(this.addBookmark);
		},
		updateBookmark: function(el) {
			// el.preventDefault();
			console.log('update');

			
		},
		addBookmark: function(el) {
			el.addEventListener('click', elem => {
				const target =  elem.target;
				
				fetch('/bookmarks', {
					method: 'POST',
					body: JSON.stringify({
						id: target.id
					}),
					headers: {"Content-Type": "application/json"},
					credentials: 'same-origin' // or 'include'
				})
				.then(resp => resp.json())
				.then(data => {
					console.log(data);
					el.classList.toggle('bookmark--marked');
					bookmark.bookmarkLink.textContent = data.bookmarks.length;
				});

				// console.log('bookmark', el.target.id);
				// console.log(e.getAttribute('id'));

			});
		}
	}

	bookmark.init();
})()