const password = function(state={}, action) {
	if (action.type === 'setPassword') {
		console.log('password is set');
		return Object.assign({}, state, {password: action.payload});
	}
	return state;
}

export default password;