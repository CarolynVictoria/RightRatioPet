import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Client = ({ client }) => {
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
		const year = date.getFullYear();
		return `${month}-${day}-${year}`;
	};

	const formatPetName = (petName) => {
		if (!petName) return '';
		const firstWord = petName.split(' ')[0];
		return firstWord.charAt(0).toUpperCase() + firstWord.slice(1).toLowerCase();
	};

	return (
		<Card className='my-3 p2 rounded'>
			<Card.Body>
				<Row>
					<Col>
						<Link to={`/client/${client._id}`} className='rr-cobalt'>
							<Card.Title as='div'>
								<strong>{formatPetName(client.petName)}</strong>
							</Card.Title>
						</Link>
					</Col>
					<Col>
						<Card.Text className='rr-black rr-small rr-right'>
							<strong>{formatDate(client.submissionDate)}</strong>
						</Card.Text>
					</Col>
				</Row>

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
