import { get, post, put } from 'config/axios';
import endpoints from 'config/endpoints';

export default {
  showPaymentStatus: async id => {
    return await get(endpoints.PAYMENTS_PAID_MARKET_ID, [id]);
  },
  createPayment: async data => {
    return await post(endpoints.PAYMENTS, data);
  },
  cancelPayment: async id => {
    return await put(endpoints.PAYMENTS_PAID_MARKET_ID, [id]);
  }
};