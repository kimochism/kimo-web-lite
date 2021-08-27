import axios from 'axios';
import { enviroment } from '../enviroment/enviroment';

export default class BaseService {

	constructor() {
		const authorization = localStorage.getItem('Authorization');

		this.http = axios.create({
			baseURL: enviroment.api,
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Authorization': `${ authorization ? 'Bearer ' + authorization : ''}`
			}
		});
	}

	async get(url, pathParams = [], queries = null) {
		this.startLoad();

		const buildedUrl = this.buildUrl(url, pathParams, queries);

		const response = await this.http.get(buildedUrl);

		this.closeLoad();
		return response.data;
	}

	async post(url, data) {
		this.startLoad();

		const buildedUrl = this.buildUrl(url);

		const response = await this.http.post(buildedUrl, data);
		this.closeLoad();

		return response.data;
	}

	async put(url, data, pathParams = []) {
		this.startLoad();

		const buildedUrl = this.buildUrl(url, pathParams, null);

		const response = await this.http.put(buildedUrl, data);
		this.closeLoad();

		return response.data;
	}

	async delete(url, pathParams = []) {
		this.startLoad();

		const buildedUrl = this.buildUrl(url, pathParams, null);

		const response = await this.http.delete(buildedUrl);
		this.closeLoad();

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

	startLoad() {
		const load = document.getElementById('main-load');
		load.style.display = 'flex';
	}

	closeLoad() {
		const load = document.getElementById('main-load');

		setTimeout(() => {
			load.style.display = 'none';
		}, 100);
	}

}