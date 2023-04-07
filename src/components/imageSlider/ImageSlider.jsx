import React, { useState } from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import "./imageSlider.css";

export default function ImageSlider({ slides }) {
	const [currentImage, setCurrentImage] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
	};

	const prevSlide = () => {
		setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<section className="slider">
			<MdOutlineArrowBackIos className="arrow left" onClick={prevSlide} />
			<MdOutlineArrowForwardIos
				className="arrow right"
				onClick={nextSlide}
			/>
			{slides.map((slide, index) => {
				return (
					<div
						className={
							index === currentImage ? "slide active" : "slide"
						}
						key={index}
					>
						{index === currentImage && (
							<img src={slide.image} alt="example" />
						)}
					</div>
				);
			})}
		</section>
	);
}
