import React from 'react'

export const ListItem = ({text, badge, children}) => {
	return (
		<li className="list-group-item d-flex justify-content-between align-items-start">
			{text}
			{children}
			<span className="badge bg-primary rounded-pill">{badge}</span>
		</li>
	)
}