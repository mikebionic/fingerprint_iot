import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { AccessLogPage, FingerprintsPage, LoginPage } from '../Pages/'
import Tab from '../Tab'


export const App = () => {
	const [user, setUser] = useState(null)
	console.log(user)
	return (
		<div className="container">
			<Router>
				<Tab />
				<Switch>
					<Route path="/app/access_logs" exact render={() => user ? <AccessLogPage /> : <LoginPage />} />
					<Route path="/app/fingerprints" exact render={() => user ? <FingerprintsPage /> : <LoginPage />} />
					<Route path="/app/login" exact render={() => <LoginPage setUser={setUser} user={user} />} />
					<Redirect to="/app/login" />
				</Switch>
			</Router>
		</div>
	)
}