import React from 'react';
import { Container } from './styles';
import { SearchIcon } from 'assets/icons';

const Filter = () => {
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

				<div className="item-filter">
					<div className="checkbox-wrapper">
						<input type="checkbox" id="camiseta" hidden />
						<label htmlFor="camiseta" className="checkmark"></label>
					</div>
					<span>Camisetas</span>
				</div>

				<div className="item-filter">
					<div className="checkbox-wrapper">
						<input type="checkbox" id="moletom" hidden />
						<label htmlFor="moletom" className="checkmark"></label>
					</div>
					<span>Moletons</span>
				</div>

				<div className="item-filter">
					<div className="checkbox-wrapper">
						<input type="checkbox" id="acessorios" hidden />
						<label htmlFor="acessorios" className="checkmark"></label>
					</div>
					<span>Acessórios</span>
				</div>

				<div className="item-filter">
					<div className="checkbox-wrapper">
						<input type="checkbox" id="canecas" hidden />
						<label htmlFor="canecas" className="checkmark"></label>
					</div>
					<span>Canecas</span>
				</div>

				<div className="item-filter">
					<div className="checkbox-wrapper">
						<input type="checkbox" id="diversos" hidden />
						<label htmlFor="diversos" className="checkmark"></label>
					</div>
					<span>Diversos</span>
				</div>

				<div className="item-filter">
					<div className="checkbox-wrapper">
						<input type="checkbox" id="outros" hidden />
						<label htmlFor="outros" className="checkmark"></label>
					</div>
					<span>Outros</span>
				</div>

			</div>
		</Container>
	);
};

export default Filter;