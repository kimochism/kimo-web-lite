import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { Link, useHistory } from 'react-router-dom';
import { MapPinIcon, ArrowIcon, BagIcon } from 'assets/icons';
import Menu from 'shared/Menu/Menu';
import Footer from 'shared/Footer/Footer';
import NoProducts from 'components/NoProducts/NoProducts';
import Payment from 'components/Payment/Payment';
import useFallback from 'hooks/useFallback';
import api from 'api/index';
import AddressSelector from 'shared/Modal/AddressSelector/AddressSelector';

const CustomerBag = () => {

	const email = localStorage.getItem('email');

	const history = useHistory();

	const [customerBags, setCustomerBags] = useState([]);
	const [totalAmount, setTotalAmount] = useState(0);
	const [productsAmount, setProductsAmount] = useState(0);
	const [freight, setFreight] = useState(0);
	const [mainAddress, setMainAddress] = useState();
	const [addressSelectorIsOpen, setAddressSelectorIsOpen] = useState(false);
	const [selectedAddress, setSelectedAddres] = useState();

	const [fallback, showFallback, hideFallback, loading] = useFallback();

	useEffect(() => {
		getCustomerBags();
	}, []);

	useEffect(() => {
		setTotalAmount(parseFloat(productsAmount) + parseFloat(freight));
	}, [customerBags, productsAmount, freight]);

	const getCustomerBags = async () => {
		
		showFallback();

		await getMainAddress();

		const data = await api.customerBags.listByEmail(email);

		setCustomerBags(data);

		setTotalAmount(parseFloat(productsAmount) + parseFloat(freight));
		setProductsAmount(data.reduce((accumulator, current) => {
			accumulator += parseFloat(current.product.price) * current.quantity;
			return accumulator;
		}, 0));

		hideFallback();
	};

	const changeQuantity = async (id, quantity) => {

		showFallback();

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

					if(addresses && addresses.length > 0) {
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

	if (customerBags.length === 0 && !loading) return (
		<>
			<Menu />
			<NoProducts />
			<Footer />
		</>
	);

	return (
		<Container>
			{customerBags.length !== 0 && !loading && <>
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
							{!mainAddress && !selectedAddress && <span onClick={() => history.push('profile/create-address/return')}>Criar endereço</span>}
						</div>

						<div className="customer-payment-options">
							<Payment orderAmount={totalAmount} description="Produtos"/>
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
								<div className="product-item" key={customerBag._id}>
									<img src={customerBag.product.images[0].url} />
									<div className="product-info">
										<span>{customerBag.product.name}</span>
										<span>Tamanho: {customerBag.options.size}</span>
										<span>Cor: {customerBag.options.color.label}</span>
										<div className="quantity-products">
											<div>
												<span>Quantidade: {customerBag.quantity}</span>
											</div>
											<div className="quantity-buttons">
												<button onClick={() => changeQuantity(customerBag._id, customerBag.quantity - 1)}> - </button>
												<label> {customerBag.quantity} </label>
												<button onClick={() => changeQuantity(customerBag._id, customerBag.quantity + 1)}> + </button>
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
			</>
			}
			<AddressSelector
				isOpen={addressSelectorIsOpen}
				handleClose={() => setAddressSelectorIsOpen(false)}
				onSelected={address => {setSelectedAddres(address); setMainAddress(undefined); calculateZipCode(address.zip_code);}}/>
			{fallback}
		</Container>
	);
};

export default CustomerBag;
