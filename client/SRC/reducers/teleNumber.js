const telephoneNumber = function(state={}, action) {
	if (action.type === 'changeTelephoneNumber') {
		return Object.assign(state, {telephoneNumber: action.payload});
	}
	return state;
}

export default telephoneNumber;