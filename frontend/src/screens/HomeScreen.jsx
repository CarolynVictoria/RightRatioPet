import { Row, Col } from 'react-bootstrap';
import Client from '../components/Client';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useGetClientsQuery } from '../slices/clientsApiSlice';

const HomeScreen = () => {
	const { data: clients, isLoading, error } = useGetClientsQuery();

	const sortedClients = clients
		? [...clients].sort(
				(a, b) => new Date(b.submissionDate) - new Date(a.submissionDate)
		  )
		: [];

	return (
		<>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>
					{error?.data?.message || error.error}
				</Message>
			) : (
				<>
					<div>
						<h2 className='rr-home-title'>Clients</h2>
					</div>
					<Row>
						{sortedClients.map((client) => (
							<Col key={client._id} sm={12} md={6} lg={4} xl={3}>
								<Client client={client} />
							</Col>
						))}
					</Row>
				</>
			)}
		</>
	);
};

export default HomeScreen;
