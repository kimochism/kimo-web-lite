import React from 'react';
import Menu from 'shared/Menu/index';
import Footer from 'shared/Footer/index';
import Filter from '../../components/Filter/index';
import Product from '../../components/Product/index';
import { Container } from './styles';

const Catalog = () => {
	return (
		<Container>
			<Menu />

			<div className="container-catalog">

				<div className="container-catalog-left">
					<Filter/>
				</div>

				<div className="container-catalog-right">
					<Product/>
					<Product/>
					<Product/>
				</div>
			</div>
			<Footer/>
		</Container>
	);
};

export default Catalog;
