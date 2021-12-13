import React, { useEffect } from 'react';
import { PaidMarketService } from 'services/PaidMarketService';
import { Container } from './styles';

const Payment = () => {

	const paidMarketService = new PaidMarketService();

	useEffect(() => {
		window.onload = () => {
			const cardForm = window.mp.cardForm({
				amount: '100.5',
				autoMount: true,
				form: {
					id: 'form-checkout',
					cardholderName: {
						id: 'form-checkout__cardholderName',
						placeholder: 'Titular do cartão',
					},
					cardholderEmail: {
						id: 'form-checkout__cardholderEmail',
						placeholder: 'E-mail',
					},
					cardNumber: {
						id: 'form-checkout__cardNumber',
						placeholder: 'Número do cartão',
					},
					cardExpirationMonth: {
						id: 'form-checkout__cardExpirationMonth',
						placeholder: 'Mês de vencimento',
					},
					cardExpirationYear: {
						id: 'form-checkout__cardExpirationYear',
						placeholder: 'Ano de vencimento',
					},
					securityCode: {
						id: 'form-checkout__securityCode',
						placeholder: 'Código de segurança',
					},
					installments: {
						id: 'form-checkout__installments',
						placeholder: 'Parcelas',
					},
					identificationType: {
						id: 'form-checkout__identificationType',
						placeholder: 'Tipo de documento',
					},
					identificationNumber: {
						id: 'form-checkout__identificationNumber',
						placeholder: 'Número do documento',
					},
					issuer: {
						id: 'form-checkout__issuer',
						placeholder: 'Banco emissor',
					},
				},
				callbacks: {
					onFormMounted: error => {
						if (error) return console.warn('Form Mounted handling error: ', error);
						console.log('Form mounted');
					},
					onSubmit: async event => {
						event.preventDefault();

						const {
							paymentMethodId: payment_method_id,
							issuerId: issuer_id,
							cardholderEmail: email,
							amount,
							token,
							installments,
							identificationNumber,
							identificationType,
						} = cardForm.getCardFormData();

						await paidMarketService.processPayment({ 
							token,
							issuer_id,
							payment_method_id,
							transaction_amount: Number(amount),
							installments: Number(installments),
							description: 'Product description',
							payer: {
								email,
								identification: {
									type: identificationType,
									number: identificationNumber
								}
							}
						});
					},
					onFetching: (resource) => {
						console.log('Fetching resource: ', resource);

						// Animate progress bar
						const progressBar = document.querySelector('.progress-bar');
						progressBar.removeAttribute('value');

						return () => {
							progressBar.setAttribute('value', '0');
						};
					},
				},
			});
		};
	}, []);

	return (
		<Container>
			<form id="form-checkout" >
				<input type="text" name="cardNumber" id="form-checkout__cardNumber" />
				<input type="text" name="cardExpirationMonth" id="form-checkout__cardExpirationMonth" />
				<input type="text" name="cardExpirationYear" id="form-checkout__cardExpirationYear" />
				<input type="text" name="cardholderName" id="form-checkout__cardholderName" />
				<input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail" />
				<input type="text" name="securityCode" id="form-checkout__securityCode" />
				<select name="issuer" id="form-checkout__issuer"></select>
				<select name="identificationType" id="form-checkout__identificationType"></select>
				<input type="text" name="identificationNumber" id="form-checkout__identificationNumber" />
				<select name="installments" id="form-checkout__installments"></select>
				<button type="submit" id="form-checkout__submit">Pagar</button>
				<progress value="0" className="progress-bar">Carregando...</progress>
			</form>
		</Container>
	);
};

export default Payment;
