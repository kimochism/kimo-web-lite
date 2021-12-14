import React from 'react';
import { BarcodeIcon, PixIcon, MasterCardIcon } from 'assets/icons';

import { Container } from './styles';

const Payment = () => {

	return (
		<Container>
			<div className="option-payment">
				<img src={BarcodeIcon} />
				<span>Boleto</span>
			</div>
			<div className="option-payment">
				<img src={MasterCardIcon} />
				<span>Cartão de Crédito / Débito</span>
			</div>
			<div className="option-payment">
				<img src={PixIcon} />
				<span>Pix</span>
			</div>
		</Container>
	);
};

export default Payment;
