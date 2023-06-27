import React, { useState, useEffect } from "react";
import Filters from "../../components/PortfolioFilters/PortfolioFilters";
import { AiOutlinePlayCircle } from "react-icons/ai";
import PortfolioModal from "../../components/PortfolioModal/PortfolioModal";
import Footer from "../../components/Footer/Footer";
import { PortfolioData } from "../../assets/PortfolioData";
import contentUrlGenerator from "../../utils/ContentUrlGenerator/contentUrlGenerator";
import "./portfolio.css";

export default function Portfolio() {
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
					{PortfolioData.map((item, index) => {
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
								<img src={item.type === "avi"
											? "https://img.youtube.com/vi/" +
											  /[^/]*$/.exec(item.content)[0] +
											  "/maxresdefault.jpg"
											: contentUrlGenerator(item.content, item.type, true)} alt="example" />
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
