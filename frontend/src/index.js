import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import store from './store';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ClientScreen from './screens/ClientScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

//create the router
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index={true} path='/' element={<HomeScreen />} />
			<Route path='/search/:keyword' element={<HomeScreen />} />
			<Route path='/page/:pageNumber' element={<HomeScreen />} />
			<Route
				path='/search/:keyword/page/:pageNumber'
				element={<HomeScreen />}
			/>
			<Route path='/client/:id' element={<ClientScreen />} />
			<Route path='/login' element={<LoginScreen />} />
			<Route path='/register' element={<RegisterScreen />} />
		</Route>
	)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<HelmetProvider>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
		</HelmetProvider>	
	</React.StrictMode>
);

reportWebVitals();
