import React, { useState, useRef, useEffect } from "react";
import { BsStars } from "react-icons/bs";
import {
	MdOutlineArrowBackIos,
	MdOutlineArrowForwardIos,
} from "react-icons/md";
import "./imageSlider.css";

export default function ImageSlider({ slides }) {
	const [currentItem, setCurrentItem] = useState(0);
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
		setCurrentItem(currentItem === length - 1 ? 0 : currentItem + 1);
	};

	const prevSlide = () => {
		setCurrentItem(currentItem === 0 ? length - 1 : currentItem - 1);
	};

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() => nextSlide(),
			userInteraction ? delay.user : delay.auto
		);
		return () => {
			resetTimeout();
		};
	}, [currentItem]);

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<div className="slider">
			{slides.map((slide, index) => {
				return (
					<div
						className={
							index === currentItem ? "slide active" : "slide"
						}
						key={index}
					>
						{index === currentItem && (
							<>
								<img
									src={
										slide.type === "animation"
											? "https://img.youtube.com/vi/" +
											  /[^/]*$/.exec(slide.content)[0] +
											  "/maxresdefault.jpg"
											: slide.content
									}
									alt={slide.description}
									className={slide.orientation}
								/>
							</>
						)}
						<div className="slide-ttip tooltip">
							<span className="tooltiptext">
								Ve esta
								{slide.type === "animation"
									? " animación "
									: " ilustración "}
								y muchas más en la sección Portfolio!
							</span>
							<p className="slide-title">
								{slide.title}
								<BsStars className="slide-title-icon" />
							</p>
						</div>
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
