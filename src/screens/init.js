import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loading from './../common/components/loading';

export class Init extends Component {

	componentDidMount() {

		// this.props.dispatch({
		// 	type: 'REMOVE_USER'
		// });

		// this.props.dispatch({
		// 	type: 'REMOVE_REGISTERED_USER'
		// });

		// this.props.dispatch({
		// 	type: 'CLEAR_SERVICES'
		// });

		if(this.props.user) {
			this.props.navigation.navigate('App');
		} else {
			this.props.navigation.navigate('Login');
		}

	}

	render() {
		return (<Loading />);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Init);
