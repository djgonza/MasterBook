import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/state/store';
import AppNavigatorWithState from './src/navigation/AppNavigatorWithState';
import Loading from './src/common/components/loading';

type Props = {};
export default class App extends Component<Props> {

	render() {
		return (
			<Provider store = {store}>
				<PersistGate
				loading={<Loading />}
				persistor={persistor}
				>
					<AppNavigatorWithState />
				</PersistGate>
			</Provider>
			);
	}
}

console.disableYellowBox = true; //Elimar en release


