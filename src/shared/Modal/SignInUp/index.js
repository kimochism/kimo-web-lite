import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BaseModal from '../BaseModal';
import { Container } from './styles';
import { UserService } from 'services/UserService';
import { CustomerService } from 'services/CustomerService';
import useFallback from 'hooks/useFallback';

const SignInUp = ({ isOpen, handleClose, defaultIsSignIn }) => {

	useEffect(() => {
		if (defaultIsSignIn) {
			setIsSignIn(defaultIsSignIn);
		}
	}, [defaultIsSignIn]);

	const [fallback, showFallback, hideFallback] = useFallback();

	const customerService = new CustomerService();
	const userService = new UserService();

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

	const doLogin = async () => {

		if (!login.email && !login.password) {
			setError('Preencha todos os campos');
			return;
		}

		if (!login.email) {
			setError('Insira um email');
			return;
		}

		if (!login.password) {
			setError('Insira uma senha');
			return;
		}

		showFallback();
		await userService.auth({ email: login.email, password: login.password }).then( async response => {

			localStorage.setItem('authorization', response.access_token);
			localStorage.setItem('email', login.email);
			const user = await userService.showByEmail(login.email);
			const customer = await customerService.showByUser(user._id);
			localStorage.setItem('firstName', customer.full_name.split(' ')[0]);

			const urlToReload = window.location.href;
			window.location.href = urlToReload;
		}).catch(error => {
			if (error.response && error.response.status === 401) {
				setError('Email e/ou senha inválido');
			}

			setError('Erro inesperado, tente novamente mais tarde');
		});

		hideFallback();
	};

	const doRegister = async () => {

		if (!register.name) {
			setError('Por favor insira um nome');
			return;
		}

		if (!register.email) {
			setError('Por favor insira um email.');
			return;
		}

		if (!register.phone) {
			setError('Por favor insira um telegone');
			return;
		}

		if (!register.password) {
			setError('Por favor insira uma senha');
			return;
		}

		if (!register.confirmPassword) {
			setError('Por favor confirme sua senha');
			return;
		}

		if (register.password !== register.confirmPassword) {
			setError('Senhas não conferem');
			return;
		}

		showFallback();

		const { _id: id, email } = await userService.store({
			email: register.email,
			password: register.password
		});

		if (id) {

			await customerService.store({
				full_name: register.name,
				document: register.document,
				cell_phone_number: register.phone,
				user_id: id
			});

			const { access_token } = await userService.auth({ email, password: register.password });

			localStorage.setItem('authorization', access_token);
			localStorage.setItem('email', register.email);

			const urlToReload = window.location.href;
			window.location.href = urlToReload;

			hideFallback();

		}

	};

	return (
		<BaseModal
			isOpen={isOpen}
			handleClose={handleClose}
			withBorder={true}
			isTopScreen={isTopScreen}
		>
			<Container error={error} isSignIn={isSignIn}>
				{isSignIn &&
					<div className="content">
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
						<p>Ainda não possui conta? <span className="sign-up" onClick={() => { setIsSignIn(false); setIsTopScreen(true); }}>Cadastre-se</span></p>
					</div>
				}

				{!isSignIn &&
					<div className="content">
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
							<input
								type="document"
								name="document"
								placeholder="000.000.000-00"
								value={register.document}
								onChange={e => onChange(e)}
							/>
						</div>
						<div>
							<label>Telefone</label>
							<input
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
						<p>Já possui conta? <span className="sign-up" onClick={() => { setIsSignIn(true); setIsTopScreen(false); }}>Entre agora mesmo.</span></p>
					</div>
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
