import React from "react";
import ImageMagnifier from "../ImageMagnifier/ImageMagnifier";
import contentUrlGenerator from "../../utils/ContentUrlGenerator/contentUrlGenerator";
import "./portfolioModal.css";

export default function PortfolioModal(props) {
	const { item, closeModal } = props;
	return (
		<div id="portfolio-modal" className="modal">
			<div className="modal-content">
				<div className="modal-body">
					{item.type === "avi" ? (
						<iframe
							src={item.content}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
						></iframe>
					) : (
						<ImageMagnifier image={contentUrlGenerator(item.content, item.type)}/>
					)}
				</div>
			</div>
		</div>
	);
}
