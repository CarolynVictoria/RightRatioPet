import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const header = () => {
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
				<Container>
					<Navbar.Brand href='/'>Right:Ratio Data App</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link href='/login'>
								<FaUser />
								Sign In
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};
export default header;
