const h = require('./helpers');

const $ = h.$;
const $$ = h.$$;

(function() {
	const bookmark = {
		bookmarkLink: '',
		init: function() {
			this.bookmarkLink = $('#bookmark-link');

			this.bookmarkLink.addEventListener('click', this.updateBookmark);


			console.log(this.bookmarkLink);
			
			const bookmarks = $$('.bookmark').forEach(this.addBookmark);
		},
		updateBookmark: function(el) {
			el.preventDefault();
			console.log('update');

			
		},
		addBookmark: function(el) {
			el.addEventListener('click', e => {
				const id =  e.target.id;
				fetch('/bookmark', {
					method: 'POST',
					body: JSON.stringify({
						id: id
					}),
					headers: {"Content-Type": "application/json"},
					credentials: 'same-origin' // or 'include'
				})
				.then(resp => resp.json())
				.then(data => {
					console.log(data);
					
					bookmark.bookmarkLink.textContent = data.bookmarks.length;
				});

				console.log('bookmark', e.target.id);
				// console.log(e.getAttribute('id'));

			});
		}
	}

	bookmark.init();
})()