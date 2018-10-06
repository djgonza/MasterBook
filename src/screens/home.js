import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions, SafeAreaView } from 'react-navigation';

import api from './../api';

import Header from './../common/components/header';
import ServicesList from './services-list';

class Home extends Component {

	static navigationOptions = {
		header: null
	};

	componentDidMount () {

		/*this.props.dispatch({
				type: 'REMOVE_USER',
			})*/

		/*api.queries.getServices()
		.then(data => {
			this.props.dispatch({
				type: 'SET_SERVICES',
				payload: data
			})
		})
		.catch(err => {

		});*/

		this.props.dispatch (NavigationActions.navigate({
			routeName: 'Otra'
		}))
	}

	render () {
		return (
			<SafeAreaView style = {{flex: 1}}>
				<ServicesList />
			</SafeAreaView>
		);
	}

}

export default connect(null)(Home);