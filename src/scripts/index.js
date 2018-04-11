const h = require('./helpers');

const $ = h.$;
const $$ = h.$$;

(function() {
	const bookmark = {
		// toggleButton: '',
		init: function() {
			$('#toggle-bookmark').addEventListener('click', () => {
				console.log('toggle bookmarks');
			});

			const bookmarks = $$('.bookmark').forEach(el => {
				el.addEventListener('click', e => {
					console.log('bookmark', e.target.id);
					// console.log(e.getAttribute('id'));
				});
			});
			
		}
	}

	bookmark.init();
})()