const name = function(state={firstName: '', lastName:''}, action) {
	if (action.type === 'setFirstName') {
		return Object.assign({}, state, {firstName: action.payload});
	} else if (action.type === 'setLastName') {
		return Object.assign({}, state, {lastName: action.payload});
	}
	return state;
}

export default name;