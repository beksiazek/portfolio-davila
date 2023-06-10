import React from "react";
import ImageMagnifier from "../ImageMagnifier/ImageMagnifier";
import "./portfolioModal.css";

export default function PortfolioModal(props) {
	const { item, closeModal } = props;
	return (
		<div id="portfolio-modal" className="modal">
			<div className="modal-content">
				<div className="modal-header">
					<h2>{item.title}</h2>
					<span className="close" onClick={closeModal}>
						&times;
					</span>
				</div>
				<div className="modal-body">
					{item.type === "animation" ? (
						<iframe
							src="https://www.youtube.com/embed/K2xjdT_IvNc"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
						></iframe>
					) : (
						<ImageMagnifier image={item.image}/>
					)}
				</div>
				<div className="modal-footer">
					<p>{item.description}</p>
				</div>
			</div>
		</div>
	);
}
