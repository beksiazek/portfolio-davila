import React from "react";
import "./portfolioModal.css";

export default function PortfolioModal(props) {
	const { item, closeModal } = props;
	return (
		<div id="portfolio-modal" class="modal">
			<div class="modal-content">
				<div class="modal-header">
					<h2>{item.title}</h2>
					<span class="close" onClick={closeModal}>&times;</span>
				</div>
				<div class="modal-body">
					{item.type === "animation" ? <iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/K2xjdT_IvNc"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
					></iframe> : <img className="modal-image" src={item.image} alt="example" />}
				</div>
				<div class="modal-footer">
					<p>
						{item.description}
					</p>
				</div>
			</div>
		</div>
	);
}
