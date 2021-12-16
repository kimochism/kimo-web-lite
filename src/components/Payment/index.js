import React, { useRef, useState } from 'react';
import { BarcodeIcon, PixIcon, MasterCardIcon } from 'assets/icons';

import { Container } from './styles';
import CreditCard from './CreditCard/index';
import { ArrowIcon } from 'assets/icons/index';
import PropTypes from 'prop-types';
import Pix from './Pix/index';

const Payment = ({ orderAmount }) => {

	const options = {
		default: 'padrão',
		creditCard: 'cartão de crédito',
		ticket: 'boleto',
		pix: 'pix'
	};

	const [option, setOption] = useState(options.default);
	const [pixModalIsOpen, setPixModalIsOpen] = useState(false);

	const paymentOptionsRef = useRef(null);

	const changeOption = (event, option) => {
		
		setOption(option);

		paymentOptionsRef.current.childNodes.forEach(paymentOption => {
			paymentOption.classList.remove('active');
		});

		event.target.classList.add('active');
	};

	const checkout = () => {
		if(option === options.pix) {
			setPixModalIsOpen(true);
		}
	};

	return (
		<Container>
			<div className="pay-with">
				<span>
					{ option === options.default ? 'Pagar' : 'Pagando' } com { option !== options.default ? option : '' }
				</span>

				{ option === options.creditCard && 
					<span className='change-payment-method' onClick={() => { setOption(options.default); }}>
						Alterar forma de pagamento &nbsp;
						<img src={ArrowIcon} alt="Seta direita" width="5px" />
					</span>
				}
			</div>

			{ option !== options.creditCard && 
				<div ref={paymentOptionsRef}>
					<div className="option-payment" onClick={(event) => changeOption(event, options.ticket)}>
						<img src={BarcodeIcon} />
						<span>Boleto</span>
					</div>
					<div className="option-payment" onClick={() => setOption(options.creditCard)}>
						<img src={MasterCardIcon} />
						<span>Cartão de Crédito / Débito</span>
					</div>
					<div className="option-payment" onClick={(event) => changeOption(event, options.pix)}>
						<img src={PixIcon} />
						<span>Pix</span>
					</div>
				</div>
			}

			{ option === options.creditCard && <CreditCard orderAmount={orderAmount}/> }
			{ option !== options.creditCard && option !== options.default && 
				<button onClick={() => checkout()}>Finalizar compra</button>
			}

			{ option === options.pix && 
				<Pix 
					isOpen={pixModalIsOpen}
					handleClose={() => setPixModalIsOpen(false)}
					amount={orderAmount}
				/>
			}
		</Container>
	);
};

Payment.propTypes = {
	orderAmount: PropTypes.number.isRequired
};

export default Payment;
