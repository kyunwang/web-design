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
			addEvents(this.radioToggle, 'click', evt => this.toggleSection(evt.target.id));

			// Hide all testimonials except first one if there is js
			this.testSection.forEach((el, index) => {
				if (index === 0) return;
				el.classList.add('hide');
			});
		},
		toggleSection: function(showEl) {
			// Toggle the testimonial sections
			testimonials.testSection.forEach(el => {
				if (el.dataset.testimonial === showEl) return el.classList.remove('hide');
				el.classList.add('hide');
			});
		},
	};

	testimonials.init();
})();
