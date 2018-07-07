(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

(function () {
	function addEvents(elements, event, callback) {
		elements.forEach(function (el) {
			el.addEventListener(event, callback);
		});
	}

	var testimonials = {
		radioToggle: [],
		testSection: [], // As in testimonial section
		init: function init() {
			var _this = this;

			this.radioToggle = document.querySelectorAll('.testimonials__container [type="radio"]');
			this.testSection = document.querySelectorAll('.testimonials__container li');

			// Add toggle events to the radiobuttons/labels
			addEvents(this.radioToggle, 'click', function (evt) {
				return _this.toggleSection(evt);
			}, true);

			// Hide all testimonials except first one if there is js
			this.testSection.forEach(function (el, index) {
				if (index === 0) return;
				el.classList.add('hide-testimonials');
				el.classList.add('hide');
			});
		},
		toggleSection: function toggleSection(evt) {
			// evt.preventDefault();
			// Toggle the testimonial sections
			testimonials.testSection.forEach(function (el) {
				if (el.dataset.testimonial === evt.target.id) {
					el.classList.remove('hide-testimonials');
					el.classList.add('show-testimonials');
					setTimeout(function () {
						el.classList.remove('hide');
					}, 300);
					return;
				}

				el.classList.remove('show-testimonials');
				el.classList.add('hide-testimonials');
				setTimeout(function () {
					el.classList.add('hide');
				}, 300);
			});
		}
	};

	// For the meer info buttons
	var sectionDetails = {
		moreToggle: [],
		moreContainer: [],
		init: function init() {
			var _this2 = this;

			this.moreToggle = document.querySelectorAll('.button__more');
			this.moreContainer = document.querySelectorAll('.more-info__container');

			// Add toggle evvents to the radiobuttons/labels
			addEvents(this.moreToggle, 'click', function (evt) {
				return _this2.toggleDetail(evt);
			}, true);

			// Hide all testimonials except first one if there is js
			this.moreContainer.forEach(function (el, index) {
				el.classList.add('hide-more-info', 'hide');
			});
		},
		toggleDetail: function toggleDetail(evt) {
			var buttonText = evt.target.firstElementChild;
			sectionDetails.moreContainer.forEach(function (el) {
				if (el.dataset.moreInfo === evt.target.id) {
					if (el.classList.contains('hide')) {
						buttonText.textContent = 'Minder';
						el.classList.remove('hide-more-info', 'hide');
						el.classList.add('show-more-info');
						return;
					} else {
						buttonText.textContent = 'Meer';
						el.classList.remove('show-more-info');
						el.classList.add('hide-more-info');
						setTimeout(function () {
							el.classList.add('hide');
						}, 300);
					}
				}
			});
		}
	};

	testimonials.init();
	sectionDetails.init();
})();

},{}]},{},[1]);
