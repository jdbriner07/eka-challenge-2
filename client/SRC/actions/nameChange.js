export function updateFirstName(first) {
	return {
		type: 'setFirstName',
		payload: first,
	}
}

export function updateLastName(last) {
	return {
		type: 'setLastName',
		payload: last,
	}
}