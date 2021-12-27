import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { ArrowIcon } from 'assets/icons';
import { Noproducts } from 'assets/images';

const NoProducts = () => {
	return (
		<Container>
			<p>Você ainda não tem produtos no carrinho</p>
			<img src={Noproducts} alt="Personagem de Anime" />

			<div className="come-back">
				<Link to="/catalog">
					<img src={ArrowIcon} alt="Perfil" width="5px" />
					<span>Continuar comprando</span>
				</Link>
			</div>
		</Container>
	);
};

export default NoProducts;