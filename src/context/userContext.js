import { createContext } from 'react';

const email = localStorage.getItem('email');
const firstName = localStorage.getItem('firstName');

const UserContext = createContext({
	email: email ? email : '',
	firstName: firstName ? firstName : ''
});

export default UserContext;