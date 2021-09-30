import React from 'react';
import { Container } from './styles';
import PropTypes from 'prop-types';

const Product = ({ product }) => {

	return(
		<Container>
			<div className="box-item-product">
				<img src={product.images[0].url} className="box-item-product-image" alt="Foto do produto" />
				<span>{product.name}</span>
				<span>R$ {product.price}</span>
			</div>
		</Container>
	);
};

Product.propTypes = {
	product: PropTypes.object.isRequired
};

export default Product;