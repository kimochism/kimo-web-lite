import React, { useContext, useEffect, useState } from 'react';
import Menu from 'shared/Menu';
import { ArrowIcon, CheckedIcon } from 'assets/icons';
import { Container } from './styles';
import Footer from 'shared/Footer';
import { useHistory } from 'react-router-dom';
import { UserService } from 'services/UserService';
import { CustomerService } from 'services/CustomerService';
import { EditIconBlack, EditIconWhite } from 'assets/icons';
import InputMask from 'react-input-mask';
import { AuthContext } from 'context/AuthContext';
import { Redirect } from 'react-router';
import useFallback from 'hooks/useFallback';

const Profile = () => {

	const { emailVerified, email, authenticated, handleLogout } = useContext(AuthContext);
	
	const [fallback, showFallback, hideFallback] = useFallback();
	
	const history = useHistory();

	const userService = new UserService();
	const customerService = new CustomerService();

	const [isEditable, setIsEditable] = useState(false);
	const [customer, setCustomer] = useState({
		id: '',
		full_name: '',
		firstName: '',
		lastName: '',
		document: '',
		cell_phone_number: '',
	});
	const [defaultCustomer, setDefaultCustomer] = useState();
	const [user, setUser] = useState({
		email: '',
	});

	useEffect(() => {
		if(email) {
			getData();
		}
	}, [email]);

	const getData = async () => {

		showFallback();

		const foundUser = await userService.showByEmail(email);

		if (foundUser) {

			setUser({ ...user, email: foundUser.email });

			const foundCustomer = await customerService.showByUser(foundUser._id);

			if (foundCustomer) {

				let names = foundCustomer ? foundCustomer.full_name.split(' ') : [];

				setCustomer({
					id: foundCustomer._id,
					full_name: foundCustomer.full_name,
					firstName: names[0],
					lastName: names[names.length - 1],
					document: foundCustomer.document,
					cell_phone_number: foundCustomer.cell_phone_number
				});

				setDefaultCustomer({
					id: foundCustomer._id,
					full_name: foundCustomer.full_name,
					firstName: names[0],
					lastName: names[names.length - 1],
					document: foundCustomer.document,
					cell_phone_number: foundCustomer.cell_phone_number
				});

				hideFallback();
			}
		}
	};

	const onChange = e => {
		setCustomer({ ...customer, [e.target.name]: e.target.value });
	};

	const updateCustomer = async () => {
		if (customer.firstName !== defaultCustomer.firstName ||
			customer.lastName !== defaultCustomer.lastName ||
			customer.cell_phone_number !== defaultCustomer.cell_phone_number) {
			
			let full_name = defaultCustomer.full_name.split(' ');

			full_name[0] = customer.firstName;
			full_name[full_name.length-1] = customer.lastName;

			full_name = full_name.join(' ');

			const customerUpdated = await customerService.update(customer.id, {
				full_name,
				cell_phone_number: customer.cell_phone_number
			});

			if(customerUpdated) {
				setIsEditable(false);
			}
		}
	};
 
	if(!authenticated) return <Redirect to="/" />;

	if(!emailVerified) return <Redirect to="/confirmEmail" />;
	
	return (
		<>
			{(user && customer) &&
				<Container>
					<Menu />
					<div className="container-profile">
						<div className="profile-left">
							<div className="profile-btn-option">
								<button>
									<span>Conta</span>
									<img src={ArrowIcon} />
								</button>
								<button>
									<span>Endereços</span>
									<img src={ArrowIcon} />
								</button>
								{/* <button>
									<span>Notificações</span>
									<img src={ArrowIcon} />
								</button> */}
								{/* <button>
									<span>Privacidade</span>
									<img src={ArrowIcon} />
								</button> */}
								{/* <button>
									<span>Suporte</span>
									<img src={ArrowIcon} />
								</button> */}
								{/* <button>
									<span>Sobre</span>
									<img src={ArrowIcon} />
								</button> */}
								<button onClick={() => { handleLogout(); history.push('/'); }}>
									<span>Sair</span>
									<img src={ArrowIcon} />
								</button>
							</div>
						</div>
						<div className="profile-right">
							<div className="profile-picture-and-name">
								<div className="profile-picture"></div>
								<span>
									{customer.full_name}
								</span>
							</div>
							<div className="profile-account-form">
								<div>
									<div>
										<label>Nome</label>
										<input
											type="text"
											name="firstName"
											placeholder='Nome'
											value={customer.firstName}
											onChange={e => onChange(e)}
											disabled={!isEditable} />
									</div>
									<div>
										<label>Sobrenome</label>
										<input
											type="text"
											name="lastName"
											placeholder="Sobrenome"
											onChange={e => onChange(e)}
											value={customer.lastName}
											disabled={!isEditable} />
									</div>
								</div>
								<div className="profile-input-is-not">
									<label>Email</label>
									<div className="input-with-icon input-disabled">
										<input
											type="email"
											placeholder={user.email}
											value={user.email}
											disabled />
										<img src={EditIconBlack} onClick={() => history.push('/editEmail')}/>
									</div>
								</div>
								<div>
									<div>
										<label>Celular</label>
										<InputMask
											mask="(99) 99999-9999"
											maskChar={null}
											type="text"
											name="cell_phone_number"
											placeholder="Celular"
											onChange={e => onChange(e)}
											value={customer.cell_phone_number}
											disabled={!isEditable} />
									</div>
									<div>
										<label>CPF</label>
										<InputMask
											mask="999.999.999-99"
											maskChar={null}
											type="document"
											name="document"
											className="input-disabled"
											value={customer.document}
											placeholder={customer.document}
											disabled />
									</div>
								</div>
							</div>

							<button onClick={() => {
								if (!isEditable) {
									setIsEditable(true);
									return;
								}

								if (isEditable) {
									updateCustomer();
								}
							}}>
								{isEditable ? <img src={CheckedIcon} /> : <img src={EditIconWhite} />}
							</button>
						</div>
					</div>
					<Footer />
				</Container>
			}
			{fallback}
		</>
	);
};

export default Profile;
