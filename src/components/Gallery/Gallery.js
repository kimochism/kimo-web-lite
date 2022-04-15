import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import api from 'api';
import useFallback from 'hooks/useFallback';

const Gallery = () => {

	const [fallback, showFallback, hideFallback] = useFallback();

	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = async () => {

		showFallback();
		const { data } = await api.products.list({ limit: 8 });

		setProducts(data);

		hideFallback();
	};

	const formatPrice = price => {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}).format(price);
	};

	return (
		<Container>
			<h2>Original Kimochism</h2>
			<div className="gallery-container">
				{/* Items da galeria */}
				{products && products.map(product => {
					return (
						<div className="gallery-box" key={product._id}>
							<img src={product.images[0].url}></img>
							<div className="gallery-box-title">
								<label>{product.name}</label>
								<span>
									<i>{formatPrice(product.price)}</i>- {formatPrice(product.discount_price)}
									<b>Save {formatPrice(product.discount_price)}</b>
								</span>
							</div>
						</div>
					);
				})}
			</div>
			<Link to="/catalog">
				<button>Ver mais</button>
			</Link>
			{fallback}
		</Container>
	);
};

export default Gallery;