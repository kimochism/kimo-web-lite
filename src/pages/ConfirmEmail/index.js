import { AuthContext } from 'context/AuthContext';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from 'shared/Footer/index';
import { Container } from './styles';

const ConfirmEmail = () => {

	const { verifyEmail } = useContext(AuthContext);
	const history = useHistory();

	useEffect(() => {
		setInterval(() => {
			handleVerifyEmail();
		}, 1500);
	}, []);

	const handleVerifyEmail = async () => {
		const isVerified = await verifyEmail();

		if(isVerified) {
			history.push('/');
		}

		return;
	};

	return (
		<Container>
			<div>
				<p>Enviamos uma confirmação de email, por favor verifique-o.</p>
			</div>
			<Footer />
		</Container>
	);
};

export default ConfirmEmail;
