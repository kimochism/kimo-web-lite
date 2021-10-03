import axios from 'axios';
import { enviroment } from '../enviroment/enviroment';

export default class BaseService {

	constructor() {
		const authorization = localStorage.getItem('authorization');

		this.http = axios.create({
			baseURL: process.env.PROD ? enviroment.api_production : enviroment.api_stage,
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Authorization': `${ authorization ? 'Bearer ' + authorization : ''}`
			}
		});
	}

	async get(url, pathParams = [], queries = null) {
		

		const buildedUrl = this.buildUrl(url, pathParams, queries);

		const response = await this.http.get(buildedUrl);

		return response.data;
	}

	async post(url, data) {
		

		const buildedUrl = this.buildUrl(url);

		const response = await this.http.post(buildedUrl, data);

		return response.data;
	}

	async put(url, data, pathParams = []) {
		

		const buildedUrl = this.buildUrl(url, pathParams, null);

		const response = await this.http.put(buildedUrl, data);

		return response.data;
	}

	async delete(url, pathParams = []) {
		

		const buildedUrl = this.buildUrl(url, pathParams, null);

		const response = await this.http.delete(buildedUrl);

		return response.data;
	}

	buildUrl(url, pathParams, queries) {
		const buildedPathParams = this.buildPathParams(url, pathParams);
		const buildedQueries = this.buildQueries(queries);

		const buildedUrl = `${buildedPathParams}${buildedQueries ? '?'.concat(buildedQueries) : ''}`;
		return buildedUrl;
	}

	buildQueries(queries) {
		if (!queries) {
			return;
		}

		const keys = Object.keys(queries);

		return keys.map(key => {
			return `${key}=${queries[key]}`;
		}).join('&&');
	}

	buildPathParams(url, pathParams) {
		if (!pathParams || !pathParams.length) {
			return url;
		}

		const regex = /\{(.*?)\}/;

		pathParams.forEach(value => {
			const matched = regex.exec(url);
			if (matched) {
				url = url.replace(matched[0], value);
			}
		});

		return url;
	}
}