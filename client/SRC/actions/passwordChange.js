export function updatePassword(password) {
	return {
		type: 'setPassword',
		payload: password,
	}
}