import React, { useContext, useEffect, useState } from 'react';
import Footer from 'shared/Footer/Footer';
import Menu from 'shared/Menu/Menu';
import Warning from 'components/Warning/Warning';
import { Container } from './styles';
import { useHistory, useParams } from 'react-router';
import api from 'api/index';
import { SocketContext } from 'context/SocketContext';

const VerifyEmail = () => {

	const { id } = useParams();
	const socket = useContext(SocketContext);
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');

	
	useEffect(() => {
		socket && socket.on('emailVerified', payload => {
			if (payload.verified) {
				history.push('/');
			} else {
				setMessage('Não foi possível realizar a confirmação, token inválido.');
			}
		});
	}, [socket]);

	useEffect(() => {
		setLoading(true);

		setTimeout(async () => {

			await api.users.confirmEmail(id);
			setLoading(false);

		}, 3000);
	}, []);

	return (
		<Container>
			<Menu />
			<Warning />
			<div className="confirm-message-container">
				<div className="confirm-message">
					{loading && <p>Verificando seu email...</p>}
					{message && <p>{message}</p>}
				</div>
			</div>
			<Footer />
		</Container>
	);
};

export default VerifyEmail;
