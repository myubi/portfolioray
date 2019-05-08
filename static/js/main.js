const lightboxLinks = document.getElementsByClassName('lightbox');
const modalImg = document.getElementById('lightbox-img');
const modal = document.getElementById('lightbox-container');
const closeIcon = document.getElementById('lightbox-close');

if(lightboxLinks !== null) {
  console.log('hello?', lightboxLinks);
  for(let i = 0; i < lightboxLinks.length; i++) {
      lightboxLinks[i].onclick = function () {
          modalImg.src = lightboxLinks[i].children[0].src;
          modal.classList.add("open");
      }
  }
}

if(closeIcon !== null) {
  closeIcon.onclick = function () {
    modal.classList.remove("open");
  }
}

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