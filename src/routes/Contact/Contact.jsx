import React, { useEffect } from "react";
import { BsStars } from "react-icons/bs";
import "./contact.css";

export default function Contact() {
	useEffect(() => {
		document.body.style.setProperty("--overflow-behavior", "hidden");
	}, []);

	return (
		<section id="contact">
			<div className="contact-info">
				<h2>Enviame un mensaje a:</h2>
				<div className="email">
					<h3>maitedavila1606@gmail.com</h3>
					<BsStars />
				</div>
			</div>
		</section>
	);
}
