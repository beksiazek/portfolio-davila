import React, { useState } from "react";
import Filters from "./filters/Filters";
import { AiOutlinePlayCircle } from "react-icons/ai";
import PortfolioElement from "../../components/portfolioElement/PortfolioElement";
import "./portfolio.css";

const portfolioItems = [
	{
		image: "https://picsum.photos/id/1015/700/600",
		owner: "me",
		type: "image",
	},
	{
		image: "https://picsum.photos/id/1018/500/300",
		owner: "client",
		type: "image",
	},
	{
		image: "https://picsum.photos/id/1018/500/300",
		owner: "me",
		type: "animation",
	},
	{
		image: "https://picsum.photos/id/1036/400/400",
		owner: "client",
		type: "animation",
	},
	{
		image: "https://picsum.photos/id/1039/500/300",
		owner: "me",
		type: "animation",
	},
	{
		image: "https://picsum.photos/id/1043/500/300",
		owner: "client",
		type: "image",
	},
	{
		image: "https://picsum.photos/id/1045/600/300",
		owner: "me",
		type: "image",
	},
	{
		image: "https://picsum.photos/id/1056/500/300",
		owner: "client",
		type: "animation",
	},
];

export default function Portfolio() {
	const [currentOwnerTag, setCurrentOwnerTag] = useState("");
	const [currentTypeTag, setCurrentTypeTag] = useState("");

	return (
		<section id="portfolio">
			<header>
				<h1 className="header-title">Portfolio</h1>
			</header>
			<Filters currentOwnerTag={currentOwnerTag} currentTypeTag={currentTypeTag} setCurrentOwnerTag={setCurrentOwnerTag} setCurrentTypeTag={setCurrentTypeTag} />
			<div className="gallery-container">
				<ul className="masonry-gallery">
					{portfolioItems.map((item, index) => {
						return (
							<li
								className={
									(item.owner === currentOwnerTag || currentOwnerTag === "") && (item.type === currentTypeTag || currentTypeTag === "")
										? "active"
										: ""
								}
								key={index}
							>
								{item.type === "animation" && <AiOutlinePlayCircle className="play-button" />}
								<img src={item.image} alt="example" />
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
