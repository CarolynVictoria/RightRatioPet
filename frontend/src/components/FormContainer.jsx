import { Container, Row, Col } from 'react-bootstrap';

const formContainer = ({ children }) => {
	return (
		<Container>
			<Row className='ustify-content-md-center'>
				<Col xs={12} md={6}>
					{children}
				</Col>
			</Row>
		</Container>
	);
};
export default formContainer;
