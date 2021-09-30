import React from 'react';

import { Container } from './styles';

const Notification = () => {
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
					<button className="">Finalizar </button>
				</div>
			</div>
		</Container>
	);
};

export default Notification;