
import React from 'react';
import { EditIconBlack } from '../../../assets/icons/index';
import { Container } from './styles';
import PropTypes from 'prop-types';

const Address = ( { handleClick } ) => {
	return (
		<Container>
			<div>
				{/* card de endereço */}
				<div className='container-address-card'>
					<div className='container-left-address-card'>
						<p>
							<span>Rua José Pessota, 593</span>
							<span>Parque Santa Rita</span>
							<span>CEP: 08150-020</span>
							<span>São Paulo - SP</span>
						</p>
					</div>
					<div className='container-right-address-card'>
						<div>X</div>
						<div>
							<img src={EditIconBlack} />
						</div>
					</div>
				</div>
				{/* fim card endereço */}

				<div className='add-new-address' onClick={()=>handleClick()}>
					<button>Adicionar novo endereço</button>
				</div>
			</div>
		</Container>
	);
};

Address.propTypes = {
	handleClick: PropTypes.func.isRequired
};

export default Address;