import { Card } from 'react-bootstrap';

const Client = ({ client }) => {
	return (
		<Card className='my-3 p3 rounded'>
			<a href={`/client/${client._id}`}>
				<Card.Img className='pet-photo' src={client.petImage} variant='top' />
			</a>
			<Card.Body>
				<a href={`/client/${client._id}`}>
					<Card.Title as='div'>
						<strong>{client.petName}</strong>
					</Card.Title>
				</a>

				<Card.Text className='rr-black' as='div'>
					{client.firstName} {client.lastName} {client.email}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
export default Client;
