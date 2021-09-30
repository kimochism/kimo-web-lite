import React from 'react';

import { Container } from './styles';
import PropTypes from 'prop-types';

const Notification = ({ history, options }) => {

	console.log(options);
	return (
		<Container>
			<img src="https://i.imgur.com/48spIdP.png"/>
			<div>
				<div>
					<span>Produto adicionado á sacola!</span>
					<span className="msg-toast">Continue comprando ou vá para sua sacola para
finalizar sua compra.</span>
				</div>
				<div className="button-finish">
					<button onClick={() => history && history.push('/customerbag')}>Finalizar </button>
				</div>
			</div>
		</Container>
	);
};

Notification.propTypes = {
	history: PropTypes.object,
	options: PropTypes.object,
};

export default Notification;