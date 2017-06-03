import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Route, Router} from 'react-router';
import Login from './components/login';
export default class Home extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={Login} />		
			</Router>
			/*<RecommendedJobs />*/
		)
	}
}

ReactDOM.render(
	<Home />,
	document.getElementById('root')
);
