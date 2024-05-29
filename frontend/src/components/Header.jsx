import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import SearchBox from './SearchBox';
import logo from '../assets/logo.png';

const Header = () => {
	const { userInfo } = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [logoutApiCall] = useLogoutMutation();

	const logoutHandler = async () => {
		try {
			await logoutApiCall().unwrap();
			dispatch(logout());
			navigate('/login');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand className='navtitle'>
							<img src={logo} alt='right:ratio' className='logo' />
							Right:Ratio Data Center
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<SearchBox />
							{userInfo ? (
								<NavDropdown title={userInfo.name} id='username'>
									<LinkContainer to='/profile'>
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to='/login'>
									<Nav.Link>
										<FaUser />
										Sign In
									</Nav.Link>
								</LinkContainer>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};
export default Header;
