import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import useAuth from 'hooks/useAuth';

const AuthContext = createContext();

function AuthProvider({ children }) {
	const {
		authenticated, loading, emailVerified, handleLogin, handleLogout,
	} = useAuth();

	return (
		<AuthContext.Provider value={{ loading, authenticated, emailVerified, handleLogin, handleLogout }}>
			{children}
		</AuthContext.Provider>
	);
}

AuthProvider.propTypes = {
	children: PropTypes.node
};

export { AuthContext, AuthProvider };