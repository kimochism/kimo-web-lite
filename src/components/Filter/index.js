import React from 'react';
import { Container } from './styles';
import { SearchIcon } from 'assets/icons';

const Filter = () => {
	return(
		<Container>
			<span className="container-filter-name">Filtro</span>
			<div className="filter-search">
				<input type="text" placeholder="Oni Demon"></input>
				<button>
					<img src={SearchIcon} width="16px" alt="Lupa de busca"/>
				</button>
			</div>
			<div className="filter">
				<div className="item-filter">
					<input type="checkbox" className="input-filter"/>
					<span>Camisetas</span>
				</div>
				<div className="item-filter">
					<input type="checkbox" className="input-filter"/>
					<span>Moletons</span>
				</div>
				<div className="item-filter">
					<input type="checkbox" className="input-filter"/>
					<span>Acessórios</span>
				</div>
				<div className="item-filter">
					<input type="checkbox" className="input-filter"/>
					<span>Canecas</span>
				</div>
				<div className="item-filter">
					<input type="checkbox" className="input-filter"/>
					<span>Diversos</span>
				</div>
				<div className="item-filter">
					<input type="checkbox" className="input-filter"/>
					<span>Outros</span>
				</div>
			</div>
		</Container>
	);
};

export default Filter;