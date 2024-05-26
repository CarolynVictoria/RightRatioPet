import { Card } from 'react-bootstrap';

const Client = ({ client }) => {
	return (
		<Card className='my-3 p2 rounded'>
			<Card.Body>
				<Card.Text className='rr-black' as='div'>
					{client.firstName} {client.lastName}
				</Card.Text>
				<Card.Text className='rr-black rr-small rr-email' as='div'>
					{client.eMail}
				</Card.Text>
				<Card.Text className='rr-black' as='div'>
					{client.phoneNumber}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
export default Client;
