import React, { lazy, Suspense, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthContext } from './context/AuthContext';
import Fallback from 'shared/Fallback/Fallback';

// import Fallback from 'shared/Fallback';
const Home = lazy(() => import('./pages/Home/Home'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const Product = lazy(() => import('./pages/Product/Product'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Collections = lazy(() => import('./pages/Collections/Collections'));
const CustomerBag = lazy(() => import('./pages/CustomerBag/CustomerBag'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const EditEmail = lazy(() => import('./pages/Email/EditEmail/EditEmail'));
const ConfirmEmail = lazy(() => import('./pages/Email/ConfirmEmail/ConfirmEmail'));
const VerifyEmail = lazy(() => import('./pages/Email/VerifyEmail/VerifyEmail'));

const CustomRoute = ({ ...rest }) => {
	const { loading } = useContext(AuthContext);

	if (loading) {
		return <h1>Loading...</h1>;
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
				<CustomRoute exact path='/' component={() => <Home />} />
				<CustomRoute exact path='/product/:id' component={() => <Product />} />
				<CustomRoute exact path='/profile' component={() => <Redirect to="/profile/account" />} />
				<CustomRoute exact path='/profile/:option' component={() => <Profile />} />
				<CustomRoute exact path='/profile/:option/:return' component={() => <Profile />} />
				<CustomRoute exact path='/catalog' component={() => <Catalog />} />
				<CustomRoute exact path='/collections' component={() => <Collections />} />
				<CustomRoute exact path='/customerbag' component={() => <CustomerBag />} />
				<CustomRoute exact path='/notfound' component={() => <NotFound />} />
				<CustomRoute exact path='/email/edit' component={() => <EditEmail />} />
				<CustomRoute exact path='/email/confirm' component={() => <ConfirmEmail />} />
				<CustomRoute exact path='/email/verify/:id' component={() => <VerifyEmail />} />
			</Suspense>
		</Switch>
	);
}