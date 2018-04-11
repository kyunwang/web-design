(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
exports.$ = function(element) {
	return document.querySelector(element);
};

exports.$$ = function(element) {
	return document.querySelectorAll(element);
};
},{}],2:[function(require,module,exports){
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
},{"./helpers":1}]},{},[2]);
