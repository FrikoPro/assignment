import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { BoatContext } from '../context/BoatContext';
import Boat from './Boat';

const Boatlist = () => {
	const [boats] = useContext(BoatContext);

	return (
		<>
			{boats.map((item, index) => (
				<Row className="!mt-1">
					<Boat name={item.name} key={index}></Boat>
				</Row>
			))}
		</>
	);
};

export default Boatlist;
