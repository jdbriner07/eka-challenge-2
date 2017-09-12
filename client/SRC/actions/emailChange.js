export function updateEmail(email) {
	return {
		type: 'setEmail',
		payload: email,
	}
}