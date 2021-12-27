import { post } from 'config/axios';
import endpoints from 'config/endpoints';

export default {
  store: async data => {
    return await post(endpoints.FREIGHTS, data);
  }
};