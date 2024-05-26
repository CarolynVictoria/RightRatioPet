import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Client from '../components/Client';
import axios from 'axios';

const HomeScreen = () => {
	const [clients, setClients] = useState([]);

	useEffect(() => {
		const fetchClients = async () => {
			const { data } = await axios.get('/api/clients');
			setClients(data);
		};

		fetchClients();
	}, []);

	return (
		<>
			<h1>Latest Clients</h1>
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
