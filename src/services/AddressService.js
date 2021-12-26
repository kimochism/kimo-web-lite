import BaseService from './BaseService';
import { serviceURLs } from '../utils/ServiceURLs';

export class AddressService extends BaseService {

	constructor() {
		super();
	}

  async postmon(zipCode) {
    return await this.get(serviceURLs.POSTMON, [zipCode]);
  }

  async list() {
    return await this.get(serviceURLs.ADDRESSES);
  }

	async listByCustomer(customer_id) {
		return await this.get(serviceURLs.ADDRESSES_CUSTOMER_ID, [customer_id]);
	}
	
	async show(id) {
		return await this.get(serviceURLs.ADDRESSES_ID, [id]);
	}

	async store(data) {
		return await this.post(serviceURLs.ADDRESSES, data);
	}
	
	async update(id, data) {
		return await this.put(serviceURLs.ADDRESSES, data, [id]);
	}

	async destroy(id) {
		return await this.delete(serviceURLs.ADDRESSES, [id]);
	}
}
