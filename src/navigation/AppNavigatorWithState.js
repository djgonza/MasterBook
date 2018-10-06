import React, { component } from 'react';
import { connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';

import AppNavigator from './AppNavigator';

const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root');

class AppNavigatorWithState extends ReduxifyApp {

}

function mapStateToProps(state) {
	return {
		state: state.navigation
	}
}

export default connect(mapStateToProps)(AppNavigatorWithState)