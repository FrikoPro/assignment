import React from 'react';
import Boatlist from './components/Boatlist';
import SearchBar from './components/SearchBar';
import { BoatProvider } from './context/BoatContext';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row } from 'react-bootstrap';

function App() {
	return (
		<Container>
			<BoatProvider>
				<Row>
					<SearchBar></SearchBar>
				</Row>
				<Boatlist></Boatlist>
			</BoatProvider>
		</Container>
	);
}

export default App;
