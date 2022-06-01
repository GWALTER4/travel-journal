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
		<div className="location">
			<img src={imageUrl} alt="Location" />
			<div className="location__info">
				<div className="info__country">
					<div id="info__location-pin">
						<FontAwesomeIcon icon={faLocationDot} />
					</div>
					<h3>{country.toUpperCase()}</h3>
					<a href={locationUrl} target="_blank" rel="noreferrer">
						View on Google Maps
					</a>
				</div>
				<h1>{name}</h1>
				<h3 className="location__dates">
					{startDate} - {endDate}
				</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Location;
