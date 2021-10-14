import React, { useContext, useState } from 'react';
import { Container } from './styles';
import { BagIcon, UserIcon } from 'assets/icons';
import { Link, useHistory } from 'react-router-dom';
import UserContext from 'context/userContext';
import SignInUp from 'shared/Modal/SignInUp';
import { AuthContext } from 'context/AuthContext';

const Menu = () => {

	const { firstName } = useContext(UserContext);
	const { authenticated } = useContext(AuthContext);

	const [isOpen, setIsOpen] = useState(false);

	const history = useHistory();

	const redirectToProfile = () => {

		if (!authenticated) {
			setIsOpen(true);
			return;
		}

		history.push('/profile');
	};

	return (
		<Container>
			<div className="logo">
				<Link to='/'>
					<h1>KIMOCHISM <span>気持ち</span></h1>
				</Link>
			</div>
			<div className="options">
				<Link to='/'><span>Home</span></Link>
				<Link to='/catalog'><span>Loja</span></Link>
				<span>Moletons</span>
				<span>Camisetas</span>
				<span className="first-name" onClick={() => redirectToProfile()}>
					<div>{authenticated && firstName}</div>
					<img src={UserIcon} alt="Perfil" />
				</span>
				<Link to='/customerbag'>
					<span className="bag-customer">
						<img src={BagIcon} alt="Sacola" />
					</span>
				</Link>
				<SignInUp isOpen={isOpen} defaultIsSignIn={true} handleClose={() => { setIsOpen(false); }} />
			</div>

		</Container>

	);
};

export default Menu;
