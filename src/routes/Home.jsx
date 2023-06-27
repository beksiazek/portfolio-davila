import React, { useEffect } from "react";
import ImageSlider from "../components/imageSlider/ImageSlider";


export default function Home({ slides }) {
	useEffect(() => {
		document.body.style.setProperty("--overflow-behavior", "hidden");
	}, []);

	return <ImageSlider slides={slides} />;
}
