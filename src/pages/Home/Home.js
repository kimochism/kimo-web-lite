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
			<Warning />
			<Banner />
			<Gallery />
			<Footer />
		</Container>
	);
};

export default Home;
