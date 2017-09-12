const telephoneNumber = function(state={telephoneNumber: ''}, action) {
	if (action.type === 'setTelephoneNumber') {
		return Object.assign({}, state, {telephoneNumber: action.payload});
	}
	return state;
}

export default telephoneNumber;