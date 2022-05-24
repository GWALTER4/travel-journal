import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	return (
		<>
			<FontAwesomeIcon icon={faEarthAmericas} />
			<h1>my travel journal.</h1>
		</>
	);
};

export default Header;
