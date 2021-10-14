
const server_url = process.env.SERVER_URL || '127.0.0.1:5000'
const fingerprintsPath = process.env.FINGERPRINTS_URL || '/fingerprints_data/'
const accessLogsPath = process.env.ACCESS_LOGS_URL || '/access_logs/'
const loginPath = process.env.LOGIN_URL || '/login'

export const fetchFingerprints = () => {
	return fetch(`http://${server_url}${fingerprintsPath}`)
}

export const fetchAccessLogs = () => {
	return fetch(`http://${server_url}${accessLogsPath}`)
}

export const loginRequest = (pin) => {
	return fetch(`http://${server_url}${loginPath}?pin=${pin}`)
}