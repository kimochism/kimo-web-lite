import { useState, useEffect } from 'react';
import api from 'api/index';
import * as ls from 'utils/localStorage';
import { LS_KEY_AUTHORIZATION, LS_KEY_USER } from 'constants/all';

export default function useAuth() {

	const [authenticated, setAuthenticated] = useState(false);
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		const authorizationStored = ls.getItem(LS_KEY_AUTHORIZATION, 'access_token');
		const firstNameStored = ls.getItem(LS_KEY_USER, 'firstName');
		const emailStored = ls.getItem(LS_KEY_USER, 'email');

		if (authorizationStored) setAuthenticated(true);
		if (firstNameStored) setFirstName(firstNameStored);
		if (emailStored) setEmail(emailStored);

		setLoading(false);
	}, []);

	const handleLogin = async (email, password) => {

		return await api.users.auth({ email, password }).then(async response => {

			ls.storeItem(LS_KEY_AUTHORIZATION, { 'access_token': response.access_token });
			ls.storeItem(LS_KEY_USER, { email });

			setEmail(email);

			const user = await api.users.showByEmail(email);

			if (user.email_verified) {
				ls.storeItem(LS_KEY_USER, { emailVerified: user.email_verified });
			}

			const customer = await api.customers.showByUser(user._id);
			
			ls.storeItem(LS_KEY_USER, { firstName: customer.full_name.split(' ')[0] });

			setAuthenticated(true);

			if (!user.email_verified) {
				window.location.href = '/email/confirm';
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
		ls.clear();
	};
	return { authenticated, loading, firstName, email, handleLogin, handleLogout };
}