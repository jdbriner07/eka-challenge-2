const address = function(state={}, action) {
	if (action.type === 'changeStreetNumber') {
		return Object.assign(state, {streetNumber: action.payload});
	} else if (action.type === 'changeCity') {
		return Object.assign(state, {city: action.payload});
	} else if (action.type === 'changeState') {
		return Object.assign(state, {state: action.payload});
	} else if (action.type === 'changeZip') {
		return Object.assign(state, {zip: action.payload});
	}
	return state;
}

export default address;