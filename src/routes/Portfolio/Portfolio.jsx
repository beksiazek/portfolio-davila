import React, { useState, useEffect } from "react";
import Filters from "../../components/PortfolioFilters/PortfolioFilters";
import { AiOutlinePlayCircle } from "react-icons/ai";
import PortfolioModal from "../../components/PortfolioModal/PortfolioModal";
import Footer from "../../components/Footer/Footer";
import contentUrlGenerator from "../../utils/contentUrlGenerator";
import "./portfolio.css";

export default function Portfolio({ portfolioData }) {
	const [currentOwnerTag, setCurrentOwnerTag] = useState("");
	const [currentTypeTag, setCurrentTypeTag] = useState("");
	const [displayModal, setDisplayModal] = useState(false);
	const [modalItem, setModalItem] = useState();

	const openModal = () => {
		setDisplayModal(true);
	};

	const closeModal = () => {
		setDisplayModal(false);
	};

	window.onclick = function (event) {
		if (event.target === document.getElementById("portfolio-modal")) {
			closeModal();
		}
	};

	useEffect(() => {
		document.body.style.setProperty("--overflow-behavior", "scroll");
	}, []);

	return (
		<section id="portfolio">
			<header>
				<h1 className="header-title">Portfolio</h1>
			</header>
			<Filters
				currentOwnerTag={currentOwnerTag}
				currentTypeTag={currentTypeTag}
				setCurrentOwnerTag={setCurrentOwnerTag}
				setCurrentTypeTag={setCurrentTypeTag}
			/>
			<div className="gallery-container">
				<ul className="masonry-gallery">
					{portfolioData.map((item, index) => {
						return (
							<li
								onClick={() => {
									setModalItem(item);
									openModal();
								}}
								className={
									(item.owner === currentOwnerTag ||
										currentOwnerTag === "") &&
									(item.type === currentTypeTag ||
										currentTypeTag === "")
										? "portfolio-item active"
										: "portfolio-item"
								}
								key={index}
							>
								{item.type === "avi" && (
									<AiOutlinePlayCircle className="play-button" />
								)}
								<img src={contentUrlGenerator(item.content, item.type, true)} alt={item.description} loading="lazy" />
							</li>
						);
					})}
				</ul>
			</div>
			{displayModal && (
				<PortfolioModal item={modalItem} closeModal={closeModal} />
			)}
			<Footer />
		</section>
	);
}
