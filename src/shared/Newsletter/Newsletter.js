import React from 'react';
import { Container } from './styles';

const Newsletter = () => {
	return (
		<Container>
			<div className="container-newsletter">
                <h2>Fique por dentro das nossas novidades</h2>
                <span>Se inscreva para ganhar ofertas especiais, cupoms de desconto, e promoções exclusivas por tempo limitado</span>
                <div className="container-newsletter-email">
                    <input type="text" placeholder="Example@kimochism.com"></input>
                    <button>Inscrever-se</button>
                </div>
            </div>
		</Container>
	);
};
export default Newsletter;