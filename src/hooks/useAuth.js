import { useState, useEffect } from 'react';
import { CustomerService } from 'services/CustomerService';
import { UserService } from 'services/UserService';

export default function useAuth() {

	const [authenticated, setAuthenticated] = useState(false);
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [loading, setLoading] = useState(true);

	const userService = new UserService();
	const customerService = new CustomerService();

	useEffect(() => {

		const authentication = localStorage.getItem('authorization');
		const email = localStorage.getItem('email');
		const firstName = localStorage.getItem('firstName');

		if (authentication) setAuthenticated(true);
		if (firstName) setFirstName(firstName);
		if (email) setEmail(email);

		setLoading(false);
	}, []);

	const handleLogin = async (email, password) => {

		localStorage.clear();

		return await userService.auth({ email, password }).then(async response => {

			localStorage.setItem('authorization', response.access_token);
			localStorage.setItem('email', email);

			setEmail(email);

			const user = await userService.showByEmail(email);

			if (user.email_verified) {
				localStorage.setItem('emailVerified', user.email_verified);
			}

			const customer = await customerService.showByUser(user._id);

			localStorage.setItem('firstName', customer.full_name.split(' ')[0]);

			setAuthenticated(true);

			if (!user.email_verified) {
				window.location.href = '/confirmEmail';
				return { success: false, message: 'confirmar email' };
			}

			return { success: true, message: 'success' };

		}).catch(error => {

			console.log(error);

			if (error.response && error.response.status === 401) {
				return { success: false, message: 'Email e/ou senha inválido' };
			}
			return { success: false, message: 'Serviço indisponível, entre em contato com o suporte.' };
		});
	};

	const handleLogout = () => {
		setAuthenticated(false);
		localStorage.clear();
	};

	const verifyEmail = async () => {
		const email = localStorage.getItem('email');
		const foundUser = await userService.showByEmail(email);

		if(foundUser && foundUser.email_verified) {
			setAuthenticated(true);
			localStorage.setItem('emailVerified', true);
			return true;
		}
		
		return false;
	};

	const emailIsVerified = async () => {
		const confirmed = await userService.showByEmail(email);

		if(confirmed) return true;
		return false;
	};

	return { authenticated, loading, firstName, email, handleLogin, handleLogout, verifyEmail, emailIsVerified };
}