import React from "react";
import "./filters.css";

export default function Filters(props) {
	const { currentOwnerTag, currentTypeTag, setCurrentOwnerTag, setCurrentTypeTag } = props;

	const clearTags = () => {
		setCurrentOwnerTag("");
		setCurrentTypeTag("");
	}

	return (
		<div id="portfolio-filters">
			<div className="filters-container">
				<a className={(currentOwnerTag === "" && currentTypeTag === "") ? "selected" : ""} onClick={() => clearTags()}>Todo</a>
				<a className={currentOwnerTag === "me" ? "selected" : ""} onClick={() => setCurrentOwnerTag(currentOwnerTag === "me" ? "" : "me")}>Mi Arte</a>
				<a className={currentOwnerTag === "client" ? "selected" : ""} onClick={() => setCurrentOwnerTag(currentOwnerTag === "client" ? "" : "client")}>Clientes</a>
				<a className={currentTypeTag === "image" ? "selected" : ""} onClick={() => setCurrentTypeTag(currentTypeTag === "image" ? "" : "image")}>Ilustraciones</a>
				<a className={currentTypeTag === "animation" ? "selected" : ""} onClick={() => setCurrentTypeTag(currentTypeTag === "animation" ? "" : "animation")}>Animación</a>
			</div>
			<hr></hr>
		</div>
	);
}
