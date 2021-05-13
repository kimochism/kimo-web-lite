import React from 'react';
import { Container } from './styles';

const Product = () => {
	return(
		<Container>
			<div className="box-item-product">
				<img src="https://i.pinimg.com/564x/84/a8/44/84a84467aa5bde128d943ea5eb1665f8.jpg" className="box-item-product-image" alt="Foto do produto"/>
				<span>Camiseta Oni Demon</span>
				<span>R$ 199,00 </span>
			</div>
		</Container>
	);
};

export default Product;