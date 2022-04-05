import Warning from 'components/Warning/Warning';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from 'shared/Footer/Footer';
import Menu from 'shared/Menu/Menu';
import Newsletter from 'shared/Newsletter/Newsletter';
import { Container } from './styles';

const Collections = () => {
	return (
		<Container>
            <Menu/>
			<Warning message="Cupom de R$20 OFF em todo site! Utilize o cupom: KIMOOFF" />
            <h1 className="collections-h1">Coleções</h1>
            <div className="container-collections">
                <Link to="/catalog">
                    <div className="box-collection">
                        <div className="hoverEffect"></div>
                        <span>Coleção Kimochism</span>
                        <img src="https://i.pinimg.com/564x/51/29/fd/5129fd69824ccff358a25f1375485459.jpg"/>
                    </div>
                </Link>
                <Link to="/catalog">
                <div className="box-collection">
                    <div className="hoverEffect"></div>
                    <span>Coleção Anime</span>
                    <img src="https://i.pinimg.com/564x/6f/11/af/6f11af08681291f1a4073919af8bd7b5.jpg"/>
                </div>
                </Link>
                <Link to="/catalog">
                <div className="box-collection">
                    <div className="hoverEffect"></div>
                    <span>Coleção Aesthetic</span>
                    <img src="https://i.pinimg.com/564x/2b/0e/5b/2b0e5b5e17ab2bb8606fb021fcc31666.jpg"/>
                </div>
                </Link>
                <Link to="/catalog">
                <div className="box-collection">
                    <div className="hoverEffect"></div>
                    <span>Coleção Eboy</span>
                    <img src="https://i.pinimg.com/564x/fa/93/bf/fa93bfc841a915dbe33b5ba93d611ec5.jpg"/>
                </div>
                </Link>
            </div>
            <Newsletter/>
            <Footer/>

		</Container>
	);
};

export default Collections;
