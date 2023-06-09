import React from "react";
import "./portfolioElement.css";

export default function PortfolioElement() {
	return (
		<div>
			<h1>Learn the Alphabet with Dinnokivva!</h1>
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/K2xjdT_IvNc"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>
            <hr></hr>
			<p>Educational purpose, cartoon animated video made with After Effects, with drawings and backgrounds of my authorship.</p>
		</div>
	);
}
