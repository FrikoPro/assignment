import axios from 'axios';
import React from 'react';
import { createContext, useState } from 'react';

export const BoatContext = createContext();

export const BoatProvider = (props) => {
	const [boats, setBoats] = useState([]);

	const getRequest = (url) => {
		axios.get(url).then((response) => {
			setBoats(response.data);
		});
	};
	return (
		<BoatContext.Provider value={[boats, setBoats, getRequest]}>
			{props.children}
		</BoatContext.Provider>
	);
};
