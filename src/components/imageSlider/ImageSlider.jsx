import React, { useState, useRef, useEffect } from "react";
import {
	MdOutlineArrowBackIos,
	MdOutlineArrowForwardIos,
} from "react-icons/md";
import "./imageSlider.css";

export default function ImageSlider({ slides }) {
	const [currentImage, setCurrentImage] = useState(0);
	const [userInteraction, setUserInteraction] = useState(false);
	const length = slides.length;
	const timeoutRef = useRef(null);
	const delay = { auto: 7000, user: 15000 };
	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	const nextSlide = () => {
		setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
	};

	const prevSlide = () => {
		setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
	};

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(() => nextSlide(), userInteraction ? delay.user : delay.auto);
		return () => {
			resetTimeout();
		};
	}, [currentImage]);

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<div className="slider">
			{slides.map((slide, index) => {
				return (
					<div
						className={
							index === currentImage ? "slide active" : "slide"
						}
						key={index}
					>
						{index === currentImage && (
							<img
								src={slide.image}
								alt="example"
								className={slide.orientation}
							/>
						)}
						<p className="slide-text">{slide.text}</p>
					</div>
				);
			})}
			<MdOutlineArrowBackIos
				className="arrow left"
				onClick={() => {
					prevSlide();
					setUserInteraction(true);
				}}
			/>
			<MdOutlineArrowForwardIos
				className="arrow right"
				onClick={() => {
					nextSlide();
					setUserInteraction(true);
				}}
			/>
		</div>
	);
}
