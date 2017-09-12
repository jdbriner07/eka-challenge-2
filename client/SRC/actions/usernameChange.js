export function updateUsername(username) {
	return {
		type: 'setUsername',
		payload: username,
	}
}