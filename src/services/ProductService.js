import BaseService from './BaseService';
import { serviceURLs } from '../utils/ServiceURLs';

export class ProductService extends BaseService {

	constructor() {
		super();
	}

	async list() {
		return await this.get(serviceURLs.PRODUCTS);
	}

	async show(id) {
		return await this.get(serviceURLs.PRODUCTS_ID, [id]);
	}
}
