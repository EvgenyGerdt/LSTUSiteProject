(function () {
	'use strict';

	var btnScrollDown = document.querySelector('#scroll_down_about');

	function scrollDown() {
		(function scroll() {
			if (window.pageYOffset < 3000) {
				window.scrollBy(0, 10);
				setTimeout(scroll, 0);
			}
		})();
	}
	btnScrollDown.addEventListener('click', scrollDown);
})();