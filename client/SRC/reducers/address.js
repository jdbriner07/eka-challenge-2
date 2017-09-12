const address = function(state={city:'', state:'', streetNumber:'', zip:''}, action) {
	if (action.type === 'setStreetNumber') {
		return Object.assign({}, state, {streetNumber: action.payload});
	} else if (action.type === 'setCity') {
		return Object.assign({}, state, {city: action.payload});
	} else if (action.type === 'setState') {
		return Object.assign({}, state, {state: action.payload});
	} else if (action.type === 'setZip') {
		return Object.assign({}, state, {zip: action.payload});
	}
	return state;
}

export default address;