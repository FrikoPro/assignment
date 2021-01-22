import React from 'react';

const Boat = ({ name }) => {
	return (
		<span
			className="mt-4"
			style={{
				border: '1px solid grey',
				padding: '1rem',
				marginTop: '0px',
				width: '284px',
				height: '66px',
				fontSize: '20px',
			}}>
			{name}
		</span>
	);
};

export default Boat;
