import React from 'react';
import Footer from 'shared/Footer/index';
import Menu from 'shared/Menu/index';
import Warning from 'components/Warning/index';
import { Container } from './styles';

const ConfirmEmail = () => {
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
