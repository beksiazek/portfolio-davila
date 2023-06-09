import React, { useState } from "react";
import Filters from "../../components/PortfolioFilters/PortfolioFilters";
import { AiOutlinePlayCircle } from "react-icons/ai";
import PortfolioModal from "../../components/PortfolioModal/PortfolioModal";
import "./portfolio.css";

const portfolioItems = [
	{
		title: "The first image of my portfolio!",
		image: "https://picsum.photos/id/1015/700/600",
		owner: "me",
		type: "image",
		description: "I loved to draw this amazing background",
	},
	{
		title: "The second one juju",
		image: "https://picsum.photos/id/1018/500/300",
		owner: "client",
		type: "image",
		description: "I loved to draw this amazing background",
	},
	{
		title: "The second one juju",
		image: "https://picsum.photos/id/1018/500/300",
		owner: "me",
		type: "animation",
		description: "I loved to draw this amazing background",
	},
	{
		title: "The second one juju",
		image: "https://picsum.photos/id/1036/400/400",
		owner: "client",
		type: "animation",
		description: "I loved to draw this amazing characters",
	},
	{
		title: "The second one juju",
		image: "https://picsum.photos/id/1039/500/300",
		owner: "me",
		type: "animation",
		description:
			"Educational purpose, cartoon animated video made with After Effects, with drawings and backgrounds of my authorship.",
	},
	{
		title: "The second one juju",
		image: "https://picsum.photos/id/1043/500/300",
		owner: "client",
		type: "image",
		description: "I loved to draw this background",
	},
	{
		title: "The which? one juju",
		image: "https://picsum.photos/id/1045/600/300",
		owner: "me",
		type: "image",
		description: "I loved to draw this another amazing background",
	},
	{
		title: "The last one juju",
		image: "https://picsum.photos/id/1056/500/300",
		owner: "client",
		type: "animation",
		description: "I loved to give life to this amazing piece",
	},
];

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
		if (event.target == document.getElementById("portfolio-modal")) {
			closeModal();
		}
	};

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
					{portfolioItems.map((item, index) => {
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
										? "active"
										: ""
								}
								key={index}
							>
								{item.type === "animation" && (
									<AiOutlinePlayCircle className="play-button" />
								)}
								<img src={item.image} alt="example" />
							</li>
						);
					})}
				</ul>
			</div>
			{displayModal && (
				<PortfolioModal item={modalItem} closeModal={closeModal} />
			)}
		</section>
	);
}
