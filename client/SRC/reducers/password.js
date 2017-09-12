const password = function(state={password:''}, action) {
	if (action.type === 'setPassword') {
		return Object.assign({}, state, {password: action.payload});
	}
	return state;
}

export default password;