import React from "react";
import header_img from "../../assets/about-header-img.jpg";
import about_img from "../../assets/about-drawing.jpg";
import "./about.css";

export default function About() {
	return (
		<>
			<header>
				<img src={header_img} className="about-header-img" />
			</header>
			<section id="about">
				<h1 className="header-title">About Me</h1>
				<h2 className="header-subtitle">Who I am</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Reiciendis ex consequuntur ullam molestias corporis,
					officiis porro corrupti maiores quo, culpa quae quam ducimus
					eum quia sapiente, aut facilis enim dicta!
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Reiciendis ex consequuntur ullam molestias corporis,
					officiis porro corrupti maiores quo, culpa quae quam ducimus
					eum quia sapiente, aut facilis enim dicta! Lorem ipsum dolor
					sit amet, consectetur adipisicing elit. Reiciendis ex
					consequuntur ullam molestias corporis, officiis porro
					corrupti maiores quo, culpa quae quam ducimus eum quia
					sapiente, aut facilis enim dicta!
				</p>
				<div className="img-info-right">
					<img src={about_img} className="about-img" />
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Sit, quasi quaerat assumenda ea doloribus aliquam,
						sunt eaque laborum accusamus quo quod nesciunt non ullam
						fuga optio eos impedit hic blanditiis?
					</p>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Reiciendis ex consequuntur ullam molestias corporis,
					officiis porro corrupti maiores quo, culpa quae quam ducimus
					eum quia sapiente, aut facilis enim dicta! Lorem ipsum dolor
					sit amet, consectetur adipisicing elit. Reiciendis ex
					consequuntur ullam molestias corporis, officiis porro
					corrupti maiores quo, culpa quae quam ducimus eum quia
					sapiente, aut facilis enim dicta!
				</p>
			</section>
		</>
	);
}
