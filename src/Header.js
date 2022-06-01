import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	return (
		<header>
			<div id="logo__icon">
				<FontAwesomeIcon icon={faEarthAmericas} />
			</div>
			<h1 id="logo__text">my travel journal.</h1>
		</header>
	);
};

export default Header;
