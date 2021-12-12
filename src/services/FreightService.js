import BaseService from './BaseService';
import { serviceURLs } from '../utils/ServiceURLs';

export class FreightService extends BaseService {

	constructor() {
		super();
	}

	async store(data) {
		return await this.post(serviceURLs.FREIGHTS, data);
	}
}
