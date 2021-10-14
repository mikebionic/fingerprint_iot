import React, { useState, useEffect } from 'react'

import ListItem from '../ListItem'
import { fetchAccessLogs } from '../../services'

export const AccessLogPage = () => {

	const [data, setData] = useState([])

	useEffect(() => {
		const fetch_logs = async () => {
			const access_data = await fetchAccessLogs()
			const json_data = await access_data.json()
			setData(json_data.data)
		}
		fetch_logs();
		setInterval(() => {
			fetch_logs()
		}, 10000);
	}, [setData])

	return (
		<>
			<h4>Access log</h4>
			<ul class="list-group">
				{(data.map((log) => 
					<ListItem key={log.id} text={`${log.id} | Finger id: ${log.finger_id} |  Name: ${log.name}`} badge={log.date} />
				))}
			</ul>
		</>
	)
}