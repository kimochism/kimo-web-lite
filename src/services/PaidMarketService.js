import BaseService from './BaseService';
import { serviceURLs } from '../utils/ServiceURLs';

export class PaidMarketService extends BaseService {

	constructor() {
		super();
	}

	async processPayment(data) {
		return await this.post(serviceURLs.PAYMENTS, data);
	}
}
