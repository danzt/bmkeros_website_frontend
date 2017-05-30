import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './App';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import VisorCarnet from './components/VisorCarnet/VisorCarnet';

const AppRoutes = () =>

	<App>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route exact path='/about' component={About}/>
			<Route exact path='/contact' component={Contact}/>
			<Route exact path='/visor_carnet' component={VisorCarnet}/>
			<Route component={Home}/>
		</Switch>
	</App>;

export default AppRoutes;