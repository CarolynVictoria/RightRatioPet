import { useParams } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Card } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useGetClientDetailsQuery } from '../slices/clientsApiSlice';

const ClientScreen = () => {
	const { id: clientId } = useParams();

	const { data: client, isLoading, error } = useGetClientDetailsQuery(clientId);

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
		const year = date.getFullYear();
		return `${month}-${day}-${year}`;
	};

	return (
		<>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>
					{error?.data?.message || error.error}
				</Message>
			) : (
				<Row>
					<Col md={8}>
						<Row className='rr-black rr-small'>
							<Col xs={12}>
								<strong>Intake Date: </strong>{' '}
								{formatDate(client.submissionDate)}
							</Col>
						</Row>
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
										<p className='rr-small rr-note'>
											- image display is under development -
										</p>
										{/* <Image
										className='pet-profile-image mt-3'
										src={client.petImage}
										alt={client.petName}
										fluid
										rounded
									/> */}
									</Col>
								</Row>
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col md={4}>
						<Card className='mt-4'>
							<ListGroup variant='flush'>
								<ListGroup.Item className='rr-tint'>
									<Row>
										<div className='mb-1'>
											<strong>Pet Parent</strong>
										</div>
										<Col>
											{client.firstName} {client.lastName}
										</Col>
									</Row>
									<Row>
										<Col>{client.eMail}</Col>
									</Row>
									<Row>
										<Col>{client.phoneNumber}</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item className='rr-tint'>
									<Row>
										<div className='mb-1'>
											<strong>Mailing Address</strong>
										</div>
										<Col>{client.mailingAddress}</Col>
									</Row>
								</ListGroup.Item>
							</ListGroup>
							<ListGroup variant='flush'>
								<ListGroup.Item className='rr-tint'>
									<Row>
										<div className='mb-1'>
											<strong>Payment Method</strong>
										</div>
										<Col>{client.paymentMethodChoice}</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item className='rr-tint'>
									<Row>
										<div className='mb-1'>
											<strong>How Referred</strong>
										</div>
										<Col>{client.howReferred}</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item className='rr-tint'>
									<Row>
										<div className='mb-1'>
											<strong>Intake Action</strong>
										</div>
										<Col>{client.intakeActionRequested || 'not provided'}</Col>
									</Row>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</>
	);
};

export default ClientScreen;
