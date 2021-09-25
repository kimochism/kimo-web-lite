import { createContext } from 'react';

const authorization = localStorage.getItem('authorization');
const email = localStorage.getItem('email');

const UserContext = createContext({ 
	isLogged: authorization ? true : false,
	email: email ? email : '',
});

export default UserContext;