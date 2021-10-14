import React from 'react';
import Footer from 'shared/Footer/index';
import { Container } from './styles';

const ConfirmEmail = () => {
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
