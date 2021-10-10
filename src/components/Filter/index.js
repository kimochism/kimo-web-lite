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

				<label className="item-filter" htmlFor="camiseta">
					<div className="checkbox-wrapper">
						<input type="checkbox" id="camiseta" hidden />
						<label htmlFor="camiseta" className="checkmark"></label>
					</div>
					<label className="title-filter-item" htmlFor="camiseta">Camisetas</label>
				</label>

				<label className="item-filter" htmlFor="moletom">
					<div className="checkbox-wrapper">
						<input type="checkbox" id="moletom" hidden />
						<label htmlFor="moletom" className="checkmark"></label>
					</div>
					<label className="title-filter-item" htmlFor="moletom">Moletom</label>
				</label>
				
				<label className="item-filter" htmlFor="acessorios">
					<div className="checkbox-wrapper">
						<input type="checkbox" id="acessorios" hidden />
						<label htmlFor="acessorios" className="checkmark"></label>
					</div>
					<label className="title-filter-item" htmlFor="acessorios">Acessórios</label>
				</label>
				
				<label className="item-filter" htmlFor="canecas">
					<div className="checkbox-wrapper">
						<input type="checkbox" id="canecas" hidden />
						<label htmlFor="canecas" className="checkmark"></label>
					</div>
					<label className="title-filter-item" htmlFor="canecas">Canecas</label>
				</label>
				
				<label className="item-filter" htmlFor="diversos">
					<div className="checkbox-wrapper">
						<input type="checkbox" id="diversos" hidden />
						<label htmlFor="diversos" className="checkmark"></label>
					</div>
					<label className="title-filter-item" htmlFor="diversos">Diversos</label>
				</label>
				
				<label className="item-filter" htmlFor="outros">
					<div className="checkbox-wrapper">
						<input type="checkbox" id="outros" hidden />
						<label htmlFor="outros" className="checkmark"></label>
					</div>
					<label className="title-filter-item" htmlFor="outros">Outros</label>
				</label>

			</div>
		</Container>
	);
};

export default Filter;