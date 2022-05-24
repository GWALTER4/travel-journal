import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Location = ({
	location: {
		country,
		name,
		startDate,
		endDate,
		description,
		imageUrl,
		locationUrl,
	},
}) => {
	return (
		<>
			<FontAwesomeIcon icon={faLocationDot} />
			<h3>{country}</h3>
			<a href={locationUrl} target="_blank" rel="noreferrer">
				View on Google Maps
			</a>
			<h1>{name}</h1>
			<h3>
				{startDate} - {endDate}
			</h3>
			<p>{description}</p>
			<img src={imageUrl} alt="Location" />
		</>
	);
};

export default Location;
