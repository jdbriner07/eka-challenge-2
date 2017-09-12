export function updateStreetNumber(streetAddress) {
	return {
		type: 'setStreetNumber',
		payload: streetAddress,
	}
}

export function updateCity(city) {
	return {
		type: 'setCity',
		payload: city,
	}
}

export function updateState(state) {
	return {
		type: 'setState',
		payload: state,
	}
}

export function updateZip(zip) {
	return {
		type: 'setZip',
		payload: zip,
	}
}