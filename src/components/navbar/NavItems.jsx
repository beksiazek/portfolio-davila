import React, { Children } from "react";
import { Link } from "react-router-dom";

export default function NavItems({children}) {
	return (
		<div className="nav-items" id="nav-links">
            {children}
			<Link to={`/about`}>Acerca de Mi</Link>
			<Link to={`/portfolio`}>Portfolio</Link>
			<Link to={`/contact`}>Contacto</Link>
		</div>
	);
}
