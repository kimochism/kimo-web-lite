import { AuthContext } from 'context/AuthContext';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import NotificationError from 'shared/NotificationError/NotificationError';
import { Container } from './styles';
import useFallback from 'hooks/useFallback';
import PropTypes from 'prop-types';
import api from 'api/index';
import { useHistory, useRouteMatch } from 'react-router-dom';

const AddressView = ({ goBack, addressToEdit }) => {

	const [editable, setEditable] = useState(false);
	const [error] = useState('');
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
			toast(<NotificationError errorMessage='O endereço precisa ter um CEP!' />, {
				hideProgressBar: true,
				position: toast.POSITION.BOTTOM_RIGHT,
			});
			return;
		}
		if (address.street === '') {
			toast(<NotificationError errorMessage='O endereço precisa ter um logradouro' />, {
				hideProgressBar: true,
				position: toast.POSITION.BOTTOM_RIGHT,
			});
			return;
		}
		if (address.number === '') {
			toast(<NotificationError errorMessage='O endereço precisa ter um número' />, {
				hideProgressBar: true,
				position: toast.POSITION.BOTTOM_RIGHT,
			});
			return;
		}
		if (address.district === '') {
			toast(<NotificationError errorMessage='O endereço precisa ter um bairro' />, {
				hideProgressBar: true,
				position: toast.POSITION.BOTTOM_RIGHT,
			});
			return;
		}
		if (address.city === '') {
			toast(<NotificationError errorMessage='O endereço precisa ter uma cidade' />, {
				hideProgressBar: true,
				position: toast.POSITION.BOTTOM_RIGHT,
			});
			return;
		}
		if (address.state === '') {
			toast(<NotificationError errorMessage='O endereço precisa ter um estado' />, {
				hideProgressBar: true,
				position: toast.POSITION.BOTTOM_RIGHT,
			});
			return;
		}

		showFallback();

		if (!editable) {
			await api.addresses.store(address)
				.then(() => params.return ? history.push('/customerbag') : goBack())
				.catch(error => {
					console.log(error);
					toast(<NotificationError errorMessage='Ocorreu um erro, tente novamente mais tarde' />, {
						hideProgressBar: true,
						position: toast.POSITION.BOTTOM_RIGHT,
					});
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
				<input placeholder="Cidade" name="city" value={address.city} onChange={e => onChange(e)} />
				<select id="estado" name="state" value={address.state}>
					<option value="">Selecione um estado</option>
					<option value="AC">Acre</option>
					<option value="AL">Alagoas</option>
					<option value="AP">Amapá</option>
					<option value="AM">Amazonas</option>
					<option value="BA">Bahia</option>
					<option value="CE">Ceará</option>
					<option value="DF">Distrito Federal</option>
					<option value="ES">Espírito Santo</option>
					<option value="GO">Goiás</option>
					<option value="MA">Maranhão</option>
					<option value="MT">Mato Grosso</option>
					<option value="MS">Mato Grosso do Sul</option>
					<option value="MG">Minas Gerais</option>
					<option value="PA">Pará</option>
					<option value="PB">Paraíba</option>
					<option value="PR">Paraná</option>
					<option value="PE">Pernambuco</option>
					<option value="PI">Piauí</option>
					<option value="RJ">Rio de Janeiro</option>
					<option value="RN">Rio Grande do Norte</option>
					<option value="RS">Rio Grande do Sul</option>
					<option value="RO">Rondônia</option>
					<option value="RR">Roraima</option>
					<option value="SC">Santa Catarina</option>
					<option value="SP">São Paulo</option>
					<option value="SE">Sergipe</option>
					<option value="TO">Tocantins</option>
					<option value="EX">Estrangeiro</option>
				</select>
				<input placeholder="Ponto de referência" name="reference" value={address.reference} onChange={e => onChange(e)} />
			</div>
			<div className='address-actions'>
				<button onClick={() => goBack()}>Voltar</button>
				<button onClick={() => onSubmit()}>{editable ? 'Editar endereço' : 'Criar endereço'}</button>
			</div>
			<div className='address-fallback'>
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