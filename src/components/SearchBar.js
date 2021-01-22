import glass from '../assets/magnifying-glass.svg';
import cross from '../assets/cross.svg';
import React, { useContext, useState } from 'react';
import './SearchBar.css';
import { BoatContext } from '../context/BoatContext';

const SearchBar = () => {
	const [isTyping, setTyping] = useState(glass);
	const [input, setInput] = useState('');
	const [boats, setBoats, getRequest] = useContext(BoatContext);

	const handleEvent = () => {
		if (isTyping === cross) {
			setInput('');
			setTyping(glass);
		} else {
		}
	};

	const handleTyping = (e) => {
		setInput(e.target.value);
		getRequest(`http://localhost:4000/api/ships/${e.target.value}`);
	};

	return (
		<span
			style={{
				border: '1px solid black',
				padding: '1rem',
				marginTop: '20px',
			}}>
			<input
				placeholder="Search"
				onClick={() => setTyping(cross)}
				onChange={(e) => handleTyping(e)}
				value={input}
				style={{ fontSize: '20px' }}></input>
			<img src={isTyping} onClick={handleEvent}></img>
		</span>
	);
};

export default SearchBar;
