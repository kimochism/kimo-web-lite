import React from 'react';
import { Container } from './styles';

const CreatingAddress = () => {
	return (
		<Container>
			<div>
				<h1>Criando o endereço</h1>
				<input placeholder="Cep"/>
				<input placeholder="Rua"/>
				<input placeholder="Numero"/>
				<input placeholder="Complemento"/>
				<input placeholder="Bairro"/>
				<input placeholder="Ponto de referencia"/>
				<input placeholder="Cidade"/>
				<input placeholder="Estado"/>
			</div>
		</Container>
	);
};

export default CreatingAddress;