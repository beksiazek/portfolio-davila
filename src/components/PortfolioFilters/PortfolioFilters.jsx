import React from "react";
import "./portfolioFilters.css";

export default function Filters(props) {
	const { currentOwnerTag, currentTypeTag, setCurrentOwnerTag, setCurrentTypeTag } = props;

	const setTags = ( type = "", owner = "" ) => {
		setCurrentTypeTag(type);
		setCurrentOwnerTag(owner);
	}

	return (
		<div id="portfolio-filters">
			<div className="filters-container">
				<a className={(currentOwnerTag === "" && currentTypeTag === "") ? "selected" : ""} onClick={() => setTags()}>Todo</a>
				<a className={currentTypeTag === "jpg" ? "selected" : ""} onClick={() => setTags(currentTypeTag === "jpg" ? "" : "jpg")}>Ilustraciones</a>
				<a className={currentTypeTag === "avi" ? "selected" : ""} onClick={() => setTags(currentTypeTag === "avi" ? "" : "avi")}>Animación</a>
				<a className={currentTypeTag === "dsg" ? "selected" : ""} onClick={() => setTags(currentTypeTag === "dsg" ? "" : "dsg")}>Diseño</a>
				<a className={currentOwnerTag === "me" ? "selected" : ""} onClick={() => setTags("", currentOwnerTag === "me" ? "" : "me")}>Mi Arte</a>
				<a className={currentOwnerTag === "client" ? "selected" : ""} onClick={() => setTags("", currentOwnerTag === "client" ? "" : "client")}>Clientes</a>
			</div>
			<hr></hr>
		</div>
	);
}
