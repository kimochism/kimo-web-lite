import BaseService from './BaseService';
import { serviceURLs } from '../utils/ServiceURLs';

export class CustomerBagService extends BaseService {

	constructor() {
		super();
	}

	async store(data) {
		return await this.post(serviceURLs.CUSTOMER_BAGS, data);
	}

	async show(id) {
		return await this.get(serviceURLs.CUSTOMER_BAGS_ID, [id]); 
	}
	
	async update(id, data) {
		return await this.put(serviceURLs.CUSTOMER_BAGS_ID, data, [id]);
	}
}
