import React, {useState} from "react";
import ImageMagnifier from "../ImageMagnifier/ImageMagnifier";
import contentUrlGenerator from "../../utils/contentUrlGenerator";
import Spinner from "../Spinner/Spinner";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import "./portfolioModal.css";

export default function PortfolioModal(props) {
	const { item, closeModal } = props;
	const [contentHasLoaded, setContentHasLoaded] = useState(false);

	const toggleInfoText = () => {
		if (infoTextIsVisible()) {
			hideInfoText();
		} else {
			showInfoText();
		}
	};

	const infoTextIsVisible = () => {
		return (
			getComputedStyle(
				document.getElementsByClassName("content-info-text")[0]
			).opacity === "1"
		);
	};

	const showInfoText = () => {
		document.getElementsByClassName("content-info-text")[0].style.opacity =
			"1.0";
		document.getElementsByClassName("content-info-text")[0].style.zIndex =
			"auto";
	};

	const hideInfoText = () => {
		document.getElementsByClassName("content-info-text")[0].style.opacity =
			"0.0";
		if (!isMobile()) {
			document.getElementsByClassName(
				"content-info-text"
			)[0].style.zIndex = "-1";
		}
	};

	const isMobile = () => {
		return window.screen.width <= 1000;
	};

	const contentInfoClass = () => {
		return isMobile() ? "info-landscape" : "info-" + item.orientation;
	};

	return (
		<div id="portfolio-modal" className="modal">
			<div className="modal-content">
					<div className={"modal-body" + (!contentHasLoaded ? "-not-loaded" : "")}>
						{item.type === "avi" ? (
							<iframe
								src={item.content}
								title="YouTube video player"
								onLoad={() => setContentHasLoaded(true)}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
							></iframe>
						) : isMobile() ? (
							<img
								id="modal-image"
								src={contentUrlGenerator(
									item.content,
									item.type
								)}
								alt={item.description}
								onLoad={() => {setContentHasLoaded(true)}}	
							/>
						) : (
							<ImageMagnifier
								className={
									"image-magnifier-" + item.orientation
								}
								image={contentUrlGenerator(
									item.content,
									item.type
								)}
								setContentHasLoaded={setContentHasLoaded}
							/>
						)}
						<div
							className={
								"content-info-text " + contentInfoClass()
							}
						>
							{item.title !== "" ? (
								<>
									<h2>{item.title}</h2>
									<p>{item.description}</p>
								</>
							) : (
								<h2>{item.description}</h2>
							)}
						</div>
						{isMobile() ? (
							<AiOutlineInfoCircle
								className={"info-icon " + contentInfoClass()}
								onClick={toggleInfoText}
							/>
						) : (
							<AiOutlineInfoCircle
								className={"info-icon " + contentInfoClass()}
								onMouseOver={showInfoText}
								onMouseOut={hideInfoText}
							/>
						)}
					</div>
				{!contentHasLoaded && <Spinner />}
				<ImCross className={"close-button " + contentInfoClass()} onClick={closeModal} />
			</div>
		</div>
	);
}
