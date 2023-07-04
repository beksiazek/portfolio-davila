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
	const [galleryIsLoading, setGalleryIsLoading] = useState(true);

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
		Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
			console.log('images finished loading');
			setGalleryIsLoading(false);
		});
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
			<div className={"gallery-container" + (galleryIsLoading ? " gallery-is-loading" : "")}>
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
									<AiOutlinePlayCircle className="play-icon" />
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
