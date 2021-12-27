
import React, { useContext, useEffect, useState } from 'react';
import { EditIconBlack } from '../../../assets/icons/index';
import { Container } from './styles';
import PropTypes from 'prop-types';
import useFallback from 'hooks/useFallback';
import { AuthContext } from 'context/AuthContext';
import api from 'api/index';

const Address = ({ handleCreateAddress, handleEditAddress }) => {

	const [addresses, setAddresses] = useState([]);

	const { email } = useContext(AuthContext);

	const [fallback, showFallback, hideFallback] = useFallback();

	useEffect(() => {
		getAddresses();
	}, []);

	const getAddresses = async () => {

		showFallback();

		await api.users.showByEmail(email).then(async user => {
			await api.customers.showByUser(user._id).then(async customer => {
				await api.addresses.listByCustomer(customer._id).then(addresses => setAddresses(addresses));
			});
		});

		hideFallback();
	};

	const deleteAddress = async id => {
		await api.addresses.destroy(id).catch(error => console.log(error));
		await getAddresses();
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
								<div className='action' onClick={() => deleteAddress(address._id)}>X</div>
								<div className='action' onClick={() => handleEditAddress(address)}>
									<img src={EditIconBlack} />
								</div>
							</div>
						</div>
					);
				})}

				{/* fim card endereço */}

				<div className='add-new-address' onClick={() => handleCreateAddress()}>
					<button>Adicionar novo endereço</button>
				</div>
			</div>
			{fallback}
		</Container>
	);
};

Address.propTypes = {
	handleCreateAddress: PropTypes.func.isRequired,
	handleEditAddress: PropTypes.func.isRequired
};

export default Address;