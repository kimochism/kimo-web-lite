import React, { useEffect, useState } from 'react';
import Menu from 'shared/Menu/Menu';
import Footer from 'shared/Footer/Footer';
import Filter from 'components/Filter/Filter';
import Product from 'components/Product/Product';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import useFallback from 'hooks/useFallback';
import api from 'api/index';

const Catalog = () => {

	const [fallback, showFallback, hideFallback] = useFallback();


	const [products, setProducts] = useState([]);
	const [options, setOptions] = useState({
		offset: 0,
		limit: 8,
		total: 0
	});
	const [availablePages, setAvailablePages] = useState(0);
	const [filters, setFilters] = useState({});

	useEffect(() => {
		getProducts();
	}, [options]);

	const getProducts = async () => {

		showFallback();
		const { data, total } = await api.products.list(options);

		setProducts(data);

		if (options.total !== total) {
			setOptions({ ...options, total });
		}

		setAvailablePages(options.total / options.limit);

		hideFallback();
	};

	useEffect(() => {
		if(Object.keys(filters).length) {
			// console.log(filters);
		}
	}, [filters]);

	const getFilters = async filters => {
		setFilters(filters);
	};

	const buttonPages = () => {

		let buttons = [];
		let pages = (availablePages % 2) !== 0 ? parseInt(availablePages + 1) : availablePages;

		for (let i = 1; i <= pages; i++) {
			buttons.push(
				<button
					key={i}
					style={i === 1 ? { color: 'white', background: 'black' } : {}}
					onClick={(e) => {

						window.scrollTo({
							top: 0,
							behavior: 'smooth'
						});
						
						// removing style before adding in selected button
						const allButtons = document.querySelector('.pages-buttons');

						allButtons.childNodes.forEach(button => {
							button.style.background = 'white';
							button.style.color = 'black';
						});

						setOptions({ ...options, offset: (options.limit * (i - 1)) });
						
						e.currentTarget.style.background = 'black';
						e.currentTarget.style.color = 'white';
					}}>
					{i}
				</button>
			);
		}

		return buttons;
	};


	return (
		<Container>
			<Menu />
			
			<div className="container-catalog">
				<div className="container-catalog-left">
					<Filter handleGetFilters={filters => getFilters(filters) }/>
				</div>
				<div className="aux-cont">
				<h1 className="title-catalog">Catálogo</h1>
					<div className="container-catalog-right">
						{products && products.map(product => {
							return (
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

			<Footer />
			{fallback}
		</Container>
	);
};

export default Catalog;
