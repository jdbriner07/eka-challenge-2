const email = function(state={email:''}, action) {
	if (action.type === 'setEmail') {
		return Object.assign({}, state, {email: action.payload});
	}
	return state;
}

export default email;