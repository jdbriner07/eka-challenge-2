const name = function(state={}, action) {
	if (action.type === 'changeFirstName') {
		return Object.assign(state, {firstName: action.payload});
	} else if (action.type === 'changeLastName') {
		return Object.assign(state, {lastName: action.payload});
	}
	return state;
}

export default name;