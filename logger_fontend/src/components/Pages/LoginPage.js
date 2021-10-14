import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { loginRequest } from '../../services';

const LoginPage = ({history, setUser, user}) => {
	const [pin, setPin] = useState('')
	
	const handleChange = e => {
		setPin(e.target.value);
	};

	const submitPinCode = e => {
		e.preventDefault()
		const login_request = async () => {
			try{
				const access_data = await loginRequest(pin)
				const json_data = await access_data.json()
				setUser(json_data.data)
			}catch(e){
				console.log(e)
			}
		}
		
		if (!!pin){
			login_request();
		}
	}

	useEffect(() => {
		if (!!user){
			history.push('/app/access_log')
		}
	}, [user])


	return (
		<main className="form-signin">
			<form
				method="GET" onSubmit={submitPinCode}>
				<h1 className="h3 mb-3 fw-normal">Please Login</h1>
				<div className="form-floating">
					<input
						type="text"
						selected
						className="form-control"
						id="floatingPin"
						value={pin}
						onChange={handleChange}
						placeholder="Pin Code" />
					<label>Pin Code</label>
				</div>
				<button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
			</form>
		</main>
	)
}

export default withRouter(LoginPage)