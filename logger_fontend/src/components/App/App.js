import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { AccessLogPage, FingerprintsPage, LoginPage } from '../Pages/'
import Tab from '../Tab'


export const App = () => {
	return (
		<div className="container">
			<Router>
				<Tab />
				<Switch>
					<Route path="/app/access_logs" exact render={() => <AccessLogPage />} />
					<Route path="/app/fingerprints" exact render={() => <FingerprintsPage />} />
					<Route path="/app/login" exact render={() => <LoginPage />} />
					<Redirect to="/app/login" />
				</Switch>
			</Router>
		</div>
	)
}