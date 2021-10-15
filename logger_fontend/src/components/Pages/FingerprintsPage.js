
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import ListItem from '../ListItem'
import Table from '../Table'
import { fetchFingerprints, configureFingerprint } from '../../services'

const FingerprintsPage = ({history}) => {

	const [data, setData] = useState([])

	useEffect(() => {
		const fetch_fingers = async () => {
			try{
				const fingers_data = await fetchFingerprints()
				const json_data = await fingers_data.json()
				setData(json_data.data)
				setAlertStates('','')
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


	const [message, setMessage] = useState('')
	const [alertType, setAlertType] = useState('info')

	const [inputs, setInputs] = useState({
    finger_id: '',
    name: '',
  });
	const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

	const handleFingerprintSave = () => {
		if (!inputs.finger_id || !inputs.name){
			setAlertStates("Inputs are empty, skipping!", 'danger')
		}
		else {
			configureFingerprint(inputs)
			.then(setAlertStates("Edited successfully!", "info"))
		}
	}

	const setAlertStates = (message, style) => {
		setMessage(message)
		setAlertType(style)
	}
	const AlertMessage = () => {
		if (!alertType || !message){
			return <></>
		}
		else {
			return (
				<div class={`alert alert-${alertType}`} role="alert">
					{message}
				</div>
			)
		}			
	}


	return (
		<>
			<h4>Fingerprints</h4>

			<AlertMessage />
			<div className="form-control d-flex">
				<input type="text"
					value={inputs.finger_id}
					name="finger_id"
					onChange={handleChange}
					className="form-control"
					placeholder="Fingerprint Id" />
				<input type="text"
					value={inputs.name}
					name="name"
					onChange={handleChange}
					className="form-control"
					placeholder="Name" />
				<button type="button" class="btn btn-success" onClick={handleFingerprintSave}>Save</button>
			</div>
			<Table 
				data={data}
			/>
		</>
	)
}

export default withRouter(FingerprintsPage)