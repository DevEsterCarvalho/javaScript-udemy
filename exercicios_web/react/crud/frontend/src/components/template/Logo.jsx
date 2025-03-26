import "./Logo.css";
import logo from "../../assets/images/logo.png"; // Aqui a correção
import React from "react";
import { Link } from "react-router-dom";

export default (props) => (
	<aside className="logo">
		<Link to="/" className="logo">
			<img src={logo} alt="logo" />
		</Link>
	</aside>
);
