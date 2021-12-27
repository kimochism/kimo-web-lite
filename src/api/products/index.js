import { get } from 'config/axios';
import endpoints from 'config/endpoints';

export default {
  list: async options => {
    return await get(endpoints.PRODUCTS, [], options);
  },
  show: async id => {
    return await get(endpoints.PRODUCTS_ID, [id]);
  }
};