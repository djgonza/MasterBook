export default (state = null, action) => {
	switch (action.type) {
		case 'SET_SELECTED_SERVICE': {
			if(action.payload == undefined) return null
			if(action.payload != state) return action.payload
			return null
		}
		case 'REMOVE_SELECTED_SERVICE': {
			return null
		}
		default: {
			return state;
		}
	}
	return state;
}