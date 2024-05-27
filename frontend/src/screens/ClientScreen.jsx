import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap';
import axios from 'axios';

const ClientScreen = () => {
	const [client, setClient] = useState({});

	const { id: clientId } = useParams();

	useEffect(() => {
		const fetchClient = async () => {
			const { data } = await axios.get(`/api/clients/${clientId}`);
			setClient(data);
		};

		fetchClient();
	}, [clientId]);

	return (
		<>
			<Row>
				<Col md={8}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<Row>
								<Col xs={3}>
									<strong>Pet Name:</strong>
								</Col>
								<Col xs={9}>{client.petName}</Col>
							</Row>
							<Row>
								<Col xs={3}>
									<strong>Species:</strong>
								</Col>
								<Col xs={9}>{client.species}</Col>
							</Row>
							<Row>
								<Col xs={3}>
									<strong>Breed:</strong>
								</Col>
								<Col xs={9}>{client.breed}</Col>
							</Row>
							<Row>
								<Col xs={3}>
									<strong>Weight:</strong>
								</Col>
								<Col xs={9}>{client.petWeight}</Col>
							</Row>
							<Row>
								<Col xs={3}>
									<strong>Age:</strong>
								</Col>
								<Col xs={9}>{client.petAge}</Col>
							</Row>
							<Row>
								<Col xs={3}>
									<strong>Gender:</strong>
								</Col>
								<Col xs={9}>{client.petGender}</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item>
							<Row>
								<Col xs={3}>
									<strong>Clinic:</strong>
								</Col>
								<Col xs={9}>{client.petClinicName}</Col>
							</Row>
							<Row>
								<Col xs={3}>
									<strong>Vet:</strong>
								</Col>
								<Col xs={9}>{client.petVet}</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item variant='flush'>
							<Row className='mb-2'>
								<Col xs={3}>
									<strong>Conditions:</strong>
								</Col>
								<Col xs={9}>{client.petConditions}</Col>
							</Row>
							<Row className='mb-2'>
								<Col xs={3}>
									<strong>Medications:</strong>
								</Col>
								<Col xs={9}>{client.petCurrentMedications}</Col>
							</Row>
							<Row className='mb-2'>
								<Col xs={3}>
									<strong>Cancer Details:</strong>
								</Col>
								<Col xs={9}>{client.petCancerDetails}</Col>
							</Row>
							<Row className='mb-2'>
								<Col xs={3}>
									<strong>Medical Details:</strong>
								</Col>
								<Col xs={9}>{client.petMedicalDetails}</Col>
							</Row>
							<Row>
								<Col xs={3}>
									<strong>Food Allergies:</strong>
								</Col>
								<Col xs={9}>{client.petFoodAllergy}</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item>
							<Row>
								<Col xs={3}>
									<strong>Desired Benefits:</strong>
								</Col>
								<Col xs={9}>{client.benefitsDesired}</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item>
							<Row>
								<Col xs={3}>
									<strong>Pet Photo:</strong>
								</Col>
								<Col xs={9}>
									<Image
										className='pet-profile-image mt-3'
										src={client.petImage}
										alt={client.petName}
										fluid
										rounded
									/>
								</Col>
							</Row>
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={4}>
					<Card className='mt-4'>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<Row>
									<div className='mb-1'>
										<strong>Pet Parent</strong>
									</div>
									<Col>
										{client.firstName} {client.lastName}
									</Col>
								</Row>
								<Row>
									<Col>{client.email}</Col>
								</Row>
								<Row>
									<Col>{client.phoneNumber}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<div className='mb-1'>
										<strong>Mailing Address</strong>
									</div>
									<Col>{client.mailingAddress}</Col>
								</Row>
							</ListGroup.Item>
						</ListGroup>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<Row>
									<div className='mb-1'>
										<strong>Payment Method</strong>
									</div>
									<Col>{client.paymentMethodChoice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<div className='mb-1'>
										<strong>How Referred</strong>
									</div>
									<Col>{client.howReferred}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<div className='mb-1'>
										<strong>Intake Action</strong>
									</div>
									<Col>{client.intakeActionRequested}</Col>
								</Row>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default ClientScreen;
