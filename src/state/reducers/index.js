import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import navigation from './navigation';
import services from './services';
import selectService from './select-service';
import user from './user';
import registeredUser from './registered-users';

export default combineReducers({
	navigation,
	services,
	selectService,
	user,
	registeredUser
})

