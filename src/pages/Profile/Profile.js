import React, { useContext, useEffect, useState } from 'react';
import { ArrowIcon } from 'assets/icons';
import { Container } from './styles';
import { useHistory } from 'react-router-dom';
import { AuthContext } from 'context/AuthContext';
import { Redirect } from 'react-router';
import { useRouteMatch } from 'react-router-dom';
import Menu from 'shared/Menu/Menu';
import Footer from 'shared/Footer/Footer';
import Account from './Account/Account';
import Address from './Address/Address';
import AddressView from './Address/AddressView/AddressView';
import useFallback from 'hooks/useFallback';
import Newsletter from 'shared/Newsletter/Newsletter';
import Warning from 'components/Warning/Warning';

const Profile = () => {

	const { authenticated, handleLogout } = useContext(AuthContext);

	const [fallback] = useFallback();

	const { params } = useRouteMatch();

	const history = useHistory();

	const options = [
		{ name: 'account', label: 'Conta', show: true },
		{ name: 'address', label: 'Endereços', show: true },
		{ name: 'orders', label: 'Pedidos', show: true },
		{ name: 'create-address', label: 'Criando Endereço', show: false },
	];

	const [currentOption, setCurrentOption] = useState(options[0].name);
	const [addressToEdit, setAddressToEdit] = useState({});

	useEffect(() => {
		options.map(opt => {
			if(opt.name === params.option){
				setCurrentOption(opt.name);
			}
		});
	}, []);

	if (!authenticated) return <Redirect to="/" />;

	return (
		<>
			<Container>
				<Menu />
				<Warning message="Cupom de R$20 OFF em todo site! Utilize o cupom: KIMOOFF" />
				<div className="container-profile">
					<div className="profile-left">
						<div className="profile-btn-option">
							{options.filter(option => option.show).map(option => {
								return <button key={option.name} onClick={() => {setCurrentOption(option.name); history.push(`/profile/${option.name}`);}}>
									<span>{option.label}</span>
									<img src={ArrowIcon} alt={option.label} />
								</button>;
							})}
							{/* <button>
								<span>Conta</span>
								<img src={ArrowIcon} />
							</button>
							<button>
								<span>Endereços</span>
								<img src={ArrowIcon} />
							</button> */}
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
						{currentOption === options[0].name && <Account />}
						{currentOption === options[1].name && 
							<Address
								handleCreateAddress={() => setCurrentOption(options[3].name)}
								handleEditAddress={address => {setCurrentOption(options[3].name); setAddressToEdit(address);}}
							/>
						}
						{/* { currentOption === options[2].name && <Orders /> } */}
						{currentOption === options[3].name && <AddressView goBack={() => setCurrentOption(options[1].name)} addressToEdit={addressToEdit}/>}
					</div>
				</div>
				<Newsletter/>
				<Footer />
			</Container>
			{fallback}
		</>
	);
};

export default Profile;
