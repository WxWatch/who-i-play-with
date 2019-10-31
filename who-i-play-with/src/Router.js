import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Results from './Results';

class Router extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path='/' component={App} />
					<Route path='/results?region=:region&summoner=:summonerName' component={Results} />
				</div>
			</Router>
			);
	}
}

export default Router;