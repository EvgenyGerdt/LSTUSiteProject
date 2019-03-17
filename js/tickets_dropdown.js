(function () {
	'use strict';

	var btnScrollDown = document.querySelector('#scroll_down_tickets');

	function scrollDown() {
		(function scroll() {
			if (window.pageYOffset < 2500) {
				window.scrollBy(0, 10);
				setTimeout(scroll, 0);
			}
		})();
	}
	btnScrollDown.addEventListener('click', scrollDown);
})();