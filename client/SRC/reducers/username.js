const username = function(state={username:''}, action) {
	if (action.type === 'setUsername') {
		return Object.assign({}, state, {username: action.payload});
	}
	return state;
} 

export default username;