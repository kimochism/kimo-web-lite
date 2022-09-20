import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MessengerCustomerChat from 'react-messenger-customer-chat';

import { AuthProvider } from 'context/AuthContext';
import { SocketProvider } from 'context/SocketContext';
import { MenuProvider } from 'context/MenuContext';

const App = () => {
	return (
		<AuthProvider>
			<SocketProvider>
				<MenuProvider>
					<Router>
						<Routes />
						<MessengerCustomerChat
							pageId="105137654636679"
							appId="330530065247617"
						/>
						<ToastContainer autoClose={5000} style={{ padding: '0px', width: '500px' }} />
					</Router>
				</MenuProvider>
			</SocketProvider>
		</AuthProvider>
	);
};

export default App;
