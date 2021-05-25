import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Fallback from 'shared/Fallback';
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const Product = lazy(() => import('./pages/Product'));
const Catalog = lazy(() => import('./pages/Catalog'));
const CustomerBag = lazy(() => import('./pages/CustomerBag'));
const NotFound = lazy(() => import('./pages/NotFound'));


const App = () => {
	return (
		<Router>
			<Switch>
				<Suspense fallback={<Fallback />}>
			    	<Route exact path='/' component={ () => <Home />}/>
			    	<Route exact path='/product' component={ () => <Product />}/>
					<Route exact path='/profile' component={ () => <Profile />}/>
					<Route exact path='/catalog' component={ () => <Catalog />}/>
					<Route exact path='/customerbag' component={ () => <CustomerBag />}/>	
					<Route exact path='/notfound' component={ () => <NotFound />}/>	
				</Suspense>
			</Switch>
		</Router>
	);
};

export default App;
