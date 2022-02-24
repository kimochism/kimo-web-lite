import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { SearchIcon } from 'assets/icons';
import PropTypes from 'prop-types';

const Filter = ({ handleGetFilters }) => {

	const [filters, setFilters] = useState({
		tshirt: false,
		sweatshirt: false,
		accessorie: false,
		mug: false,
		divers: false,
		others: false
	});

	const handleOnChange = (event) => {
		setFilters({ ...filters, [event.target.name]: event.target.checked });
	};

	useEffect(() => {
		handleGetFilters(filters);
	}, [filters]);

	return (
		<Container>
			<span className="container-filter-name">Filtro</span>
			<div className="filter-search">
				<input type="text" placeholder="Oni Demon"></input>
				<button>
					<img src={SearchIcon} width="16px" alt="Lupa de busca" />
				</button>
			</div>
			<div className="filter">
				<label className="item-filter" htmlFor="camiseta">
					<div className="checkbox-wrapper">
						<input type="checkbox" id="camiseta" name="tshirt" hidden onChange={event => handleOnChange(event)} />
						<label htmlFor="camiseta" className="checkmark"></label>
					</div>
					<label className="title-filter-item" htmlFor="camiseta">Camiseta</label>
				</label>

				<label className="item-filter" htmlFor="moletom">
					<div className="checkbox-wrapper">
						<input type="checkbox" id="moletom" name="sweatshirt" hidden onChange={event => handleOnChange(event)} />
						<label htmlFor="moletom" className="checkmark"></label>
					</div>
					<label className="title-filter-item" htmlFor="moletom">Moletom</label>
				</label>

				<label className="item-filter" htmlFor="acessorios">
					<div className="checkbox-wrapper">
						<input type="checkbox" id="acessorios" name="accessorie" hidden onChange={event => handleOnChange(event)} />
						<label htmlFor="acessorios" className="checkmark"></label>
					</div>
					<label className="title-filter-item" htmlFor="acessorios">Acessório</label>
				</label>

				<label className="item-filter" htmlFor="canecas">
					<div className="checkbox-wrapper">
						<input type="checkbox" id="canecas" name="mug" hidden onChange={event => handleOnChange(event)} />
						<label htmlFor="canecas" className="checkmark"></label>
					</div>
					<label className="title-filter-item" htmlFor="canecas">Caneca</label>
				</label>

				<label className="item-filter" htmlFor="diversos">
					<div className="checkbox-wrapper">
						<input type="checkbox" id="diversos" name="divers" hidden onChange={event => handleOnChange(event)} />
						<label htmlFor="diversos" className="checkmark"></label>
					</div>
					<label className="title-filter-item" htmlFor="diversos">Diversos</label>
				</label>

				<label className="item-filter" htmlFor="outros">
					<div className="checkbox-wrapper">
						<input type="checkbox" id="outros" name="others" hidden onChange={event => handleOnChange(event)} />
						<label htmlFor="outros" className="checkmark"></label>
					</div>
					<label className="title-filter-item" htmlFor="outros">Outros</label>
				</label>

			</div>
		</Container>
	);
};

Filter.propTypes = {
	handleGetFilters: PropTypes.func.isRequired,
};

export default Filter;