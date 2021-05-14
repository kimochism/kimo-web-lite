
import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Fallback from 'shared/Fallback';
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const Product = lazy(() => import('./pages/Product'));
const Catalog = lazy(() => import('./pages/Catalog'));

const App = () => {
	return (
		<Router>
			<Switch>
				<Suspense fallback={<Fallback />}>
			    	<Route exact path='/' component={ () => <Home />}/>
			    	<Route exact path='/product' component={ () => <Product />}/>
					<Route exact path='/profile' component={ () => <Profile />}/>
					<Route exact path='/catalog' component={ () => <Catalog />}/>
				</Suspense>
			</Switch>
		</Router>
	);
};

export default App;
