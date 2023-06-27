import React from "react";
import { Link } from "react-router-dom";

export default function NavItems(props) {
	const { children, closeNav } = props;

	return (
		<div className="nav-items" id="nav-links">
            {children}
			<Link onClick={closeNav} to={`/about`}>Acerca de Mi</Link>
			<Link onClick={closeNav} to={`/portfolio`}>Portfolio</Link>
			<Link onClick={closeNav} to={`/contact`}>Contacto</Link>
		</div>
	);
}
