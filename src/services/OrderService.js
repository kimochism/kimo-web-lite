import BaseService from './BaseService';
import { serviceURLs } from '../utils/ServiceURLs';

export class OrderService extends BaseService {

	constructor() {
		super();
	}

	async store(data) {
		return await this.post(serviceURLs.ORDERS, data);
	}
}
