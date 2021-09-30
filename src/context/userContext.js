import { createContext } from 'react';

const authorization = localStorage.getItem('authorization');
const email = localStorage.getItem('email');
const firstName = localStorage.getItem('firstName');

const UserContext = createContext({ 
	isLogged: authorization ? true : false,
	email: email ? email : '',
	firstName: firstName ? firstName : ''
});

export default UserContext;