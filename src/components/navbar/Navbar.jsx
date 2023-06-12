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
					<img src={Logo} alt="Princess" className="nav-image" />
					<span>Maité Dávila</span>
				</Link>
				<NavItems closeNav={closeNav}>
					{window.innerWidth <= 600 ? (
						<>
							<Link onClick={closeNav} to={`/`}>Home</Link>
							<span className="closebtn" onClick={() => closeNav()}>
								&times;
							</span>
						</>
					) : (
						""
					)}
				</NavItems>
				<span className="icon" onClick={() => openNav()}>
					<FaBars />
				</span>
			</nav>
		</>
	);
}
