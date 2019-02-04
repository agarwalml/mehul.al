// Resize Design boxes to same height

const waitForLoad = (element, callback) => {
	let allImgsLength = 0;
	let allImgsLoaded = 0;
	const allImgs = [];

	const filtered = Array.prototype.filter.call(element.querySelectorAll('img'), item => {
		if (item.src === '') {
			return false;
		}

		// Firefox's `complete` property will always be `true` even if the image has not been downloaded.
		// Doing it this way works in Firefox.
		const img = new Image();
		img.src = item.src;
		return !img.complete;
	});

	filtered.forEach(item => {
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

	allImgs.forEach(img => {
		const image = new Image();

		// Handle the image loading and error with the same callback.
		image.addEventListener('load', () => {
			allImgsLoaded++;

			if (allImgsLoaded === allImgsLength) {
				callback.call(element);
				return false;
			}
		});

		image.src = img.src;
	});
};

const changeHeight = () => {
	const elements = document.querySelectorAll('.design-card');

	const elementHeights = Array.prototype.map.call(elements, el => {
		return el.offsetHeight;
	});

	const maxHeight = Math.max.apply(null, elementHeights);

	Array.prototype.forEach.call(elements, el => {
		el.style.height = maxHeight + 'px';
	});
};

waitForLoad(document, changeHeight);

const navbarLinks = document.querySelectorAll('.navbar a.hashlink');
for (const link of navbarLinks) {
	link.addEventListener('click', e => {
		e.preventDefault();
		window.location.hash = '#' + link.href.split('#')[1];
		window.scrollBy(0, -0.1 * Number(window.innerHeight));
	});
}
