import React from "react";
import { Link } from "react-router-dom";
import Princess from "../../assets/princess.png";
import "./navbar.css";

export default function Navbar() {
	return (
		<nav>
            <img src={Princess} alt="Princess"/>
			<Link to={`/`} className="nav-title">
				Maite's Portfolio
			</Link>
			<div className="nav-items">
				<Link to={`/portfolio`}>Portfolio</Link>
				<Link to={`/about`}>About Me</Link>
			</div>
		</nav>
	);
}
