import React from 'react';
import Banner from 'components/Banner';
import Footer from 'shared/Footer';
import Menu from 'shared/Menu';

import { Container } from './styles';

const Home = () => {
	return (
		<Container>
			<Menu/>
			<Banner/>
			<Footer/>
		</Container>
	);
};

export default Home;
