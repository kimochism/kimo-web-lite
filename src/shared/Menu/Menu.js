import React, { useContext, useState } from 'react';
import { Container } from './styles';
import { BagIcon, UserIcon, MenuHamburger } from 'assets/icons';
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
			history.push('/profile/account');
		}
	};
	var mobileV = false;
	
	function mobile() {
		mobileV = !mobileV;
		if(mobileV){
			document.getElementById('options-web').style.display = 'flex' ;
		}else{
			document.getElementById('options-web').style.display = 'none' ;
		}
	}

	return (
		<Container>
			<div className="logo">
				<Link to='/'>
					<h1>KIMOCHISM <span>気持ち</span></h1>
				</Link>
			</div>
			<div className="options-mobile">
				<img src={MenuHamburger} alt="Menu" onClick={mobile} />
			</div>
			<div className="options" id="options-web">
				<Link to='/'>
					<span>Home</span>
				</Link>
				<Link to='/catalog'>
					<span>Catálogo</span>
				</Link>
				<Link to='/collections'>
					<span>Coleções</span>
				</Link>
				<a to='/profile'>
					<span className="first-name" onClick={() => redirectToProfile()}>
						<div>{authenticated ? firstName : 'Entre  ⠀ou⠀ Cadastre-se ⠀'}</div>
						<img src={UserIcon} alt="Perfil" />
					</span>
				</a>
				<Link to='/customerbag'>
					<span className="bag-customer">
						<div>Sacola</div>
						<img src={BagIcon} alt="Sacola" />
					</span>
				</Link>
				<SignInUp isOpen={isOpen} defaultIsSignIn={true} handleClose={() => { setIsOpen(false); }} />
			</div>

		</Container>

	);
};

export default Menu;
