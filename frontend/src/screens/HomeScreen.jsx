import { Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Client from '../components/Client';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import { useGetClientsQuery } from '../slices/clientsApiSlice';
import Meta from '../components/Meta';

const HomeScreen = () => {
	const { pageNumber, keyword } = useParams();
	const { data, isLoading, error } = useGetClientsQuery({
		keyword,
		pageNumber,
	});

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
					<Meta title='Right:Ratio Data Center' />
					<Row>
						<h2 className='rr-home-title'>Clients</h2>
						{keyword && (
							<Link to='/' className='btn btn-light mb-6 rr-small rr-cobalt'>
								Home
							</Link>
						)}
					</Row>
					<Row>
						{data.clients.map((client) => (
							<Col key={client._id} sm={12} md={6} lg={4} xl={3}>
								<Client client={client} />
							</Col>
						))}
					</Row>
					<Paginate
						pages={data.pages}
						page={data.page}
						keyword={keyword ? keyword : ''}
					/>
				</>
			)}
		</>
	);
};

export default HomeScreen;
