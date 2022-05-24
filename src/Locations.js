import React from "react";
import Location from "./Location";
import data from "./data";

const Locations = () => {
	const locations = data.map((location) => {
		return <Location key={location.id} location={location} />;
	});

	return <main>{locations}</main>;
};

export default Locations;
