
import React, { useContext, useEffect, useState } from 'react';
import { EditIconBlack } from '../../../assets/icons/index';
import { Container } from './styles';
import { AddressService } from 'services/AddressService';
import { UserService } from 'services/UserService';
import { CustomerService } from 'services/CustomerService';
import PropTypes from 'prop-types';
import useFallback from 'hooks/useFallback';
import { AuthContext } from 'context/AuthContext';

const Address = ({ handleClick }) => {

	const [addresses, setAddresses] = useState([]);

	const { email } = useContext(AuthContext);

	const [fallback, showFallback, hideFallback] = useFallback();

	const addressService = new AddressService();
	const userService = new UserService();
	const customerService = new CustomerService();

	useEffect(() => {
		getAddresses();
	}, []);

	const getAddresses = async () => {

		showFallback();

		await userService.showByEmail(email).then(async user => {
			await customerService.showByUser(user._id).then(async customer => {
				await addressService.listByCustomer(customer._id).then(addresses => setAddresses(addresses));
			});
		});

		hideFallback();
	};
	return (
		<Container>
			<div>
				{/* card de endereço */}
				{addresses && addresses.map(address => {
					return (
						<div className='container-address-card' key={address._id}>
							<div className='container-left-address-card'>
								<p>
									<span>{address.street}, {address.number}</span>
									<span>{address.district}</span>
									<span>CEP: {address.zip_code}</span>
									<span>{address.city} - {address.state}</span>
								</p>
							</div>
							<div className='container-right-address-card'>
								<div>X</div>
								<div>
									<img src={EditIconBlack} />
								</div>
							</div>
						</div>
					);
				})}

				{/* fim card endereço */}

				<div className='add-new-address' onClick={() => handleClick()}>
					<button>Adicionar novo endereço</button>
				</div>
			</div>
			{fallback}
		</Container>
	);
};

Address.propTypes = {
	handleClick: PropTypes.func.isRequired
};

export default Address;