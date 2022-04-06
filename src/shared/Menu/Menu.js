import React, { useContext, useState } from 'react';
import { Container } from './styles';
import { BagIcon, UserIcon, MenuHamburger, SearchIcon, CatalogIcon, CollectionsIcon, HomeIcon } from 'assets/icons';
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
	window.addEventListener('resize', function () {
		var largura = window.innerWidth;
		if (largura > 1380) {
			document.getElementById('options-web').style.display = 'flex' ;
		}else if ( largura < 1380){
			document.getElementById('options-web').style.display = 'none' ;
		}
	});

	return (
		<Container>
			<div className="logo">
				<Link to='/'>
					<h1>KIMOCHISM <span>気持ち</span></h1>
				</Link>
			</div>
			<div className="options-mobile">
				<div className="options-mobile-left">
					<img src={MenuHamburger} alt="Menu" onClick={mobile} />
				</div>
				<div className="options-mobile-right">
					<img className="option-search" src={SearchIcon} alt="Search" />
					<Link to='/customerbag'>
						<img src={BagIcon} alt="Sacola" />
					</Link>
				</div>
			</div>
			<div className="options" id="options-web">
				<Link to='/'>
					<span className='option-generic'>
						<div>Home</div>
						<img src={HomeIcon} alt="Home" />
					</span>
				</Link>
				<Link to='/catalog'>
					<span className='option-generic'>
						<div>Catálogo</div>
						<img src={CatalogIcon} alt="Catalogo" />
					</span>
				</Link>
				<Link to='/collections'>
					<span className='option-generic'>
						<div>Coleções</div>
						<img src={CollectionsIcon} alt="Coleções" />
					</span>
				</Link>
				<Link to='/profile'>
					<span className="option-generic opt-desktop" onClick={() => redirectToProfile()}>
						<div>{authenticated ? firstName : 'Entre  ⠀ou⠀ Cadastre-se ⠀'}</div>
						<img src={UserIcon} alt="Perfil" />
					</span>
				</Link>
				<Link to='/customerbag'>
					<span className="option-generic opt-desktop" onClick={() => redirectToProfile()}>
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
