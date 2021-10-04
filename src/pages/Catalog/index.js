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
	const [options, setOptions] = useState({
		offset: 0,
		limit: 6,
		total: 0
	});

	const [availablePages, setAvailablePages] = useState(0);

	useEffect(() => {
		getProducts();
	}, [options]);

	const getProducts = async () => {

		
		const { data, total } = await productService.list(options);

		setProducts(data);

		if(options.total !== total) {
			setOptions({...options, total });
		} 

		setAvailablePages(options.total / options.limit);
	};

	const buttonPages = () => {

		let buttons = [];
		let pages = (availablePages % 2) !== 0 ? parseInt(availablePages+1) : availablePages;
		for(let i = 1; i <= pages; i++) {
			buttons.push(<button onClick={() => setOptions({ ...options, offset: i-1 })}>{i}</button>);
		}

		return buttons;
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
					</div>
					<div className="pages-buttons">
						{buttonPages()}
					</div>
				</div>
			</div>

			<Footer/>
		</Container>
	);
};

export default Catalog;
