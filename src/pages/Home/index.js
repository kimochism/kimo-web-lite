import React from 'react';

import Menu from 'shared/Menu';
import Warning from 'components/Warning';
import Banner from 'components/Banner';
import Gallery from 'components/Gallery/index';
import Footer from 'shared/Footer';

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
