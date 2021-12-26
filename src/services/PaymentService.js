import BaseService from './BaseService';
import { serviceURLs } from '../utils/ServiceURLs';

export class PaymentService extends BaseService {

	constructor() {
		super();
	}

	async showPaymentStatus(id) {
		return await this.get(serviceURLs.PAYMENTS_PAID_MARKET_ID, [id]);
	}

	async createPayment(data) {
		return await this.post(serviceURLs.PAYMENTS, data);
	}

	async cancelPayment(id) {
		return await this.put(serviceURLs.PAYMENTS_PAID_MARKET_ID, undefined, [id]);
	}
}
