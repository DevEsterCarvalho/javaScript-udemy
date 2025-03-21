import React from "react";
import "./NavItem.css";

export default (props) => (
	<a href={props.href} className="nav-item">
		<i className={`fa fa-${props.icon}`}></i> {props.label}
	</a>
);
