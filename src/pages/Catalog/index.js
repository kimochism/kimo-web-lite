import React from 'react';
import Menu from 'shared/Menu/index';
import Footer from 'shared/Footer/index';
import Filter from '../../components/Filter/index';
import Product from '../../components/Product/index';
import { Container } from './styles';
import { Link } from 'react-router-dom';

const Catalog = () => {
	return (
		<Container>
			<Menu />
			<div className="container-catalog">
				<div className="container-catalog-left">
					<Filter/>
				</div>
				<div className="aux-cont">
					<div className="container-catalog-right">
						<Link to="/product"><Product/></Link>
						<Product/>
						<Product/>
						<Product/>
						<Product/>
						<Product/>
					</div>
					<div className="pages-buttons">
						<button>1</button>
						<button>2</button>
						<button>3</button>
						<span>...</span>
						<button>10</button>
					</div>
				</div>
			</div>

			<Footer/>
		</Container>
	);
};

export default Catalog;
