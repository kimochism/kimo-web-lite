import React from 'react';
import Banner from 'components/Banner';
import Footer from 'shared/Footer';
import Menu from 'shared/Menu';
import Warning from 'components/Warning';

import { Container } from './styles';

const Home = () => {
	return (
		<Container>
			<Menu/>
			<Warning/>
			<Banner/>
			<Footer/>
		</Container>
	);
};

export default Home;
