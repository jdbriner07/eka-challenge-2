const email = function(state={}, action) {
	if (action.type === 'setEmail') {
		return Object.assign({}, state, {email: action.payload});
	}
	return state;
}

export default email;