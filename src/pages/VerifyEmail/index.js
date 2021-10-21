import React, { useEffect, useState } from 'react';
import Footer from 'shared/Footer/index';
import Menu from 'shared/Menu/index';
import Warning from 'components/Warning/index';
import { Container } from './styles';
import {  useHistory, useParams } from 'react-router';
import { UserService } from 'services/UserService';
import useAuth from 'hooks/useAuth';

const VerifyEmail = () => {

	const { id } = useParams();
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');

	const { verifyEmail } = useAuth();

	const userService = new UserService();

	useEffect(() => {
		setLoading(true);

		setTimeout(async () => {

			const confirmed = await userService.confirmEmail(id);
			
			if(confirmed) {
				localStorage.setItem('emailVerified', true);
				await verifyEmail();
				return history.push('/');
			}

			setMessage('Não foi possível realizar a confirmação, token inválido.');
			setLoading(false);

		}, 3000);
	}, []);

	return (
		<Container>
			<Menu/>
			<Warning/>
			<div className="confirm-message-container">
				<div className="confirm-message">
					{ loading && <p>Verificando seu email...</p> }
					{ message && <p>{message}</p> }
				</div>
			</div>
			<Footer/>
		</Container>
	);
};

export default VerifyEmail;
