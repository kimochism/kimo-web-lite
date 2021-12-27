import { AuthContext } from 'context/AuthContext';
import React, { useContext, useEffect, useState } from 'react';
import { Container } from './styles';
import useFallback from 'hooks/useFallback';
import PropTypes from 'prop-types';
import api from 'api/index';

const CreatingAddress = ({ goBack }) => {

	const [error, setError] = useState('');
	const [address, setAddress] = useState({
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

	const [fallback, showFallback, hideFallback] = useFallback();

	const { email } = useContext(AuthContext);

	useEffect(() => {
		getCustomer();
	}, []);

	const getCustomer = async () => {

		showFallback();

		await api.users.showByEmail(email).then(async user => {
			await api.customers.showByUser(user._id).then(customer => {
				setAddress({ ...address, customer_id: customer._id });
			});
		});

		hideFallback();
	};

	const handleChangeZipCode = async e => {
		if (e.target.value.length >= 8) {
			// const response = await api.addresses.postmon(e.target.value);

			const response = {
				'bairro': 'Parque Santa Rita',
				'cidade': 'São Paulo',
				'logradouro': 'Rua Otoniel Marques Teixeira',
				'estado_info': {
					'area_km2': '248.221,996',
					'codigo_ibge': '35',
					'nome': 'São Paulo'
				},
				'cep': '08150080',
				'cidade_info': {
					'area_km2': '1521,11',
					'codigo_ibge': '3550308'
				},
				'estado': 'SP'
			};

			setAddress({
				...address,
				zip_code: response.cep,
				street: response.logradouro,
				district: response.bairro,
				city: response.cidade,
				state: response.estado
			});
		}
	};

	const onChange = e => {
		setAddress({ ...address, [e.target.name]: e.target.value });
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
		await api.addresses.store(address)
			.then(() => goBack())
			.catch(error => {
				console.log(error);
				setError('Ocorreu um erro, tente novamente mais tarde');
			});
		hideFallback();
	};

	return (
		<Container>
			<div>
				<h1>Criando o endereço</h1>
				<input placeholder="CEP" name="zip_code" onChange={e => handleChangeZipCode(e)} />
				<input placeholder="Logradouro" name="street" value={address.street} onChange={e => onChange(e)} />
				<input placeholder="Número" name="number" value={address.number} onChange={e => onChange(e)} />
				<input placeholder="Complemento" name="complement" value={address.complement} onChange={e => onChange(e)} />
				<input placeholder="Bairro" name="district" value={address.district} onChange={e => onChange(e)} />
				<input placeholder="Ponto de refeência" name="reference" value={address.reference} onChange={e => onChange(e)} />
				<input placeholder="Cidade" name="city" value={address.city} onChange={e => onChange(e)} />
				<input placeholder="Estado" name="state" value={address.state} onChange={e => onChange(e)} />
				<button onClick={() => onSubmit()}>Criar endereço</button>
				{error}
				{fallback}
				<span onClick={() => goBack()}>Voltar</span>
			</div>
		</Container>
	);
};

CreatingAddress.propTypes = {
	goBack: PropTypes.func.isRequired
};

export default CreatingAddress;