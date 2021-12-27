import { get, post } from 'config/axios';
import endpoints from 'config/endpoints';

export default {
  auth: async data => {
    return await post(endpoints.AUTH, data);
  },
  store: async data => {
    return await post(endpoints.USERS, data);
  },
  showByEmail: async email => {
    return await get(endpoints.USERS_EMAIL, [email]);
  },
  confirmEmail: async id => {
    return await get(endpoints.USERS_CONFIRM_EMAIL, [id]);
  }
};