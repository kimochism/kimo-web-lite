import React, { useContext, useState } from 'react';
import Menu from 'shared/Menu';
import { ArrowIcon } from 'assets/icons';
import { Container } from './styles';
import Footer from 'shared/Footer';
import { useHistory } from 'react-router-dom';
import { AuthContext } from 'context/AuthContext';
import { Redirect } from 'react-router';
import useFallback from 'hooks/useFallback';
import Account from './Account/index';
import Address from './Address';
import CreatingAddress from './Address/CreatingAddress';

const Profile = () => {

	const { authenticated, handleLogout } = useContext(AuthContext);
	
	const [fallback] = useFallback();
	const options = [
		{ name: 'account', label: 'Conta', show: true },
		{ name: 'address', label: 'Endereços', show: true },
		{ name: 'orders', label: 'Pedidos', show: true },
		{ name: 'create-address', label: 'Criando Endereço', show: false },
	];

	const [currentOption, setCurrentOption] = useState(options[0].name);
	
	const history = useHistory();

	if(!authenticated) return <Redirect to="/" />;
	
	return (
		<>
			<Container>
				<Menu />
				<div className="container-profile">
					<div className="profile-left">
						<div className="profile-btn-option">
							{ options.map(option => {
								return<>
									{
										option.show && <button key={option.name} onClick={() => setCurrentOption(option.name)}>
											<span>{option.label}</span>
											<img src={ArrowIcon} alt={option.label}/>
										</button>
									}
								</>;
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
						{ currentOption === options[0].name && <Account /> }
						{ currentOption === options[1].name && <Address handleClick={() => setCurrentOption(options[3].name)} /> }
						{/* { currentOption === options[2].name && <Orders /> } */}
						{ currentOption === options[3].name && <CreatingAddress goBack={() => setCurrentOption(options[1].name)}/> }
					</div>
				</div>
				<Footer />
			</Container>
			{fallback}
		</>
	);
};

export default Profile;
