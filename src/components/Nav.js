import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<h3>Logo</h3>
			<ul>
				<Link className="nav-links" to="/">
					<li>Home</li>
				</Link>

				<Link className="nav-links" to="/about">
					<li>About</li>
				</Link>

				<Link className="nav-links" to="/shop">
					<li>Shop</li>
				</Link>

				<Link className="nav-links" to="/shop/socks">
					<li>Socks</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
