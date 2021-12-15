import React, { useState } from 'react';
import { BarcodeIcon, PixIcon, MasterCardIcon } from 'assets/icons';

import { Container } from './styles';
import CreditCard from './CreditCard/index';
import { ArrowIcon } from 'assets/icons/index';
import PropTypes from 'prop-types';

const Payment = ({ orderAmount }) => {

	const options = {
		default: 'padrão',
		creditCard: 'cartão de crédito',
		ticket: 'boleto',
		pix: 'pix'
	};

	const [option, setOption] = useState(options.default);

	return (
		<Container>
			<div className="pay-with">
				<span>
					{ option === options.default ? 'Pagar' : 'Pagando' } com { option !== options.default ? option : '' }
				</span>

				{ option !== options.default && 
					<span className='change-payment-method' onClick={() => { setOption(options.default); }}>
						Alterar forma de pagamento &nbsp;
						<img src={ArrowIcon} alt="Seta direita" width="5px" />
					</span>
				}
			</div>

			{ option === options.default && 
				<>
					<div className="option-payment" onClick={() => setOption(options.ticket)}>
						<img src={BarcodeIcon} />
						<span>Boleto</span>
					</div>
					<div className="option-payment" onClick={() => setOption(options.creditCard)}>
						<img src={MasterCardIcon} />
						<span>Cartão de Crédito / Débito</span>
					</div>
					<div className="option-payment" onClick={() => setOption(options.pix)}>
						<img src={PixIcon} />
						<span>Pix</span>
					</div>
				</>
			}

			{ option === options.creditCard && <CreditCard orderAmount={orderAmount}/> }
		</Container>
	);
};

Payment.propTypes = {
	orderAmount: PropTypes.number.isRequired
};

export default Payment;
