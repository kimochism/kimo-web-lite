import React, { useContext, useEffect, useState } from 'react';
import { Container } from './styles';
import { toast } from 'react-toastify';
import { AuthContext } from 'context/AuthContext';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import api from 'api/index';
import NotificationError from 'shared/NotificationError/NotificationError';

const CreditCard = ({ orderAmount }) => {

	const [cardExpiration, setCardExpiration] = useState();
	const [thumbnail, setThumbnail] = useState();
	const { email } = useContext(AuthContext);

	useEffect(() => {

		const cardForm = window.mp.cardForm({
			amount: orderAmount.toString(),
			autoMount: true,
			form: {
				id: 'form-checkout',
				cardholderName: {
					id: 'form-checkout__cardholderName',
					placeholder: 'Nome impresso no cartão',
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
					placeholder: 'Em quantas vezes quer pagar?',
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
					setDocumentAndEmailValues();
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

					await api.orders.store({
						status: 'PENDING',
						amount: Number(amount),
						freight: 10,
						total: amount + 10,
						description: 'Product description'
					}).then(async order => {

						await api.payments.createPayment({
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

						for(const err of error){
							const { code } = err;

							// card number invalid
							if (code === 'E301') { errorMessage('Numéro do cartão inválido.'); break; }
							// card expirationinvalid
							if (code === '325' || code === '326') { errorMessage('Vencimento do cartão inválido.'); break; }
							// security code invalid
							if (code === 'E302') { errorMessage('Código de segurança inválido.'); break; }
							// cardholder name invalid
							if (code === '316') { errorMessage('Nome impresso no cartão inválido.'); break; }

							// card number empty
							if (code === '205') { errorMessage('Número do cartão não pode ser vazio.'); break; }
							
							// card expiration empty
							if (code === '208' || code === '209') { errorMessage('Vencimento não pode ser vazio.'); break; }
							
							// security code empty
							if (code === '224') { errorMessage('Código de segurança não pode ser vazio.'); break; }
							
							// // cardholder name empty
							if (code === '221') { errorMessage('Nome impresso no cartão não pode ser vazio.'); break; }

							// // document type empty
							// if (code === '212' || code === '213') { console.log(); }
							// // document number empty
							// if (code === '214') { console.log(); }
							// // document type invalid
							// if (code === '322' || code === '323') { console.log(); }
							// // document number invalid
							// if (code === '324') { console.log(); }
						}

						return console.warn('Token handling error: ', error);
					}

					console.log('Token available: ', token);
				},
				onIdentificationTypesReceived: (error) => {
					if (error) return console.warn('identificationTypes handling error: ', error);
				},
			},
		});

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

	const setDocumentAndEmailValues = async () => {

		const emailField = document.getElementById('form-checkout__cardholderEmail');
		emailField.value = email;

		const identificationType = document.getElementById('form-checkout__identificationType');
		identificationType.value = 'CPF';

		await api.users.showByEmail(email).then(async ({_id}) => {
			await api.customers.showByUser(_id).then(customer => {
				const identificationNumber = document.getElementById('form-checkout__identificationNumber');
				identificationNumber.value = customer.document.replace(/[^\w\s]/gi, '');
			});
		});
	};

	const errorMessage = message => {
		toast(<NotificationError errorMessage={message} />, {
			hideProgressBar: true,
			position: toast.POSITION.BOTTOM_LEFT,
		});
	};

	return (
		<Container>
			<form id="form-checkout">
				<div className="input-with-icon">
					<input
						type="text"
						name="cardNumber"
						id="form-checkout__cardNumber"
					/>
					{thumbnail && <img src={thumbnail} className='thumbnail' />}
				</div>
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
				<div className="group-inputs">
					<InputMask
						type="text"
						name="cardExpiration"
						id="form-checkout__cardExpiration"
						mask="99/99"
						placeholder="Vencimento (mês/ano)"
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
				</div>
				<select
					name="installments"
					id="form-checkout__installments">
				</select>
				<input
					type="hidden"
					name="cardholderEmail"
					id="form-checkout__cardholderEmail"
				/>
				<select
					name="issuer"
					style={{ display: 'none' }}
					id="form-checkout__issuer">
				</select>
				<select
					name="identificationType"
					style={{ display: 'none' }}
					id="form-checkout__identificationType">
				</select>
				<input
					type="hidden"
					name="identificationNumber"
					id="form-checkout__identificationNumber"
				/>
				<button
					type="submit"
					id="form-checkout__submit">
					Finalizar compra
				</button>
			</form>
		</Container>
	);
};

CreditCard.propTypes = {
	orderAmount: PropTypes.number.isRequired,
};

export default CreditCard;
