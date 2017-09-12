export function updatePhone(number) {
	return {
		type: 'setTelephoneNumber',
		payload: number,
	}
}