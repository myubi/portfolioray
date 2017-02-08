function addClass(el, className) {
	if (el.classList) el.classList.add(className);
	else if (!hasClass(el, className)) el.className += ' ' + className;
}

var imgContainers, len;

if (!Modernizr.objectfit) {
	imgContainers = document.querySelectorAll('.item');
	len = imgContainers.length;

	for (var i=0; i<len; i++) {
		var $container = imgContainers[i],
				imgUrl = $container.querySelector('img').getAttribute('src');
		if (imgUrl) {
			$container.style.backgroundImage = 'url(' + imgUrl + ')';
			addClass($container, 'item-ie');
		}
	}
}
