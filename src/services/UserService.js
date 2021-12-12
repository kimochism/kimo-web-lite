import BaseService from './BaseService';

import { serviceURLs } from '../utils/ServiceURLs';

export class UserService extends BaseService {

	constructor() {
		super();
	}

	async auth(data) {
		return await this.post(serviceURLs.AUTH, data);
	}

	async store(data) {
		return await this.post(serviceURLs.USERS, data);
	}

	async showByEmail(email) {
		return await this.get(serviceURLs.USERS_EMAIL, [email]);
	}

	async confirmEmail(id) {
		return await this.get(serviceURLs.USERS_CONFIRM_EMAIL, [id]);
	}
}
