import React from 'react';
import Menu from 'shared/Menu/Menu';
import Warning from 'components/Warning/Warning';
import Banner from 'components/Banner/Banner';
import Gallery from 'components/Gallery/Gallery';
import Footer from 'shared/Footer/Footer';
import { Container } from './styles';

const Home = () => {
	return (
		<Container>
				<Menu />
				<Warning message="Cupom de R$20 OFF em todo site! Utilize o cupom: KIMOOFF" />
				<Banner />
				<Gallery />
				<Footer />
		</Container>
	);
};

export default Home;
