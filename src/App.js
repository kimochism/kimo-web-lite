import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Fallback from 'shared/Fallback';
const Home = lazy(() => import('./pages/Home'));
const Product = lazy(() => import('./pages/Product'));

const App = () => {
	return (
		<Router>
			<Switch>
				<Suspense fallback={<Fallback />}>
			    	<Route exact path='/' component={ () => <Home />}/>
			    	<Route exact path='/product' component={ () => <Product />}/>
				</Suspense>
			</Switch>
		</Router>
	);
};

export default App;
