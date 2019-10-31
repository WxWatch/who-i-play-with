import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Results from './Results';

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path='/' component={App} />
					<Route path='/results' component={Results} />
				</div>
			</BrowserRouter>
			);
	}
}

export default Router;