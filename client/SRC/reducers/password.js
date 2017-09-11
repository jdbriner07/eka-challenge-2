const password = function(state={}, action) {
	if (action === 'setPassword') {
		return Object.assign(state, {password: action.payload});
	}
	return state;
}

export default password;