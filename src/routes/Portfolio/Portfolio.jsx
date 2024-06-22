import React, { useState, useEffect } from "react";
import Filters from "../../components/PortfolioFilters/PortfolioFilters";
import Gallery from "../../components/Gallery/Gallery";
import PortfolioModal from "../../components/PortfolioModal/PortfolioModal";
import Footer from "../../components/Footer/Footer";
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
			<Gallery galleryIsLoading={galleryIsLoading} portfolioData={portfolioData} currentOwnerTag={currentOwnerTag} currentTypeTag={currentTypeTag} setModalItem={setModalItem} openModal={openModal} />
			{displayModal && (
				<PortfolioModal item={modalItem} closeModal={closeModal} />
			)}
			<Footer />
		</section>
	);
}
