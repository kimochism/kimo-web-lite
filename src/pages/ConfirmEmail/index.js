import { AuthContext } from 'context/AuthContext';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from 'shared/Footer/index';
import Menu from 'shared/Menu/index';
import Warning from 'components/Warning/index';
import { Container } from './styles';

const ConfirmEmail = () => {

	const { verifyEmail } = useContext(AuthContext);
	const history = useHistory();

	useEffect(() => {
		const interval = setInterval(async () => {
			const isVerified = await verifyEmail();

			if(isVerified) {
				history.push('/');
			}
		}, 1500);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<Container>
			<Menu/>
			<Warning/>
			<div className="confirm-message-container">
				<div className="confirm-message">
					<p>Enviamos um email para confirmação da sua conta, <br/> por favor verifique-o.</p>
				</div>
			</div>
			<Footer/>
		</Container>
	);
};

export default ConfirmEmail;
