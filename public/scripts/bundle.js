(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

exports.$ = function (element) {
	return document.querySelector(element);
};

exports.$$ = function (element) {
	return document.querySelectorAll(element);
};

},{}],2:[function(require,module,exports){
'use strict';

const h = require('./helpers');

const $ = h.$;
const $$ = h.$$;

(function () {
	const bookmark = {
		bookmarkLink: '',
		init: function () {
			this.bookmarkLink = $('#bookmark-link');

			// this.bookmarkLink.addEventListener('click', this.updateBookmark);


			console.log(this.bookmarkLink);

			const bookmarks = $$('.bookmark').forEach(this.addBookmark);
		},
		updateBookmark: function (el) {
			// el.preventDefault();
			console.log('update');
		},
		addBookmark: function (el) {
			el.addEventListener('click', elem => {
				const target = elem.target;

				fetch('/bookmarks', {
					method: 'POST',
					body: JSON.stringify({
						id: target.id
					}),
					headers: { "Content-Type": "application/json" },
					credentials: 'same-origin' // or 'include'
				}).then(resp => resp.json()).then(data => {
					console.log(data);
					el.classList.toggle('bookmark--marked');
					bookmark.bookmarkLink.textContent = data.bookmarks.length;
				});

				// console.log('bookmark', el.target.id);
				// console.log(e.getAttribute('id'));
			});
		}
	};

	bookmark.init();
})();

},{"./helpers":1}]},{},[2]);
