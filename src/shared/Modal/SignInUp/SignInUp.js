import React, { useContext, useEffect, useState } from 'react';
import { Container } from './styles';
import { AuthContext } from 'context/AuthContext';
import { useHistory } from 'react-router';
import { cpf } from 'cpf-cnpj-validator';
import { LS_KEY_CUSTOMER_BAG } from 'constants/all';
import BaseModal from '../BaseModal/BaseModal';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import useFallback from 'hooks/useFallback';
import api from 'api/index';
import * as ls from 'utils/localStorage';

const SignInUp = ({ isOpen, handleClose, defaultIsSignIn }) => {

	useEffect(() => {
		if (defaultIsSignIn) {
			setIsSignIn(defaultIsSignIn);
		}
	}, [defaultIsSignIn]);

	const { handleLogin } = useContext(AuthContext);

	const history = useHistory();

	const [fallback, showFallback, hideFallback] = useFallback();

	const [isSignIn, setIsSignIn] = useState(defaultIsSignIn);
	const [isTopScreen, setIsTopScreen] = useState(false);
	const [error, setError] = useState('');
	const [login, setLogin] = useState({
		email: '',
		password: '',
	});
	const [register, setRegister] = useState({
		name: '',
		email: '',
		document: '',
		phone: '',
		password: '',
		confirmPassword: ''
	});

	const onChange = e => {
		setRegister({ ...register, [e.target.name]: e.target.value });
	};

	const doLogin = async (e) => {

		e.preventDefault();

		if (!validateLoginFields()) return;

		showFallback();
		const response = await handleLogin(login.email, login.password);

		const customerBagsStored = ls.getItem(LS_KEY_CUSTOMER_BAG, 'customerBags') || [];

		if (customerBagsStored.length) {
			customerBagsStored.map(async ({ options, quantity, productId }) => {
				await api.customerBags.store({
					product: productId,
					quantity,
					options,
					email: login.email
				});
			});
			ls.removeItem(LS_KEY_CUSTOMER_BAG, 'customerBags');
		}

		if (response && response.success) history.push('/profile/account');

		if (response && !response.success) {
			setError(response.message);
		}
		hideFallback();
	};

	const doRegister = async (e) => {

		e.preventDefault();
		setError('');
		if (!validateRegisterFields()) return;
		showFallback();

		await api.users.showByEmail(register.email)
			.then(async user => {
				return storeCustomer(user._id);
			}).catch(async () => {
				await api.users.store({
					email: register.email,
					password: register.password
				}).then(async user => {
					return storeCustomer(user._id);
				}).catch(error => {
					// 409 - conflict code
					if (error.response && error.response.status === 406) {
						hideFallback();
						setError(error.response.data.error);
					}
				});
			});

		hideFallback();
	};

	const validateLoginFields = () => {

		if (!login.email && !login.password) {
			setError('Preencha todos os campos');
			return false;
		}

		if (!login.email) {
			setError('Insira um email');
			return false;
		}

		if (!login.password) {
			setError('Insira uma senha');
			return false;
		}

		return true;
	};

	const validateRegisterFields = () => {
		const validateEmail = (email) => {
			const re = /\S+@\S+\.\S+/;
			return re.test(email);
		};

		const validatePhoneNumber = (phone) => {
			const re = /^\((?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/g;
			return re.test(phone);
		};

		if (!register.name) {
			setError('Por favor insira um nome');
			return false;
		}

		if (!register.email) {
			setError('Por favor insira um email.');
			return false;
		}

		if (!validateEmail(register.email)) {
			setError('Por favor, insira um email válido');
			return false;
		}

		if (!register.document) {
			setError('Por favor insira o CPF');
			return false;
		}

		if (!cpf.isValid(register.document)) {
			setError('Por favor insira um CPF válido');
			return false;
		}

		if (!register.phone) {
			setError('Por favor insira um tefelone');
			return false;
		}

		if (!validatePhoneNumber(register.phone)) {
			setError('Por favor insira um tefelone válido');
			return false;
		}

		if (!register.password) {
			setError('Por favor insira uma senha');
			return false;
		}

		if (!register.confirmPassword) {
			setError('Por favor confirme sua senha');
			return false;
		}

		if (register.password !== register.confirmPassword) {
			setError('Senhas não conferem');
			return false;
		}

		if (register.password.length < 6 || register.password.length < 6) {
			setError('Senha precisa ter ao menos 6 caracteres');
			return false;
		}

		return true;
	};

	const storeCustomer = async userId => {

		await api.customers.store({
			full_name: register.name,
			document: register.document,
			cell_phone_number: register.phone,
			user_id: userId
		}).then(async () => {

			const response = await handleLogin(register.email, register.password);

			if (response && response.success) history.push('/profile/account');
			hideFallback();
		}).catch(error => {

			// 409 - conflict code
			if (error.response && error.response.status === 406) {
				hideFallback();
				setError(error.response.data.message);
			}
		});
	};

	return (
		<BaseModal
			isOpen={isOpen}
			handleClose={handleClose}
			withBorder
			isTopScreen={isTopScreen}
			requestClose
		>
			<Container error={error} isSignIn={isSignIn}>
				{isSignIn &&
					<form className="content" onSubmit={e => doLogin(e)}>
						<div>
							<label>Email</label>
							<input
								type="email"
								name="email"
								placeholder="kimochism@exemplo.com"
								value={login.email}
								onChange={e => setLogin({ ...login, email: e.target.value })}
							/>
						</div>
						<div>
							<label>Senha</label>
							<input
								type="password"
								placeholder="Senha"
								value={login.password}
								onChange={e => setLogin({ ...login, password: e.target.value })}
							/>
						</div>
						<div className="product-button">
							<button onClick={doLogin}>Entrar</button>
						</div>
						{error &&
							<div className="errorMessage">
								{error}
							</div>
						}
						<p>Ainda não possui conta?
							<span
								className="sign-up"
								onClick={() => {
									setIsSignIn(false);
									setIsTopScreen(true);
									setError('');
								}}>
								&nbsp;Cadastre-se
							</span>
						</p>
					</form>
				}

				{!isSignIn &&
					<form className="content" onSubmit={e => doRegister(e)}>
						<div>
							<label>Nome completo</label>
							<input
								type="text"
								name="name"
								placeholder="Seu nome completo	"
								value={register.name}
								onChange={e => onChange(e)}
							/>
						</div>
						<div>
							<label>Email</label>
							<input
								type="email"
								name="email"
								placeholder="kimochism@exemplo.com"
								value={register.email}
								onChange={e => onChange(e)}
							/>
						</div>
						<div>
							<label>Documento (CPF)</label>
							<InputMask
								mask="999.999.999-99"
								maskChar={null}
								type="document"
								name="document"
								placeholder="000.000.000-00"
								value={register.document}
								onChange={e => onChange(e)} />
						</div>
						<div>
							<label>Celular</label>
							<InputMask
								mask="(99) 99999-9999"
								maskChar={null}
								type="phone"
								name="phone"
								placeholder="(11) 99999-9999"
								value={register.phone}
								onChange={e => onChange(e)}
							/>
						</div>
						<div>
							<label>Senha</label>
							<input
								type="password"
								name="password"
								placeholder="Senha"
								value={register.password}
								onChange={e => onChange(e)}
							/>
						</div>
						<div>
							<label>Confirme sua senha</label>
							<input
								type="password"
								name="confirmPassword"
								placeholder="Confirme sua senha"
								value={register.confirmPassword}
								onChange={e => onChange(e)}
							/>
						</div>
						<div className="product-button">
							<button onClick={doRegister}>Cadastrar</button>
						</div>
						{error &&
							<div className="errorMessage">
								{error}
							</div>
						}
						<p>Já possui conta?
							<span
								className="sign-up"
								onClick={() => {
									setIsSignIn(true);
									setIsTopScreen(false);
									setError('');
								}}>
								&nbsp;Entre agora mesmo.
							</span>
						</p>
					</form>
				}
			</Container>
			{fallback}
		</BaseModal>
	);
};

SignInUp.propTypes = {
	isOpen: PropTypes.bool,
	handleClose: PropTypes.func,
	defaultIsSignIn: PropTypes.bool
};

export default SignInUp;
