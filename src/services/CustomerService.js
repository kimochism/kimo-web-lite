import BaseService from './BaseService';
import { serviceURLs } from '../utils/ServiceURLs';

export class CustomerService extends BaseService {

	constructor() {
		super();
	}

	async store(data) {
		return await this.post(serviceURLs.CUSTOMERS, data);
	}

	async show(id) {
		return await this.get(serviceURLs.CUSTOMERS_ID, [id]); 
	}

	async showByUser(user_id) {
		return await this.get(serviceURLs.CUSTOMERS_USER_ID, [user_id]);
	}
	
	async update(id, data) {
		return await this.put(serviceURLs.CUSTOMERS_ID, data, [id]);
	}
}
