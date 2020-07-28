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
		if (window.location.hash.split('#')[1] !== link.hash.split('#')[1]) {
			window.location.hash = '#' + link.hash.split('#')[1];
			window.scrollBy(0, -0.1 * Number(window.innerHeight));
		}
	});
}

// Color mode toggle

const colorToggleButton = document.querySelector('.navbar button');
const colorToggleButtonImg = colorToggleButton.querySelector('img');
const gameboyToggle = document.querySelector('.gameboy img');
const logoToggle = document.querySelector('.navbar a img');

colorToggleButton.addEventListener('click', () => {
	const {body} = document;
	// Dark => 0, light => 1
	const currentMode = body.classList.contains('light');

	body.classList.toggle('dark');
	body.classList.toggle('light');

	colorToggleButtonImg.src = `/assets/img/${currentMode ? 'sun' : 'moon'}.svg`;
	gameboyToggle.src = `/assets/img/${currentMode ? '3ds_dark' : '3ds_light'}.png`;
	logoToggle.src = `/assets/img/${currentMode ? 'ml_logo_dark' : 'ml_logo_light'}.svg`;

});

const links = document.querySelectorAll('.info a');

links.forEach(link => link.addEventListener('mouseenter', shootLines));

function shootLines(e) {

  const itemDim = this.getBoundingClientRect(),
        itemSize = {
          x: itemDim.right - itemDim.left,
          y: itemDim.bottom - itemDim.top,
        },
        shapes = ['line', 'zigzag'],
        colors = ['#2FB5F3',
                  '#FF0A47',
                  '#FF0AC2',
                  '#47FF0A'];
  
  const chosenC = Math.floor(Math.random() * colors.length),
        chosenS = Math.floor(Math.random() * shapes.length);
  
  // create shape
  const burst = new mojs.Burst({
    left: itemDim.left + (itemSize.x/2),
    top: itemDim.top + (itemSize.y/2),
    radiusX: itemSize.x,
    radiusY: itemSize.y,
    count: 8,
    
    children: {
      shape: shapes[chosenS],
      radius: 10,
      scale: {0.8: 1},
      fill: 'none',
      points: 7,
      stroke: colors[chosenC],
      strokeDasharray: '100%',
      strokeDashoffset: { '-100%' : '100%' },
      duration: 350,
      delay: 100,
      easing: 'quad.out',
      isShowEnd: false,
    }
  });
  
  burst.play();
}
