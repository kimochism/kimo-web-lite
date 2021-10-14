import React, { lazy, Suspense, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthContext } from './context/AuthContext';

import Fallback from 'shared/Fallback';
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const Product = lazy(() => import('./pages/Product'));
const Catalog = lazy(() => import('./pages/Catalog'));
const CustomerBag = lazy(() => import('./pages/CustomerBag'));
const NotFound = lazy(() => import('./pages/NotFound'));
const EditEmail = lazy(() => import('./pages/EditEmail'));
const ConfirmEmail = lazy(() => import('./pages/ConfirmEmail'));

const CustomRoute = ({ isPrivate, ...rest }) => {
	const { loading, authenticated } = useContext(AuthContext);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (isPrivate && !authenticated) {
		return <Redirect to="/" />;
	}

	return <Route {...rest} />;
};

CustomRoute.propTypes = {
	isPrivate: PropTypes.bool
};

export default function Routes() {
	return (
		<Switch>
			<Suspense fallback={<Fallback />}>
				<Route exact path='/' component={() => <Home />} />
				<Route exact path='/product/:id' component={() => <Product />} />
				<Route isPrivate exact path='/profile' component={() => <Profile />} />
				<Route exact path='/catalog' component={() => <Catalog />} />
				<Route exact path='/customerbag' component={() => <CustomerBag />} />
				<Route exact path='/notfound' component={() => <NotFound />} />
				<Route exact path='/editEmail' component={() => <EditEmail />} />
				<Route isPrivate={true} exact path='/confirmEmail' component={() => <ConfirmEmail />} />
			</Suspense>
		</Switch>
	);
}