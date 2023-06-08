import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import NavItems from "./NavItems";
import Logo from "../../assets/logo.png";
import "./navbar.css";

export default function Navbar() {
	function openNav() {
		document.getElementById("nav-links").style.width = "70vw";
	}

	function closeNav() {
		document.getElementById("nav-links").style.width = "0";
	}

	return (
		<>
			<nav>
				<Link to={`/`} className="nav-title">
					<img src={Logo} alt="Princess" />
					<span>Maité Dávila</span>
				</Link>
				<NavItems>
					{window.innerWidth <= 600 ? (
						<>
							<Link to={`/`}>Home</Link>
							<a className="closebtn" onClick={() => closeNav()}>
								&times;
							</a>
						</>
					) : (
						""
					)}
				</NavItems>
				<a className="icon" onClick={() => openNav()}>
					<FaBars />
				</a>
			</nav>
		</>
	);
}
