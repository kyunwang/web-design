(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function () {
	function addEvents(elements, event, callback) {
		elements.forEach(el => {
			el.addEventListener(event, callback);
		});
	}

	const testimonials = {
		radioToggle: [],
		testSection: [], // As in testimonial section
		init: function () {
			this.radioToggle = document.querySelectorAll('.testimonials__container [type="radio"]');
			this.testSection = document.querySelectorAll('.testimonials__container li');

			// Add toggle evvents to the radiobuttons/labels
			addEvents(this.radioToggle, 'click', evt => this.toggleSection(evt), true);

			// Hide all testimonials except first one if there is js
			this.testSection.forEach((el, index) => {
				if (index === 0) return;
				el.classList.add('hide-testimonials');
				el.classList.add('hide');
			});
		},
		toggleSection: function (evt) {
			// evt.preventDefault();
			// Toggle the testimonial sections
			testimonials.testSection.forEach(el => {
				if (el.dataset.testimonial === evt.target.id) {
					el.classList.remove('hide-testimonials');
					el.classList.add('show-testimonials');
					setTimeout(() => {
						el.classList.remove('hide');
					}, 300);
					return;
				}

				el.classList.remove('show-testimonials');
				el.classList.add('hide-testimonials');
				setTimeout(() => {
					el.classList.add('hide');
				}, 300);
			});
		}
	};

	testimonials.init();
})();

},{}]},{},[1]);
