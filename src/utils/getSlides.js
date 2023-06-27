const isFav = (item) => {
	return item.fav;
};

const isPortrait = (item) => {
	return item.orientation === "portrait";
};

const isMobile = () => {
	return window.screen.width <= 600;
};

export default function getSlides(items) {
	if (isMobile()) {
		return items.filter((item) => isFav(item) && isPortrait(item));
	} else {
		return items.filter((item) => isFav(item));
	}
}
