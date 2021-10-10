import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { ProductService } from 'services/ProductService';
import Footer from 'shared/Footer';
import Menu from 'shared/Menu';
import { Container } from './styles';
import Notification from 'shared/Notification';
import { toast } from 'react-toastify';
import { CustomerBagService } from 'services/CustomerBagService';

const Product = () => {

	const { id } = useParams();
	const history = useHistory();
	const productService = new ProductService();
	const customerBagService = new CustomerBagService();

	const [defaultProduct, setDefaultProduct] = useState();
	const [product, setProduct] = useState();
	const [availableSizes, setAvailableSizes] = useState([]);
	const [availableColors, setAvailableColors] = useState([]);
	const [options, setOptions] = useState({
		color: '',
		size: '',
	});
	const [productAddedToCart, setProductAddedToCart] = useState(false);

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

	const addProductToBag = () => {

		if(productAddedToCart) {
			return;
		}

		if(!options.size) {
			toast('Escolha um tamanho!', {
				hideProgressBar: true,
				position: toast.POSITION.TOP_CENTER,
			});
			return;
		}

		if(!options.color) {
			toast('Escolha uma cor!', {
				hideProgressBar: true,
				position: toast.POSITION.TOP_CENTER,
			});
			return;
		}

		const response = customerBagService.store({
			product: product._id,
			quantity: 1,
			options,
			email: localStorage.getItem('email')
		});

		if(response) {
			toast(<Notification history={history} options={options} />, {
				hideProgressBar: true,
				position: toast.POSITION.TOP_RIGHT,
			});
			setProductAddedToCart(true);
		}

		if(!response) {
			toast('Erro ao adicionar produto ao carrinho, fale com a equipe de suporte', {
				hideProgressBar: true,
				position: toast.POSITION.TOP_RIGHT,
			});
		}
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
											className="product-color-content"
											onClick={(e) => selectColor(e, availableColor)}>
											<div className={`product-color-box bg-${availableColor}`}></div>
										</div>
									)
									}
								</div>
							</div>
							<div className="product-quantity">
								<div>
									<span>Quantidade</span>
								</div>
								<div>
									<button> - </button>
									<label> 1 </label>
									<button> + </button>
								</div>
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
						<div onClick={() => addProductToBag()} className="product-button">
							<button>{ productAddedToCart ? 'Produto adicionado a sacola' : 'Adicionar a sacola'}</button>
						</div>
					</div>
				</div>
			}
			<Footer />
		</Container>
	);
};

export default Product;
