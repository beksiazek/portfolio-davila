import React, { useEffect } from "react";
import ImageSlider from "../components/imageSlider/ImageSlider";
import { SliderData } from "../components/imageSlider/SliderData";

export default function Home() {
	useEffect(() => {
		document.body.style.setProperty("--overflow-behavior", "hidden");
	}, []);

	return <ImageSlider slides={SliderData} />;
}
