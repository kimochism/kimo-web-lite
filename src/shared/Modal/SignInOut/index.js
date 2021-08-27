import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BaseModal from '../BaseModal';
import { Container } from './styles';
import { UserService } from 'services/UserService';
import { CustomerService } from 'services/CustomerService';

const SignInOut = ({ isOpen, handleClose, defaultIsSignIn }) => {

	useEffect(() => {
		if (defaultIsSignIn) {
			setIsSignIn(defaultIsSignIn);
		}
	}, [defaultIsSignIn]);

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
		phone: '',
		password: '',
		confirmPassword: ''
	});

	const onChange = e => {

		setRegister({ ...register, [e.target.name]: e.target.value });
	};

	const doLogin = async () => {

		if(!login.email && !login.password) {
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

		await userService.auth({ email: login.email, password: login.password }).then(response => {

			localStorage.setItem('Authorization', response.access_token);
			localStorage.setItem('email', login.email);

			const urlToReload = window.location.href;
			window.location.href = urlToReload;
		}).catch(error => {
			if (error.response || error.response.status === 401) {
				setError('Email e/ou senha inválido');
			}
		});


	};

	const doRegister = async () => {


		console.log(register);

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

		const { _id: id, email } = await userService.store({
			email: register.email,
			password: register.password
		});

		if (id) {

			const { access_token } = await userService.auth({ email, password: register.password });

			localStorage.setItem('Authorization', access_token);

			await customerService.store({
				full_name: register.name,
				cell_phone_number: register.phone,
				user_id: id
			});

			localStorage.setItem('email', email);

			const urlToReload = window.location.href;
			window.location.href = urlToReload;

		}

	};

	return (
		<BaseModal
			isOpen={isOpen}
			handleClose={handleClose}
			withBorder={true}
			isTopScreen={isTopScreen}
		>
			<Container>
				{isSignIn &&
					<div className="content">
						<div>
							<label>Email</label>
							<input
								type="email"
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
							<label>Nome</label>
							<input
								type="text"
								name="name"
								placeholder="Seu nome"
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
							<div>
								{error}
							</div>
						}
						<p>Já possui conta? <span className="sign-up" onClick={() => { setIsSignIn(true); setIsTopScreen(false); }}>Entre agora mesmo.</span></p>
					</div>
				}


			</Container>
		</BaseModal>
	);
};

SignInOut.propTypes = {
	isOpen: PropTypes.bool,
	handleClose: PropTypes.func,
	defaultIsSignIn: PropTypes.bool
};

export default SignInOut;
