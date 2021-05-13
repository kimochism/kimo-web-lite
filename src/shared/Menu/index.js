import React from 'react';
import { Container } from './styles';
import { BagIcon, UserIcon } from 'assets/icons';
import { Link } from 'react-router-dom';

const Menu = () => {
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
				<span>Informações</span>
				<span>
					<img src={UserIcon}/>
				</span>
				<Link to='/product'>
					<span>
						<img src={BagIcon}/>
					</span>
				</Link>
			</div>
            
		</Container>

	);
};

export default Menu;
