import React, { useState } from "react";
import Magnifier from "./Magnifier/Magnifier";
import "./imageMagnifier.css";

export default function ImageMagnifier(props) {
	var magnifierHeight = 150,
		magnifierWidth = 150,
		zoomLevel = 1.5;

	const { image, className, setContentHasLoaded } = props;
	const [[x, y], setXY] = useState([0, 0]);
	const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
	const [showMagnifier, setShowMagnifier] = useState(false);

	const mouseEnter = (e) => {
		const elem = e.currentTarget;
		const { width, height } = elem.getBoundingClientRect();
		setSize([width, height]);
		setShowMagnifier(true);
	};

	const mouseMove = (e) => {
		const elem = e.currentTarget;
		const { top, left } = elem.getBoundingClientRect();

		// calculate cursor position on the image
		const x = e.pageX - left - window.scrollX;
		const y = e.pageY - top - window.scrollY;
		setXY([x, y]);
	};

	return (
		<div className={"image-magnifier-container " + className}>
			<img
				id="modal-image"
				src={image}
				alt="example"
				onLoad={() => setContentHasLoaded(true)}
				onMouseEnter={(e) => {
					mouseEnter(e);
				}}
				onMouseMove={(e) => {
					mouseMove(e);
				}}
				onMouseLeave={() => {
					setShowMagnifier(false);
				}}
			/>
			<Magnifier
				showMagnifier={showMagnifier}
				magnifierWidth={magnifierWidth}
				magnifierHeight={magnifierHeight}
                x={x}
                y={y}
                imgWidth={imgWidth}
                imgHeight={imgHeight}
                zoomLevel={zoomLevel}
				image={image}
			/>
		</div>
	);
}
