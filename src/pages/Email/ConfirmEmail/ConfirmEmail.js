import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from 'shared/Footer/Footer';
import Menu from 'shared/Menu/Menu';
import Warning from 'components/Warning/Warning';
import { Container } from './styles';
import { SocketContext } from 'context/SocketContext';

const ConfirmEmail = () => {

	const socket = useContext(SocketContext);
	const history = useHistory();

	useEffect(() => {
		socket && socket.on('emailVerified', payload => {
			console.log(payload);
			if (payload.verified) {
				history.push('/');
			}
		});
	}, [socket]);

	return (
		<Container>
			<Menu />
			<Warning />
			<div className="confirm-message-container">
				<div className="confirm-message">
					<p>Enviamos um email para confirmação da sua conta, <br /> por favor verifique-o.</p>
				</div>
			</div>
			<Footer />
		</Container>
	);
};

export default ConfirmEmail;
