import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative, { View, FlatList, Text, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';

import Colors from './../styles/colors';


class ShowService extends Component {

	static navigationOptions = {
		title: 'Servicios',
		headerStyle: {
			backgroundColor: Colors.primary,
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
		},
	};

	componentDidMount () {
		//console.log(this.props.selectedService);
		//console.log(this.props.selectedService ? true : false);
	}

	render () {
		return (
			<View style = {styles.container}>
			<Text style = {[styles.text, styles.bold]}>Servicio</Text>
			<Text style = {styles.text}>{this.props.selectedService.service}</Text>
			<Text style = {[styles.text, styles.bold]}>Usuario</Text>
			<Text style = {styles.text}>{this.props.selectedService.user}</Text>
			<Text style = {[styles.text, styles.bold]}>Contraseña</Text>
			<Text style = {styles.text}>{this.props.selectedService.pass}</Text>
			</View>);
	}

}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		//justifyContent: 'center',
		flex: 1,
		marginTop: 25
	},
	text: {
		fontSize: 20
	},
	bold: {
		fontWeight: 'bold'
	}
});

function mapStateToProps (state) {
	return {
		selectedService: state.selectService
	}
}

export default connect(mapStateToProps)(ShowService);