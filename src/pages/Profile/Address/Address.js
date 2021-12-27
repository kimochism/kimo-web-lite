
import React, { useContext, useEffect, useState } from 'react';
import { EditIconBlack } from '../../../assets/icons/index';
import { Container } from './styles';
import PropTypes from 'prop-types';
import useFallback from 'hooks/useFallback';
import { AuthContext } from 'context/AuthContext';
import api from 'api/index';

const Address = ({ handleClick }) => {

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
				await api.listByCustomer(customer._id).then(addresses => setAddresses(addresses));
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