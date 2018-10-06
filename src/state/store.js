import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './reducers';

import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['navigation', 'selectService']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const navigationMiddleware = createReactNavigationReduxMiddleware('root', state => state.navigation);

const store = createStore(
	persistedReducer,
	applyMiddleware(navigationMiddleware)
	)
const persistor = persistStore(store)

const initialState = {
	
}

export { store, persistor };

//export default createStore(reducer, initialState, applyMiddleware(navigationMiddleware));