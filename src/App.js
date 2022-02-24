import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';

// toasts
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// facebook chat
import MessengerCustomerChat from 'react-messenger-customer-chat';

// contexts
import { AuthProvider } from 'context/AuthContext';
import { SocketProvider } from 'context/SocketContext';

import { UseEffectScroll } from 'react-use-smooth-scroll';

const App = () => {
	return (
		<AuthProvider>
			<SocketProvider>
				<UseEffectScroll>
					<Router>
						<Routes />
						<MessengerCustomerChat
							pageId="105137654636679"
							appId="330530065247617"
						/>
						<ToastContainer autoClose={5000} style={{ padding: '0px', width: '500px' }} />
					</Router>
				</UseEffectScroll>
			</SocketProvider>
		</AuthProvider>
	);
};

export default App;
