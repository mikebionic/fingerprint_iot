import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import ListItem from '../ListItem'
import { fetchAccessLogs } from '../../services'

const AccessLogPage = ({history}) => {

	const [data, setData] = useState([])

	useEffect(() => {
		const fetch_logs = async () => {
			try {
				const access_data = await fetchAccessLogs()
				const json_data = await access_data.json()
				setData(json_data.data)
			} catch (e){
				console.log(e)
				history.push('/app/login')
			}
		}
		fetch_logs();
		const fetch_interval = setInterval(() => {
			fetch_logs()
		}, 10000);

		return () => {
			clearInterval(fetch_interval);
		}	
	}, [setData, history])

	return (
		<>
			<h4>Access log</h4>
			<ul class="list-group">
				{(data.map((log) => 
					<ListItem key={log.id} text={`${log.id} | Finger id: ${log.finger_id} |  Name: ${log.name}`} badge={log.date}>
						<span className="badge bg-warning rounded-pill">{log.name}</span>
					</ListItem>
				))}
			</ul>
		</>
	)
}

export default withRouter(AccessLogPage)