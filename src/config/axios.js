import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

export const enviroment = {
  api_production: 'https://kimo-api-lite.herokuapp.com'
};

const authorization = localStorage.getItem('authorization');

const http = axios.create({
  baseURL: REACT_APP_API_URL ? REACT_APP_API_URL : enviroment.api_production,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': `${authorization ? 'Bearer ' + authorization : ''}`
  }
});

const get = async (url, pathParams = [], queries = null) => {
  const buildedUrl = buildUrl(url, pathParams, queries);
  const response = await http.get(buildedUrl);
  return response.data;
};

const post = async (url, data) => {
  const buildedUrl = buildUrl(url);
  const response = await http.post(buildedUrl, data);
  return response.data;
};

const put = async (url, data, pathParams = []) => {
  const buildedUrl = buildUrl(url, pathParams, null);
  const response = await http.put(buildedUrl, data);
  return response.data;
};

const del = async (url, pathParams = []) => {
  const buildedUrl = buildUrl(url, pathParams, null);
  const response = await http.delete(buildedUrl);
  return response.data;
};

const buildUrl = (url, pathParams, queries) => {
  const buildedPathParams = buildPathParams(url, pathParams);
  const buildedQueries = buildQueries(queries);
  const buildedUrl = `${buildedPathParams}${buildedQueries ? '?'.concat(buildedQueries) : ''}`;
  return buildedUrl;
};

const buildQueries = (queries) => {
  if (!queries) {
    return;
  }
  const keys = Object.keys(queries);
  return keys.map(key => {
    return `${key}=${queries[key]}`;
  }).join('&&');
};

const buildPathParams = (url, pathParams) => {
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
};

export {
  get,
  post,
  del,
  put
};