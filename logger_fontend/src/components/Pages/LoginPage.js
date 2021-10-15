import React from 'react'

const server_url = process.env.REACT_APP_SERVER_URL || '127.0.0.1:5000'
const loginPath = process.env.REACT_APP_LOGIN_URL || '/login'

const LoginPage = () => {

	return (
		<main className="form-signin">
			<form
			className="form-control"
				method="POST" action={`http://${server_url}${loginPath}`}>
				<h1 className="h3 mb-3 fw-normal">Please Login</h1>
				<div>
					<label>Username</label>
					<input
						type="text"
						selected
						className="form-control"
						id="floatingUsername"
						name="username"
						placeholder="Username" />

					<label>Pin Code</label>
					<input
						type="password"
						className="form-control"
						id="floatingPin"
						name="pin"
						placeholder="Pin Code" />
				</div>
				<button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
			</form>
		</main>
	)
}

export default LoginPage