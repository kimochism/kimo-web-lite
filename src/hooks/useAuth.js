import { useState, useEffect } from 'react';
import { CustomerService } from 'services/CustomerService';
import { UserService } from 'services/UserService';
import history from '../history';

export default function useAuth() {

	const [authenticated, setAuthenticated] = useState(false);
	const [emailVerified, setEmailVerified] = useState(false);
	const [loading, setLoading] = useState(true);

	const userService = new UserService();
	const customerService = new CustomerService();

	useEffect(() => {
		const authentication = localStorage.getItem('authorization');
		const emailVerified = localStorage.getItem('emailVerified');

		if (authentication) setAuthenticated(true);

		if (emailVerified) setEmailVerified(true);

		setLoading(false);
	}, []);

	const handleLogin = async (email, password) => {
		return await userService.auth({ email, password }).then(async response => {

			localStorage.setItem('authorization', response.access_token);
			localStorage.setItem('email', email);

			const user = await userService.showByEmail(email);

			if (user.email_verified) {
				setEmailVerified(true);
				localStorage.setItem('emailVerified', user.email_verified);
			}

			const customer = await customerService.showByUser(user._id);

			localStorage.setItem('firstName', customer.full_name.split(' ')[0]);

			setAuthenticated(true);

			if (!user.email_verified) {
				history.push('/confirmEmail');
			}

			return { success: true, message: 'success' };

		}).catch(error => {
			if (error.response && error.response.status === 401) {
				return { success: false, message: 'Email e/ou senha inválido' };
			}
			return { success: false, message: 'Serviço indisponível, entre em contato com o suporte.' };
		});
	};

	const handleLogout = () => {
		setAuthenticated(false);
		setEmailVerified(false);
		localStorage.removeItem('authorization');
		localStorage.removeItem('email');
		localStorage.removeItem('firstName');
		localStorage.removeItem('emailVerified');
	};

	const verifyEmail = async () => {
		const email = localStorage.getItem('email');
		const foundUser = await userService.showByEmail(email);

		if(foundUser && foundUser.email_verified) {
			setAuthenticated(true);
			setEmailVerified(true);
			localStorage.setItem('emailVerified', true);
			return true;
		}
		
		return false;
	};

	return { authenticated, loading, emailVerified, handleLogin, handleLogout, verifyEmail };
}