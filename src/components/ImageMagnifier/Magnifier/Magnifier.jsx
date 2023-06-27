import React from "react";

export default function Magnifier(props) {
	const {
		showMagnifier,
		magnifierWidth,
		magnifierHeight,
        x,
        y,
		imgWidth,
		imgHeight,
		zoomLevel,
        image,
	} = props;

	return (
		<div
			className="magnifier"
			style={{
                position: "absolute",
                pointerEvents: "none",
                opacity: "1",
                border: "1px solid lightgray",
                backgroundColor: "grey",
                backgroundRepeat: "no-repeat",
				display: showMagnifier ? "" : "none",
				// set size of magnifier
				height: `${magnifierHeight}px`,
				width: `${magnifierWidth}px`,
				// move element center to cursor pos
				top: `${y}px`,
				left: `${x + magnifierWidth}px`,
				backgroundImage: `url('${image}')`,
				//calculate zoomed image size
				backgroundSize: `${imgWidth * zoomLevel}px ${
					imgHeight * zoomLevel
				}px`,
				//calculate position of zoomed image.
				backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
				backgroundPositionY: `${
					-y * zoomLevel + magnifierHeight / 2
				}px`,
			}}
		></div>
	);
}
