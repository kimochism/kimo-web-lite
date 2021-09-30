import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { ProductService } from 'services/ProductService';
import Footer from 'shared/Footer';
import Menu from 'shared/Menu';
import { Container } from './styles';

const Product = () => {

	const { id } = useParams();

	const productService = new ProductService();

	const [defaultProduct, setDefaultProduct] = useState();
	const [product, setProduct] = useState();
	const [availableSizes, setAvailableSizes] = useState([]);
	const [availableColors, setAvailableColors] = useState([]);
	const [options, setOptions] = useState({
		color: '',
		size: ''
	});

	const sizesRef = useRef(null);
	const colorsRef = useRef(null);

	useEffect(() => {
		getProduct();
	}, []);

	useEffect(() => {
		if (product && product.varieties) {
			setAvailableSizes(product.varieties.filter((item, index, self) => self.findIndex(variety => (variety.size === item.size)) === index).map(variety => variety.size));
			setAvailableColors(product.varieties.filter((item, index, self) => self.findIndex(variety => (variety.color === item.color)) === index).map(variety => variety.color));
		}
	}, [product]);

	const getProduct = async () => {
		const data = await productService.show(id);
		setProduct(data);
		setDefaultProduct(data);
	};

	const selectSize = (e, size) => {

		// console.log(defaultProduct.varieties);

		const colors = defaultProduct.varieties.filter(filter => filter.size === size).map(variety => variety.color);

		setAvailableColors(colors);

		const { childNodes } = sizesRef.current;

		for (let child of childNodes) {
			child.classList.remove('selected');
		}

		setOptions({ ...options, size });
		e.currentTarget.classList.add('selected');
	};

	const selectColor = (e, color) => {
		
		const sizes = defaultProduct.varieties.filter(filter => filter.color === color).map(variety => variety.size);

		setAvailableSizes(sizes);

		const { childNodes } = colorsRef.current;

		for (let child of childNodes) {
			child.classList.remove('selected-color');
		}

		setOptions({ ...options, color });
		e.currentTarget.classList.add('selected-color');
	};

	return (
		<Container>
			<Menu />
			{product &&
				<div className="product-container">
					<div className="product-left">
						<img src={product.images[0].url} alt="Foto do produto" />
					</div>

					<div className="product-right">
						<div className="product-buy">
							<h4>{product.name}</h4>
							<span><b>KIMOCHISM 気持ち</b></span>
							<div className="product-price">
								<span>R$ {product.price}</span>
								<span>Até 8x de {product.price / 8}</span>
							</div>
							<div className="product-size">
								<div>
									<span>Tamanhos</span>
								</div>
								<div ref={sizesRef}>
									{availableSizes && availableSizes.map(availableSize =>
										<div
											onClick={(e) => selectSize(e, availableSize)}
											className="product-size-box" key={availableSize}>
											{availableSize}
										</div>
									)
									}
								</div>
							</div>
							<div className="product-color">
								<div>
									<span>Cores</span>
								</div>
								<div ref={colorsRef}>
									{availableColors && availableColors.map(availableColor =>
										<div
											key={availableColor}
											onClick={(e) => selectColor(e, availableColor)}
											className={`product-color-box bg-${availableColor}`}>
										</div>
									)
									}
								</div>
							</div>
							<div className="product-social-media">
								<span>
									<a href="https://www.instagram.com/kimochism.store/" target="blank">
										Veja quem comprou esse,
										e outros produtos no nosso Instagram ;)
									</a>
								</span>
							</div>
							<div className="product-button">
								<button>Comprar</button>
							</div>
						</div>
					</div>
				</div>
			}
			<Footer />
		</Container>
	);
};

export default Product;
