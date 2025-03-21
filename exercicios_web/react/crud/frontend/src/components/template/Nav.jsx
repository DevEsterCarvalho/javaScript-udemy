import "./Nav.css";
import React from "react";
import NavItem from "./NavItem";

export default (props) => (
	<aside className="menu-area">
		<NavItem href="#" icon="home" label="Início" />
		<NavItem href="#/" icon="users" label="Users" />
	</aside>
);
