import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { OrderService } from 'services/OrderService';
import { PaidMarketService } from 'services/PaidMarketService';
import useFallback from 'hooks/useFallback';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';

const CreditCard = ({ orderAmount }) => {

	const paidMarketService = new PaidMarketService();
	const orderService = new OrderService();

	const [cardExpiration, setCardExpiration] = useState();
	const [identificationType, setIdentificationType] = useState();
	const [fallback, showFallback, hideFallback] = useFallback();
	const [thumbnail, setThumbnail] = useState();


	useEffect(() => {
		showFallback();

		const cardForm = window.mp.cardForm({
			amount: orderAmount.toString(),
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
				onFormUnmounted: error => {
					if (error) return console.warn('Form Unmounted handling error: ', error);
					console.log('Form unmounted');
				},
				onPaymentMethodsReceived: (error, paymentMethods) => {
					if (error) return console.warn('paymentMethods handling error: ', error);
					setThumbnail(paymentMethods[0].thumbnail);
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

					await orderService.store({
						status: 'PENDING',
						amount: Number(amount),
						freight: 10,
						total: amount + 10,
						description: 'Product description'
					}).then(async order => {

						await paidMarketService.processPayment({
							token,
							issuer_id,
							payment_method_id,
							transaction_amount: 50,
							installments: Number(installments),
							description: 'Product description',
							payer: {
								email,
								identification: {
									type: identificationType,
									number: identificationNumber
								}
							},
							metadata: {
								order_id: order._id
							}
						}).catch(err => console.log(err));
					}).catch(err => console.log(err));
				},
				onFetching: () => {
					const issuer = document.getElementById('form-checkout__issuer');
					issuer.style.display = 'none';
				},
				onCardTokenReceived: (error, token) => {
					if (error) {
						alert('Houve um problema, tente novamente mais tarde');
						return console.warn('Token handling error: ', error);
					}

					console.log('Token available: ', token);

				},
				onIdentificationTypesReceived: (error, identificationTypes) => {
					if (error) return console.warn('identificationTypes handling error: ', error);
					setIdentificationType(identificationTypes[0].id);
				},
			},
		});

		hideFallback();

		return () => {
			cardForm.unmount();
		};
	}, []);

	const setExpirationValues = () => {
		const cardExpirationMonth = document.getElementById('form-checkout__cardExpirationMonth');
		const cardExpirationYear = document.getElementById('form-checkout__cardExpirationYear');

		if (cardExpiration) {
			cardExpirationMonth.value = cardExpiration.split('/')[0];
			cardExpirationYear.value = cardExpiration.split('/')[1];
		}
	};

	return (
		<Container>
			<form id="form-checkout">
				<input
					type="text"
					name="cardNumber"
					id="form-checkout__cardNumber"
				/>
				{thumbnail && <img src={thumbnail} className='thumbnail' />}
				<input
					type="hidden"
					name="cardExpirationMonth"
					id="form-checkout__cardExpirationMonth"
				/>
				<input
					type="hidden"
					name="cardExpirationYear"
					id="form-checkout__cardExpirationYear"
				/>
				<input
					type="text"
					name="cardholderName"
					id="form-checkout__cardholderName"
				/>
				<InputMask
					type="text"
					name="cardExpiration"
					id="form-checkout__cardExpiration"
					mask="99/99"
					placeholder="Validade"
					maskChar={null}
					onChange={(e) => {
						setCardExpiration(e.target.value);
					}}
					onBlur={() => setExpirationValues()}
				/>
				<input
					type="text"
					name="securityCode"
					id="form-checkout__securityCode"
					maxLength={3}
				/>
				<input
					type="email"
					name="cardholderEmail"
					id="form-checkout__cardholderEmail"
				/>
				<select
					name="issuer"
					id="form-checkout__issuer">
				</select>
				<select
					name="identificationType"
					id="form-checkout__identificationType"
					onChange={e => setIdentificationType(e.target.value)}>
				</select>
				<input
					type="text"
					name="identificationNumber"
					id="form-checkout__identificationNumber"
					maxLength={identificationType === 'CPF' ? 11 : 14}
				/>
				<select
					name="installments"
					id="form-checkout__installments">
				</select>
				<button
					type="submit"
					id="form-checkout__submit">
					Finalizar compra
				</button>
			</form>
			{fallback}
		</Container>
	);
};

CreditCard.propTypes = {
	orderAmount: PropTypes.number.isRequired,
};

export default CreditCard;
