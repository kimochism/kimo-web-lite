import React, { useContext, useEffect, useState } from 'react';
import { Container } from './styles';
import { UserService } from 'services/UserService';
import { AuthContext } from 'context/AuthContext';
import { CustomerService } from 'services/CustomerService';
import { OrderService } from 'services/OrderService';
import { PaymentService } from 'services/PaymentService';
import { SocketContext } from 'context/SocketContext';
import BaseModal from 'shared/Modal/BaseModal';
import PropTypes from 'prop-types';
// import useFallback from 'hooks/useFallback';

const Pix = ({ isOpen, handleClose, amount }) => {

	const userService = new UserService();
	const customerService = new CustomerService();
	const paymentService = new PaymentService();
	const orderService = new OrderService();

	const socket = useContext(SocketContext);
	const { email } = useContext(AuthContext);

	const [qrCode64, setQrCode64] = useState();
	const [qrCodeCopyAndPaste, setQrCodeCopyAndPaste] = useState();
	const [paymentId, setPaymentId] = useState();
	const [paymentAccept, setPaymentAccept] = useState(false);

	// const [fallback, showFallback, hideFallback] = useFallback();

	useEffect(() => {
		if(isOpen) {
			createPayment();
		}
	}, [isOpen]);

  useEffect(() => {
		console.log(socket);
    socket && socket.on('receivedPix', payload => {
      if(payload === 'pending') {
				alert('Paga essa porra menó');
			}
    });
  }, [socket]);

	const createPayment = async () => {

		// showFallback();
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
					transaction_amount: Number(0.50),
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
					notification_url: 'https://kimo-api-lite.herokuapp.com/payments/notificationHook',
					metadata: {
						order_id: order._id
					}
				};

				await paymentService.createPayment(payment_data).then(({ response: { id, point_of_interaction: { transaction_data: { qr_code_base64, qr_code }}}}) => {
					setPaymentId(id);
					setQrCode64(qr_code_base64);
					setQrCodeCopyAndPaste(qr_code);
				}).catch(error => {console.log(error);  });
				
			}).catch(error => {console.log(error); });
		}

		// hideFallback();
	};

	const cancelPayment = async () => {
		console.log(paymentId);
		await paymentService.cancelPayment(paymentId);
		await socket.close();
		handleClose();
	};

	const showPaymentStatus = async () => {
		const paymentStatus = await paymentService.showPaymentStatus(paymentId);

		if(paymentStatus) {
			const { body: { status } } = paymentStatus;

			console.log(status);

			if(status === 'approved') {
				setPaymentAccept(true);
			}
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
          	<input type="text" id="copyQrCode" value={qrCodeCopyAndPaste} onChange={() => {}}/>
          </>
				}

				{ paymentAccept }
				<button onClick={() => showPaymentStatus()}>Confirmar pagamento</button>
				<button onClick={() => cancelPayment()}>Cancelar</button>
				{/* {fallback} */}
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