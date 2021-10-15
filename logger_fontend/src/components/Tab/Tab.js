import React from 'react'

import { NavLink } from 'react-router-dom'

export const Tab = () => {
	return (
		<>
			<ul className="nav nav-pills">
			<li className="nav-item">
					<NavLink
						className="nav-link"
						activeClassName="active" 
						to="/app/login">
							Login
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						className="nav-link"
						activeClassName="active" 
						to="/app/access_logs">
							Access logs
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						className="nav-link"
						activeClassName="active" 
						to="/app/fingerprints">
							Fingeprints
					</NavLink>
				</li>
			</ul>
		</>
	)
}