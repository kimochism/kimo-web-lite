import React, { useEffect, useState } from 'react';
import Menu from 'shared/Menu';
import Footer from 'shared/Footer';
import Filter from 'components/Filter';
import Product from 'components/Product';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { ProductService } from 'services/ProductService';

const Catalog = () => {

	const productService = new ProductService();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = async () => {
		const { data } = await productService.list();

		setProducts(data);
	};

	return (
		<Container>
			<Menu />
			<div className="container-catalog">
				<div className="container-catalog-left">
					<Filter/>
				</div>
				<div className="aux-cont">
					<div className="container-catalog-right">
						{products && products.map(product => {
							return(
								<Link to={`/product/${product._id}`} key={product._id} >
									<Product product={product} />
								</Link>
							);
						})}
						{/* <Link to="/product"><Product/></Link> */}
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
