import React, { useContext, useEffect, useState } from 'react';
import BaseModal from 'shared/Modal/BaseModal';
import { Container } from './styles';
import PropTypes from 'prop-types';
import { UserService } from 'services/UserService';
import { AuthContext } from 'context/AuthContext';
import { CustomerService } from 'services/CustomerService';
import { PaidMarketService } from 'services/PaidMarketService';
import { OrderService } from 'services/OrderService';

const Pix = ({ isOpen, handleClose, amount }) => {

	const userService = new UserService();
	const customerService = new CustomerService();
	const paidMarketService = new PaidMarketService();
	const orderService = new OrderService();

	const { email } = useContext(AuthContext);

	const [qrCode64, setQrCode64] = useState();
	const [qrCodeCopyAndPaste, setQrCodeCopyAndPaste] = useState();


	useEffect(() => {
		if(isOpen) {
			createPayment();
		}
	}, [isOpen]);

	const createPayment = async () => {

		const user = await userService.showByEmail(email);
    
		if(user) {
      
			const customer = await customerService.showByUser(user._id);

			const nameSplitted = customer.full_name.split(' ');

			let document = customer.document.replace('.', '');
			document = document.replace('-', '');
			document = document.replace('.', '');

			const firstName = nameSplitted[0];
			const lastName = nameSplitted[nameSplitted.length - 1];
      
			await orderService.store({
				status: 'PENDING',
				amount: Number(amount),
				freight: 10,
				total: amount + 10,
				description: 'Product description'
			}).then(async order => {

				const payment_data = {
					transaction_amount: Number(amount.toFixed(2)),
					description: 'Título do produto',
					payment_method_id: 'pix',
					payer: {
						email: user.email,
						first_name: firstName,
						last_name: lastName,
						identification: {
							type: 'CPF',
							number: document
						},
						address:  {
							zip_code: '06233200',
							street_name: 'Av. das Nações Unidas',
							street_number: '3003',
							neighborhood: 'Bonfim',
							city: 'Osasco',
							federal_unit: 'SP'
						}
					},
					notification_url: '',
					metadata: {
						order_id: order._id
					}
				};

				await paidMarketService.processPayment(payment_data).then(({ response } ) => {

					console.log(response);
					setQrCode64(response.point_of_interaction.transaction_data.qr_code_base64);
					setQrCodeCopyAndPaste(response.point_of_interaction.transaction_data.qr_code);
				}).catch(error => { console.log(error); });

			}).catch(error => console.log(error));
		}
	};

	return(
		<BaseModal
			isOpen={isOpen}
			handleClose={handleClose}
			showClose={false}
			requestClose={false}
			withBorder={true}
			isCenterScreen={true}
		>
			<Container>
				{ qrCode64 && <img src={`data:image/jpeg;base64,${qrCode64}`} style={{ width: '200px'}}/> }

				{ qrCodeCopyAndPaste &&
          <>
          	<label htmlFor="copyQrCode">Copiar Hash:</label>
          	<input type="text" id="copyQrCode"  value={qrCodeCopyAndPaste}/>
          </>
				}
			</Container>
		</BaseModal>
	);
};

Pix.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	handleClose: PropTypes.func,
	amount: PropTypes.number,
};

export default Pix;