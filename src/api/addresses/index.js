import { del, get, post, put } from 'config/axios';
import endpoints from 'config/endpoints';

export default {
  postmon: async zipCode => {
    return await get(endpoints.POSTMON, [zipCode]);
  },
  list: async () => {
    return await get(endpoints.ADDRESSES);
  },
  listByCustomer: async id => {
    return await get(endpoints.ADDRESSES_CUSTOMER_ID, [id]);
  },
  show: async id => {
    return await get(endpoints.ADDRESSES_ID, [id]);
  },
  store: async data => {
    return await post(endpoints.ADDRESSES, data);
  },
  update: async (id, data) => {
    return await put(endpoints.ADDRESSES_ID, data, [id]);
  },
  destroy: async id => {
    return await del(endpoints.ADDRESSES_ID, [id]);
  }
};