import React, { useState, useEffect } from 'react'

import ListItem from '../ListItem'
import { fetchFingerprints } from '../../services'

export const FingerprintsPage = () => {

	const [data, setData] = useState([])

	useEffect(() => {
		const fetch_fingers = async () => {
			const fingers_data = await fetchFingerprints()
			const json_data = await fingers_data.json()
			setData(json_data.data)
		}
		fetch_fingers();
		setInterval(() => {
			fetch_fingers()
		}, 10000);
	}, [setData])

	return (
		<>
			<h4>Fingerprints</h4>
			<ul class="list-group">
				{(data.map((finger) =>
					<ListItem key={finger.id} text={`${finger.id} | Finger id: ${finger.finger_id} | Name: ${finger.name}`} />
				))}
				</ul>
		</>
	)
}