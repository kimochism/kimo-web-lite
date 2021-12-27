import { get, post, put } from 'config/axios';
import endpoints from 'config/endpoints';

export default {
  show: async id => {
    return await get(endpoints.CUSTOMERS_ID, [id]);
  },
  showByUser: async id => {
    return await get(endpoints.CUSTOMERS_USER_ID, [id]);
  },
  store: async data => {
    return await post(endpoints.CUSTOMERS, data);
  },
  update: async (id, data) => {
    return await put(endpoints.CUSTOMERS_ID, data, [id]);
  }
};