import React, { useEffect } from "react";
import ImageSlider from "../components/imageSlider/ImageSlider";
import { PortfolioData } from "../assets/PortfolioData";


export default function Home() {
	const isFav = (item) => {
		return item.fav;
	}

	useEffect(() => {
		document.body.style.setProperty("--overflow-behavior", "hidden");
	}, []);

	return <ImageSlider slides={PortfolioData.filter(item => isFav(item))} />;
}
