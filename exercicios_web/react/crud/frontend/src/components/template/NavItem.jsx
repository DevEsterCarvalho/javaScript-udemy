import React from "react";
import "./NavItem.css";
import { Link } from "react-router-dom";

export default (props) => (
	<Link to={props.href} className="nav-item">
		<i className={`fa fa-${props.icon}`}></i> {props.label}
	</Link>
);
