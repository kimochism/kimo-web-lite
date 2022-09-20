import React from 'react';
// import Menu from 'shared/Menu/Menu';
import Menu2 from 'shared/Menu2/Menu2';
import Warning from 'components/Warning/Warning';
import Banner from 'components/Banner/Banner';
import Gallery from 'components/Gallery/Gallery';
import Footer from 'shared/Footer/Footer';
import { Container } from './styles';
import Newsletter from 'shared/Newsletter/Newsletter';

const Home = () => {
	return (
		<Container>
				{/* <Menu /> */}
				<Menu2 />
				<Warning message="Cupom de R$20 OFF em todo site! Utilize o cupom: KIMOOFF" />
				<Banner />
				<Gallery />
				<Newsletter/>
				<Footer />
		</Container>
	);
};

export default Home;
