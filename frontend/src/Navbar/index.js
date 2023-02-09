/*import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { GiMagnifyingGlass } from "react-icons/gi";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/about" activeStyle>
			<GiMagnifyingGlass/>
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact Us
		</NavLink>
		<NavLink to="/blogs" activeStyle>
			Blogs
		</NavLink>
		<NavLink to="/sign-up" activeStyle>
			Sign Up
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;*/


import React from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import { NavLink } from "./NavbarElements";

const Navbar = () => {
return (
	<>
		<NavLink to="/about" activeStyle>
			<GiMagnifyingGlass/>
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact Us
		</NavLink>
		<NavLink to="/blogs" activeStyle>
			Blogs
		</NavLink>
		<NavLink to="/sign-up" activeStyle>
			Sign Up
		</NavLink>
	</>
);
};

export default Navbar;

