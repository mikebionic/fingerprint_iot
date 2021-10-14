import React from 'react'

export const ListItem = ({text, badge}) => {
	return (
		<li className="list-group-item d-flex justify-content-between align-items-start">
			{text}
			<span className="badge bg-primary rounded-pill">{badge}</span>
		</li>
	)
}