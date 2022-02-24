import React, { useContext, useEffect, useRef, useState } from 'react';
import { Container } from './styles';
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router';
import { AuthContext } from 'context/AuthContext';
import Footer from 'shared/Footer/Footer';
import Notification from 'shared/Notification/Notification';
import Menu from 'shared/Menu/Menu';
import useFallback from 'hooks/useFallback';
import api from 'api/index';
import * as ls from 'utils/localStorage';
import { LS_KEY_PRODUCT } from 'constants/all';

const Product = () => {

	const { id } = useParams();
	const { authenticated } = useContext(AuthContext);
	const history = useHistory();

	const [fallback, showFallback, hideFallback] = useFallback();

	const [defaultProduct, setDefaultProduct] = useState();
	const [product, setProduct] = useState();
	const [availableSizes, setAvailableSizes] = useState([]);
	const [availableColors, setAvailableColors] = useState([]);
	const [options, setOptions] = useState({
		color: {
			name: '',
			label: '',
		},
		size: '',
	});
	const [quantity, setQuantity] = useState(1);
	const [productAddedToCart, setProductAddedToCart] = useState(false);
	const [freight, setFreight] = useState();

	const sizesRef = useRef(null);
	const colorsRef = useRef(null);

	const [productsStoraged, setProductsStoraged] = useState(ls.getItem(LS_KEY_PRODUCT, 'products') || []);

	useEffect(() => {
		if (productsStoraged.products) {
			ls.storeItem(LS_KEY_PRODUCT, productsStoraged);
		}
	}, [productsStoraged]);

	useEffect(() => {
		getProduct();
	}, []);

	useEffect(() => {
		if (product && product.varieties) {
			setAvailableSizes(product.varieties.filter((item, index, self) => self.findIndex(variety => (variety.size === item.size)) === index).map(variety => variety.size));
			setAvailableColors(product.varieties.filter((item, index, self) => self.findIndex(variety => (variety.color.name === item.color.name)) === index).map(variety => variety.color));
		}
	}, [product]);

	const getProduct = async () => {

		showFallback();

		const data = await api.products.show(id);

		setProduct(data);
		setDefaultProduct(data);

		hideFallback();
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
		const sizes = defaultProduct.varieties.filter(filter => filter.color.name === color.name).map(variety => variety.size);

		setAvailableSizes(sizes);

		const { childNodes } = colorsRef.current;

		for (let child of childNodes) {
			child.classList.remove('selected-color');
		}

		setOptions({ ...options, color });
		e.currentTarget.classList.add('selected-color');
	};

	const addProductToBagStorage = () => {
		if (productsStoraged.length <= 0) {
			setProductsStoraged({ products: [{ id: product._id, quantity, options }] });
			return;
		}

		const allProductsStoraged = productsStoraged.products || productsStoraged;

		const productExistsInStorageIndex = allProductsStoraged.findIndex((productStoraged) => {
			return productStoraged.id === product._id &&
				productStoraged.options.color.name == options.color.name &&
				productStoraged.options.size == options.size;
		});

		if (productExistsInStorageIndex !== -1) {
			allProductsStoraged[productExistsInStorageIndex].quantity = allProductsStoraged[productExistsInStorageIndex].quantity + quantity;
			setProductsStoraged({ products: allProductsStoraged });
		}

		if (productExistsInStorageIndex === -1) setProductsStoraged({ products: allProductsStoraged.concat({ id: product._id, quantity, options }) });
	};

	const addProductToBag = () => {

		if (productAddedToCart) return;

		if (!options.size) {
			toast('Escolha um tamanho!', {
				hideProgressBar: true,
				position: toast.POSITION.TOP_CENTER,
			});
			return;
		}

		if (!options.color.name || !options.color.label) {
			toast('Escolha uma cor!', {
				hideProgressBar: true,
				position: toast.POSITION.TOP_CENTER,
			});
			return;
		}

		if (!authenticated) {
			addProductToBagStorage();
			productAddedToCartDelay();
			return;
		}

		const response = api.customerBags.store({
			product: product._id,
			quantity,
			options,
			email: localStorage.getItem('email')
		});

		if (response) {
			toast(<Notification history={history} options={options} />, {
				hideProgressBar: true,
				position: toast.POSITION.TOP_RIGHT,
			});
			productAddedToCartDelay();
		}

		if (!response) {
			toast('Erro ao adicionar produto ao carrinho, fale com a equipe de suporte', {
				hideProgressBar: true,
				position: toast.POSITION.TOP_RIGHT,
			});
		}
	};

	const productAddedToCartDelay = () => {
		setProductAddedToCart(true);
		setTimeout(() => {
			setProductAddedToCart(false);
		}, 3000);
	};

	const calculateZipCode = async (e) => {
		const data = {
			sCepOrigem: '08150020',
			sCepDestino: '08150080',
			nVlPeso: '0.2',
			nCdFormato: '1',
			nVlComprimento: '15',
			nVlAltura: '5',
			nVlLargura: '15',
			nCdServico: ['40010'],
			nVlDiametro: '0',
		};

		if (e.target.value.length >= 8) {
			const response = await api.freights.store(data);

			if (response[0].Valor) {
				setFreight(response[0].Valor);
			} else {
				setFreight('---');
			}
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
								<span>R$ {parseFloat(product.price).toFixed(2)}</span>
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
											key={availableColor.name}
											className="product-color-content"
											onClick={(e) => selectColor(e, availableColor)}>
											<div className={`product-color-box bg-${availableColor.name}`}></div>
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
									<button onClick={() => quantity <= 1 ? 1 : setQuantity(quantity - 1)}> - </button>
									<label>{quantity}</label>
									<button onClick={() => setQuantity(quantity + 1)}> + </button>
								</div>
							</div>
						</div>
						<div className="product-cep">
							<span>Calcule o seu Frete</span>
							<input placeholder="00000-000" onChange={e => calculateZipCode(e)} maxLength="8" />
							<a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="blank">Não sabe seu cep? Pesquise aqui &gt; </a>
							{(freight && freight !== 0) && <span>Taxa de entrega SEDEX: &nbsp; {freight}</span>}
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
							<button>{productAddedToCart ? 'Produto adicionado a sacola' : 'Adicionar a sacola'}</button>
						</div>
					</div>
				</div>
			}
			<Footer />
			{fallback}
		</Container>
	);
};

export default Product;
