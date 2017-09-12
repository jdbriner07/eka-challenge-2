const username = function(state={}, action) {
	if (action.type === 'setUsername') {
		return Object.assign({}, state, {username: action.payload});
	}
	return state;
} 

export default username;