export default (state = null, action) => {
	switch (action.type) {
		case 'SET_REGISTERED_USER': {
			return action.payload
		}
		case 'REMOVE_REGISTERED_USER': {
			return null
		}
		default: {
			return state;
		}
	}
	return state;
}