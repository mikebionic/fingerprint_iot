
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import ListItem from '../ListItem'
import Table from '../Table'
import { fetchFingerprints } from '../../services'

const FingerprintsPage = ({history}) => {

	const [data, setData] = useState([])

	useEffect(() => {
		const fetch_fingers = async () => {
			try{
				const fingers_data = await fetchFingerprints()
				const json_data = await fingers_data.json()
				setData(json_data.data)
			} catch (e) {
				history.push('/app/login')
			}
		}
		fetch_fingers();
		const fetch_interval = setInterval(() => {
			fetch_fingers()
		}, 10000);

		return () => {
			clearInterval(fetch_interval);
		}	
	}, [setData])

	return (
		<>
			<h4>Fingerprints</h4>
			<Table 
				data={data}
			/>
		</>
	)
}

export default withRouter(FingerprintsPage)