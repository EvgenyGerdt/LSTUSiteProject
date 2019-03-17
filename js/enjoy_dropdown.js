(function () {
	'use strict';

	var btnScrollDown = document.querySelector('#enjoy_button');

	function scrollDown() {
		(function scroll() {
			if (window.pageYOffset < 300) {
				window.scrollBy(0, 10);
				setTimeout(scroll, 0);
			}
		})();
	}
	btnScrollDown.addEventListener('click', scrollDown);
})();