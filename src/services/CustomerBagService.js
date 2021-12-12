import BaseService from './BaseService';
import { serviceURLs } from '../utils/ServiceURLs';

export class CustomerBagService extends BaseService {

	constructor() {
		super();
	}

	async listByEmail(email) {
		return await this.get(serviceURLs.CUSTOMER_BAGS_EMAIL, [email]);
	}

	async store(data) {
		return await this.post(serviceURLs.CUSTOMER_BAGS, data);
	}
	
	async update(id, data) {
		return await this.put(serviceURLs.CUSTOMER_BAGS_ID, data, [id]);
	}

	async destroy(id) {
		return await this.delete(serviceURLs.CUSTOMER_BAGS_ID, [id]);
	}
}
