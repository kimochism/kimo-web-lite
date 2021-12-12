import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// toasts
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// facebook chat
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { AuthProvider } from 'context/AuthContext';
import Routes from 'routes';

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<Routes />
				<MessengerCustomerChat
					pageId="105137654636679"
					appId="330530065247617"
				/>
				<ToastContainer autoClose={5000} style={{ padding: '0px', width: '500px' }} />
			</Router>
		</AuthProvider>
	);
};

export default App;
