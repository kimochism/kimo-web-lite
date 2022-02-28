import { AuthContext } from 'context/AuthContext';
import React, { useContext, useEffect, useState } from 'react';
import { Container } from './styles';
import useFallback from 'hooks/useFallback';
import PropTypes from 'prop-types';
import api from 'api/index';
import { useHistory, useRouteMatch } from 'react-router-dom';

const AddressView = ({ goBack, addressToEdit }) => {

	const [editable, setEditable] = useState(false);
	const [error, setError] = useState('');
	const [address, setAddress] = useState({
		id: '',
		zip_code: '',
		street: '',
		number: '',
		complement: '',
		district: '',
		city: '',
		state: '',
		reference: '',
		customer_id: '',
	});

	const { params } = useRouteMatch();

	const history = useHistory();

	const [fallback, showFallback, hideFallback] = useFallback();

	const { email } = useContext(AuthContext);

	useEffect(() => {
		if (addressToEdit._id) {
			setEditable(true);
			setAddress({
				id: addressToEdit._id,
				zip_code: addressToEdit.zip_code,
				street: addressToEdit.street,
				number: addressToEdit.number,
				complement: addressToEdit.complement,
				district: addressToEdit.district,
				city: addressToEdit.city,
				state: addressToEdit.state,
				reference: addressToEdit.reference,
				customer_id: addressToEdit.customer_id,
			});
		}
	}, [addressToEdit]);

	useEffect(() => {
		getCustomer();
	}, []);

	const getCustomer = async () => {

		showFallback();

		await api.users.showByEmail(email).then(async user => {
			await api.customers.showByUser(user._id).then(customer => {
				setAddress(prevAddress => ({ ...prevAddress, customer_id: customer._id }));
			});
		});

		hideFallback();
	};

	const onChange = async e => {
		setAddress({ ...address, [e.target.name]: e.target.value });
		if (e.target.name === 'zip_code') {
			if (e.target.value.length >= 8) {
				const {
					code: zip_code,
					address: street,
					district,
					city,
					state
				} = await api.addresses.postmon(e.target.value);

				setAddress({
					...address,
					zip_code,
					street,
					district,
					city,
					state
				});
			}
		}
	};

	const onSubmit = async () => {
		if (address.zip_code === '') {
			setError('O endereço precisa ter um CEP!');
			return;
		}
		if (address.street === '') {
			setError('O endereço precisa ter um logradouro');
			return;
		}
		if (address.number === '') {
			setError('O endereço precisa ter um número');
			return;
		}
		if (address.district === '') {
			setError('O endereço precisa ter um bairro');
			return;
		}
		if (address.city === '') {
			setError('O endereço precisa ter uma cidade');
			return;
		}
		if (address.state === '') {
			setError('O endereço precisa ter um estado');
			return;
		}

		showFallback();

		if (!editable) {
			await api.addresses.store(address)
				.then(() => params.return ? history.push('/customerbag') : goBack())
				.catch(error => {
					console.log(error);
					setError('Ocorreu um erro, tente novamente mais tarde');
				});
		}

		if (editable) {
			await api.addresses.update(address.id, address);
		}

		hideFallback();
	};

	return (
		<Container>
			<h1>{editable ? 'Editando o endereço' : 'Criando o endereço'}</h1>
			<div className='address-attention'>
				<label>Ajude-nos a enviar sua encomenda pro lugar certo!</label>
				<label>Verifique todos os campos antes de finalizar.</label>
			</div>
			<div className='address-form'>
				<input placeholder="CEP" name="zip_code" value={address.zip_code} onChange={e => onChange(e)} />
				<input placeholder="Número" name="number" value={address.number} onChange={e => onChange(e)} />
				<input className='address-input-long' placeholder="Logradouro" name="street" value={address.street} onChange={e => onChange(e)} />
				
				<input placeholder="Complemento" name="complement" value={address.complement} onChange={e => onChange(e)} />
				<input placeholder="Bairro" name="district" value={address.district} onChange={e => onChange(e)} />
				<input placeholder="Ponto de referência" name="reference" value={address.reference} onChange={e => onChange(e)} />
				<input placeholder="Cidade" name="city" value={address.city} onChange={e => onChange(e)} />
				<input placeholder="Estado" name="state" value={address.state} onChange={e => onChange(e)} />
			</div>
			<div className='address-actions'>
				<button onClick={() => goBack()}>Voltar</button>
				<button onClick={() => onSubmit()}>{editable ? 'Editar endereço' : 'Criar endereço'}</button>
				{error}
				{fallback}
				
			</div>
		</Container>
	);
};

AddressView.propTypes = {
	goBack: PropTypes.func.isRequired,
	addressToEdit: PropTypes.object,
};

export default AddressView;