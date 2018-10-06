import { List } from 'immutable';

export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_SERVICE': {
			return List(state).insert(0, action.payload).toJS()
		}
		case 'REMOVE_SERVICE': {
			let list = List(state);
			let index = list.findIndex(i => i.id == action.payload.id)
			return List(state).delete(index).toJS()
		}
		case 'CLEAR_SERVICES': {
			return []
		}
		default: {
			return state;
		}
	}
	return state;
}