import { Row, Col } from 'react-bootstrap';
import Client from '../components/Client';
import clients from '../clients';

const HomeScreen = () => {
	//Capitalize the first letter of each name
	const formatName = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	};

	//Sort clients alphabetically by petName
	const sortedClients = clients.sort((a, b) => {
		if (a.petName.toLowerCase() < b.petName.toLowerCase()) return -1;
		if (a.petName.toLowerCase() > b.petName.toLowerCase()) return 1;
		return 0;
	});
	return (
		<>
			<h1 className='rr-black'>Clients</h1>
			<Row>
				{sortedClients.map((client) => {
					// Create a new client object with the formatted names
					const formattedClient = {
						...client,
						petName: formatName(client.petName),
						firstName: formatName(client.firstName),
						lastName: formatName(client.lastName),
					};

					return (
						<Col key={client._id} sm={12} md={4} lg={4} xl={3}>
							<Client client={formattedClient} />
						</Col>
					);
				})}
			</Row>
		</>
	);
};
export default HomeScreen;
