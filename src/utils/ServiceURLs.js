export const serviceURLs = {
	AUTH: '/auth/login',

	USERS: '/users',
	USERS_EMAIL: '/users/email/{email}',
	USERS_CONFIRM_EMAIL: '/users/confirm/email/{id}', 

	CUSTOMERS: '/customers',
	CUSTOMERS_ID: '/customers/{id}',
	CUSTOMERS_USER_ID: '/customers/user/{user_id}',

	PRODUCTS: '/products',
	PRODUCTS_ID: '/products/{id}',

	CUSTOMER_BAGS: '/customerBags',
	CUSTOMER_BAGS_ID: '/customerBags/{id}',
	CUSTOMER_BAGS_EMAIL: '/customerBags/email/{email}',

	FREIGHTS: '/freights',

	ORDERS: '/orders',
	ORDERS_ID: '/orders/{id}',
	
	PAYMENTS: '/payments',
	PAYMENTS_PAID_MARKET_ID: '/payments/paidMarket/{id}',
};