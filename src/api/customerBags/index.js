import { del, get, post, put } from 'config/axios';
import endpoints from 'config/endpoints';

export default {
  listByEmail: async email => {
    return await get(endpoints.CUSTOMER_BAGS_EMAIL, [email]);
  },
  store: async data => {
    return await post(endpoints.CUSTOMER_BAGS, data);
  },
  update: async (id, data) => {
    return await put(endpoints.CUSTOMER_BAGS_ID, data, [id]);
  },
  destroy: async id => {
    return await del(endpoints.CUSTOMER_BAGS_ID, [id]);
  },
};