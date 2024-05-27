import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Client from '../components/Client';
import axios from 'axios';

const HomeScreen = () => {
	const [clients, setClients] = useState([]);

	useEffect(() => {
		const fetchClients = async () => {
			const { data } = await axios.get('/api/clients');

			// Capitalize the first letter of the first word of petName (if it exists) and sort the clients by petName
			const processedData = data
				.map((client) => {
					let firstWord = client.petName ? client.petName.split(' ')[0] : '';
					if (firstWord) {
						firstWord =
							firstWord.charAt(0).toUpperCase() +
							firstWord.slice(1).toLowerCase();
					}
					return {
						...client,
						petName: firstWord,
					};
				})
				.sort((a, b) => a.petName.localeCompare(b.petName));

			setClients(processedData);
		};

		fetchClients();
	}, []);

	return (
		<>
			<div>
				<h2 className='rr-home-title'>Clients</h2>
			</div>
			<Row>
				{clients.map((client) => (
					<Col key={client._id} sm={12} md={6} lg={4} xl={3}>
						<Client client={client} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;