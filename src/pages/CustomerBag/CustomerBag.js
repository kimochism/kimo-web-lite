import React, { useContext, useEffect, useState } from 'react';
import { Container } from './styles';
import { Link, useHistory } from 'react-router-dom';
import { MapPinIcon, ArrowIcon, BagIcon } from 'assets/icons';
import { AuthContext } from 'context/AuthContext';
import { LS_KEY_PRODUCT } from 'constants/all';
import * as ls from 'utils/localStorage';
import Menu from 'shared/Menu/Menu';
import Footer from 'shared/Footer/Footer';
import NoProducts from 'components/NoProducts/NoProducts';
import Payment from 'components/Payment/Payment';
import useFallback from 'hooks/useFallback';
import api from 'api/index';
import AddressSelector from 'shared/Modal/AddressSelector/AddressSelector';
import SignInUp from 'shared/Modal/SignInUp/SignInUp';

const CustomerBag = () => {

	const email = localStorage.getItem('email');

	const { authenticated } = useContext(AuthContext);
	const [fallback, showFallback, hideFallback, loading] = useFallback();

	const history = useHistory();

	const [customerBags, setCustomerBags] = useState([]);
	const [productsStoraged,] = useState(ls.getItem(LS_KEY_PRODUCT, 'products') || []);
	const [totalAmount, setTotalAmount] = useState(0);
	const [productsAmount, setProductsAmount] = useState(0);
	const [freight, setFreight] = useState(0);
	const [mainAddress, setMainAddress] = useState();
	const [addressSelectorIsOpen, setAddressSelectorIsOpen] = useState(false);
	const [selectedAddress, setSelectedAddres] = useState();

	const [showSignInUp, setShowSignInUp] = useState(false);

	useEffect(() => {
		authenticated ? getCustomerBags() : getProducts();
	}, []);

	// useEffect(() => {
	// 	if (productsStoraged.products) {
	// 		ls.storeItem(LS_KEY_PRODUCT, productsStoraged);
	// 	}
	// }, [productsStoraged]);

	useEffect(() => {
		setTotalAmount(parseFloat(productsAmount) + parseFloat(freight));
		calculateProductsAmount(customerBags);
	}, [customerBags, productsAmount, freight]);

	const getProducts = async () => {
		showFallback();

		productsStoraged.map(async ({ id, options, quantity }) => {
			const { name, images, price } = await api.products.show(id);

			const customerBagToAdd = {
				id,
				options,
				quantity,
				product: {
					name,
					firstImage: images[0].url,
					price
				}
			};

			setCustomerBags(customerBags => [...customerBags, customerBagToAdd]);
		});

		hideFallback();
	};

	const getCustomerBags = async () => {

		showFallback();

		await getMainAddress();

		const data = await api.customerBags.listByEmail(email);

		setCustomerBags(data.map(({ _id: id, options, quantity, product: { name, images, price } }) => ({
			id,
			options,
			quantity,
			product: {
				name,
				firstImage: images[0].url,
				price
			}
		})));

		calculateProductsAmount(customerBags);

		hideFallback();
	};

	const calculateProductsAmount = (customerBags) => {

		setTotalAmount(parseFloat(productsAmount) + parseFloat(freight));
		setProductsAmount(customerBags.reduce((accumulator, current) => {
			accumulator += parseFloat(current.product.price) * current.quantity;
			return accumulator;
		}, 0));
	};

	const changeQuantity = async (id, quantity) => {

		showFallback();

		if(!authenticated) {
			setCustomerBags(customerBags => [...customerBags, customerBags.map(customerBag => customerBag.id === id ? {...customerBag, quantity } : customerBag )]);
			return;
		}

		if (quantity === 0) {
			await api.customerBags.destroy(id);
			getCustomerBags();
			hideFallback();
			return;
		}

		await api.customerBags.update(id, { quantity });
		getCustomerBags();

		hideFallback();
	};

	const getMainAddress = async () => {
		await api.users.showByEmail(email).then(async user => {
			await api.customers.showByUser(user._id).then(async customer => {
				await api.addresses.listByCustomer(customer._id).then(addresses => {

					if (addresses && addresses.length > 0) {
						setMainAddress(addresses[0]);
						calculateZipCode(addresses[0].zip_code);
					}
				});
			});
		});
	};

	const calculateZipCode = async zipCode => {

		const data = {
			sCepOrigem: '08150020',
			sCepDestino: zipCode,
			nVlPeso: '0.2',
			nCdFormato: '1',
			nVlComprimento: '15',
			nVlAltura: '5',
			nVlLargura: '15',
			nCdServico: ['40010'],
			nVlDiametro: '0',
		};

		const response = await api.freights.store(data);

		if (response[0].Valor) {
			setFreight(response[0].Valor);
		}
	};

	if (productsStoraged.length === 0 && customerBags.length === 0 && !loading) return (
		<>
			<Menu />
			<NoProducts />
			<Footer />
		</>
	);

	return (
		<Container>
			{((productsStoraged.length || customerBags.length) && !loading) && <>
				<div className="customer-bag-left">
					<div className="logo">
						<Link to='/'>
							<h1>KIMOCHISM <span>気持ち</span></h1>
						</Link>
					</div>
					<div className="customer-bag-container-infos">
						<div className="customer-address">
							{mainAddress &&
								<>
									<span>
										Entregar em
									</span>
									<span>
										<img className="pin" src={MapPinIcon} alt="Localização" width="18px" />
										&nbsp;{mainAddress.street}, {mainAddress.number}, {mainAddress.city} - {mainAddress.state}
									</span>
									<span onClick={() => setAddressSelectorIsOpen(true)}>
										Usar outro endereço &nbsp;
										<img src={ArrowIcon} alt="Perfil" width="5px" />
									</span>
								</>
							}
							{selectedAddress &&
								<>
									<span>
										Entregar em
									</span>
									<span>
										<img className="pin" src={MapPinIcon} alt="Localização" width="18px" />
										&nbsp;{selectedAddress.street}, {selectedAddress.number}, {selectedAddress.city} - {selectedAddress.state}
									</span>
									<span onClick={() => setAddressSelectorIsOpen(true)}>
										Usar outro endereço &nbsp;
										<img src={ArrowIcon} alt="Perfil" width="5px" />
									</span>
								</>
							}
							{!mainAddress && !selectedAddress &&
								<span
									className="create-address"
									onClick={() => !authenticated ? setShowSignInUp(true) : history.push('profile/create-address/return')}>
									Criar endereço
								</span>
							}
						</div>

						<div className="customer-payment-options">
							<Payment orderAmount={totalAmount} description="Produtos" />
						</div>

						<div className="come-back">
							<Link to="/catalog">
								<img src={ArrowIcon} alt="Perfil" width="5px" />
								<span>Continuar comprando</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="customer-bag-right">

					<div className="header-products">
						<img src={BagIcon} />
						<span>Sua sacola</span>
					</div>

					{/* lista de produtos */}
					<div className="list-products">
						{customerBags && customerBags.map(customerBag => {
							return (
								<div className="product-item" key={customerBag.id}>
									<img src={customerBag.product.firstImage} />
									<div className="product-info">
										<span>{customerBag.product.name}</span>
										<span>Tamanho: {customerBag.options.size}</span>
										<span>Cor: {customerBag.options.color.label}</span>
										<div className="quantity-products">
											<div>
												<span>Quantidade: {customerBag.quantity}</span>
											</div>
											<div className="quantity-buttons">
												<button onClick={() => authenticated ? changeQuantity(customerBag.id, customerBag.quantity - 1) : {}}> - </button>
												<label> {customerBag.quantity} </label>
												<button onClick={() => authenticated ? changeQuantity(customerBag.id, customerBag.quantity + 1) : {}}> + </button>
											</div>
										</div>
										<span>Preço Unidade: R$ {parseFloat(customerBag.product.price).toFixed(2)}</span>
									</div>
								</div>
							);
						})}
					</div>
					{/* lista de produtos */}

					<div className="checkout-products">
						<div>
							<span>Total:</span>
							<span>R$ {parseFloat(totalAmount).toFixed(2)}</span>
						</div>
						<div>
							<span>Produtos:</span>
							<span>R$ {parseFloat(productsAmount).toFixed(2)}</span>
						</div>
						<div>
							<span>Frete:</span>
							<span>R$ {parseFloat(freight).toFixed(2)}</span>
						</div>
						{/* <button>Finalizar</button> */}
					</div>
				</div>
				{authenticated &&
					<AddressSelector
						isOpen={addressSelectorIsOpen}
						handleClose={() => setAddressSelectorIsOpen(false)}
						onSelected={address => { setSelectedAddres(address); setMainAddress(undefined); calculateZipCode(address.zip_code); }}
					/>
				}
			</>
			}
			{<SignInUp
				isOpen={showSignInUp}
				handleClose={() => setShowSignInUp(false)}
				defaultIsSignIn />
			}
			{fallback}
		</Container>
	);
};

export default CustomerBag;
