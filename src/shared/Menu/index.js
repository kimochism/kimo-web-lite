import React from 'react';
import { Container } from './styles';
import { BagIcon, UserIcon } from 'assets/icons';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<Container>
			<div className="logo">
				<h1>KIMOCHISM 気持ち</h1>
			</div>
			<div className="options">
				<Link to='/product'><span>Home</span></Link>
				<span>Loja</span>
				<span>Informações</span>
				<span>
					<img src={UserIcon}/>
				</span>
				<span>
					<img src={BagIcon}/>
				</span>
			</div>
            
		</Container>

	);
};

export default Menu;
