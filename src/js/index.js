// Resize Design boxes to same height

function waitForLoad (element, callback) {
	var allImgsLength = 0;
	var allImgsLoaded = 0;
	var allImgs = [];

	var filtered = Array.prototype.filter.call(element.querySelectorAll('img'), function (item) {
		if (item.src === '') {
			return false;
		}

		// Firefox's `complete` property will always be `true` even if the image has not been downloaded.
		// Doing it this way works in Firefox.
		var img = new Image();
		img.src = item.src;
		return !img.complete;
	});

	filtered.forEach(function (item) {
		allImgs.push({
			src: item.src,
			element: item
		});
	});

	allImgsLength = allImgs.length;
	allImgsLoaded = 0;

	// If no images found, don't bother.
	if (allImgsLength === 0) {
		callback.call(element);
	}

	allImgs.forEach(function (img) {
		var image = new Image();

		// Handle the image loading and error with the same callback.
		image.addEventListener('load', function () {
			allImgsLoaded++;

			if (allImgsLoaded === allImgsLength) {
				callback.call(element);
				return false;
			}
		});

		image.src = img.src;
	});
};

function changeHeight () {
	var elements = document.getElementsByClassName('design-card');

	var elementHeights = Array.prototype.map.call(elements, function (el) {
		return el.offsetHeight;
	});

	var maxHeight = Math.max.apply(null, elementHeights);

	Array.prototype.forEach.call(elements, function (el) {
		el.style.height = maxHeight + "px";
	});
}

waitForLoad(document, changeHeight);

var navbarLinks = document.querySelectorAll('.navbar a.hashlink');
for (let i = 0; i < navbarLinks.length; i++) {
	navbarLinks[i].addEventListener('click', (e) => {
		e.preventDefault();
		window.location.hash = "#" + navbarLinks[i].href.split('#')[1];
		window.scrollBy(0, -0.1*Number(window.innerHeight));
	})
};
