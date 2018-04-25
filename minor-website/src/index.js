(function() {
	function addEvents(elements, event, callback) {
		elements.forEach(el => {
			el.addEventListener(event, callback);
		});
	}

	const testimonials = {
		radioToggle: [],
		testSection: [], // As in testimonial section
		init: function() {
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
		toggleSection: function(evt) {
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
		},
	};

	// For the meer info buttons
	const sectionDetails = {
		moreToggle: [],
		moreContainer: [],
		init: function() {
			console.log('Init toggle');
			this.moreToggle = document.querySelectorAll('.button__more');
			this.moreContainer = document.querySelectorAll('.more-info__container');

			// Add toggle evvents to the radiobuttons/labels
			addEvents(this.moreToggle, 'click', evt => this.toggleDetail(evt), true);

			// this.moreToggle.forEach(el => {});
			// Hide all testimonials except first one if there is js
			this.moreContainer.forEach((el, index) => {
				el.classList.add('hide-more-info');
				el.classList.add('hide');
			});
		},
		toggleDetail: function(evt) {
			// console.log(evt.target.firstElementChild);
			const buttonText = evt.target.firstElementChild;
			sectionDetails.moreContainer.forEach(el => {
				if (el.dataset.moreInfo === evt.target.id) {
					if (el.classList.contains('hide')) {
						buttonText.textContent = 'Meer info';
						console.log('show');
						el.classList.remove('hide-more-info');
						setTimeout(() => {
							el.classList.remove('hide');
							el.classList.add('show-more-info');
						}, 300);
						return;
					} else {
						buttonText.textContent = 'Minder info';
						el.classList.remove('show-more-info');
						el.classList.add('hide-more-info');
						setTimeout(() => {
							el.classList.add('hide');
						}, 300);
					}
				}
			});
		},
	};

	testimonials.init();
	sectionDetails.init();
})();
