import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Client from '../components/Client';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import { useGetClientsQuery } from '../slices/clientsApiSlice';

const HomeScreen = () => {
	const { pageNumber } = useParams();

	const { data, isLoading, error } = useGetClientsQuery({ pageNumber });

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
						{data.clients.map((client) => (
							<Col key={client._id} sm={12} md={6} lg={4} xl={3}>
								<Client client={client} />
							</Col>
						))}
					</Row>
					<Paginate pages={data.pages} page={data.page} />
				</>
			)}
		</>
	);
};

export default HomeScreen;
