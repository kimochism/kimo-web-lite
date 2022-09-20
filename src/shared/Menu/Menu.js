import { BagIcon, CatalogIcon, CloseIcon, CollectionsIcon, HomeIcon, UserIcon } from 'assets/icons';
import { MenuHamburger, SearchIcon } from 'assets/icons/index';
import { AuthContext } from 'context/AuthContext';
import { MenuContext } from 'context/MenuContext';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SignInUp from 'shared/Modal/SignInUp/SignInUp';
import { Container, SubHeader } from './styles';

const Menu = () => {

    const history = useHistory();

    const { firstName, authenticated } = useContext(AuthContext);

    const { isOpen, setIsOpen } = useContext(MenuContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const isMobile = window.screen.width < 768;

    const [options] = useState([
        { name: 'Home', icon: HomeIcon, navigateTo: '/' },
        { name: 'Catálogo', icon: CatalogIcon, navigateTo: '/catalog' },
        { name: 'Coleções', icon: CollectionsIcon, navigateTo: '/collections' },
        { name: firstName || 'Entre ou cadastre-se', icon: UserIcon, navigateTo: '/profile' },
        { name: 'Sacola', icon: BagIcon, navigateTo: '/customerBag' },
    ]);

    const navigateTo = (route) => {

        if (route === '/profile' && !authenticated) {
            setModalIsOpen(true);
            return;
        }

        isMobile && setIsOpen(false);

        history.push(route);
    };

    useEffect(() => {
        !isMobile && setIsOpen(true);
    }, [window.screen.width]);
    
    const SubHeaderComponent = () => {
        return (
            <SubHeader>
                <Link to='/'>
                    <h1>KIMOCHISM</h1>
                </Link>

                <div className="actions">
                    <div className="left-side">
                        <img src={MenuHamburger} onClick={() => setIsOpen(true)} />
                    </div>
                    <div className="right-side">
                        <img src={SearchIcon} />
                        <img src={BagIcon} className="invert" onClick={() => navigateTo('/customerBag')} />
                    </div>
                </div>
            </SubHeader>
        );
    };

    return <>
        {isOpen &&
            <Container>
                <div className="header">
                    <Link to='/'>
                        <h1>KIMOCHISM</h1>
                    </Link>

                    <img src={CloseIcon} onClick={() => setIsOpen(false)} />
                </div>
                <ul className="content">
                    {options.map(option => <li key={option.name} onClick={() => navigateTo(option.navigateTo)}>
                        <img src={option.icon}></img>
                        <span>{option.name}</span>
                    </li>)}
                </ul>
                <div className="footer">Kimochism {new Date().getFullYear()} &copy;</div>

                <SignInUp isOpen={modalIsOpen} handleClose={() => setModalIsOpen(false)} defaultIsSignIn />
            </Container>
        }
        {!isOpen && <SubHeaderComponent />}
    </>;
};

export default Menu;