import React, { useContext, useState } from 'react';
import { Container } from './styles';
import { BagIcon, UserIcon } from 'assets/icons';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from 'context/AuthContext';
import SignInUp from 'shared/Modal/SignInUp/SignInUp';

const Menu = () => {

	const { firstName, authenticated } = useContext(AuthContext);

	const [isOpen, setIsOpen] = useState(false);

	const history = useHistory();

	const redirectToProfile = () => {

		if (!authenticated) {
			setIsOpen(true);
			return;
		}

		if (authenticated) {
			history.push('/profile');
		}
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
				<Link to='/catalog'><span>Catálogo</span></Link>
				<span>Coleções</span>
				<span className="first-name" onClick={() => redirectToProfile()}>
					<div>{authenticated ? firstName : 'Entre  ⠀ou⠀ cadastre-se ⠀'}</div>
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
