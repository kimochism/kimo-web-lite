import { BagIcon, CatalogIcon, CloseIcon, CollectionsIcon, HomeIcon, UserIcon } from 'assets/icons/index';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Menu2 = () => {
    return <Container>
        <div className="header">
			<Link to='/'>
				<h1>KIMOCHISM</h1>
			</Link>

            <img src={CloseIcon} />
		</div>
        <ul>
            <li>
                <img src={HomeIcon}></img>
                <span>
                Home
                </span>
            </li>
            <li>
                <img src={CatalogIcon}></img>
                <span>
                Catálogo
                </span>
            </li>
            <li>
                <img src={CollectionsIcon}></img>
                <span>
                Coleções
                </span>
            </li>
            <li>
                <img src={UserIcon}></img>
                <span>
                Entre ou cadastre-se
                </span>
            </li>
            <li>
                <img src={BagIcon}></img>
                <span>
                Sacola
                </span>
            </li>
            
        </ul>
    </Container>;
};

export default Menu2;