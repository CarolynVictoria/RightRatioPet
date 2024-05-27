import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Client = ({ client }) => {
	return (
		<Card className='my-3 p2 rounded'>
			<Link to={`/client/${client._id}`}>
				<Card.Img className='pet-photo' src={client.petImage} variant='top' />
			</Link>
			<Card.Body>
				<Link to={`/client/${client._id}`} className='rr-cobalt'>
					<Card.Title as='div'>
						<strong>{client.petName}</strong>
					</Card.Title>
				</Link>

				<Card.Text className='rr-black' as='div'>
					{client.firstName} {client.lastName}
				</Card.Text>
				<Card.Text className='rr-black rr-small rr-email' as='div'>
					{client.email}
				</Card.Text>
				<Card.Text className='rr-black' as='div'>
					{client.phoneNumber}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
export default Client;
