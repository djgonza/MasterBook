import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Colors from './../../styles/colors';

class ServicesListItem extends Component {

	selectItem = () => {
		this.props.dispatch({
			type: 'SET_SELECTED_SERVICE',
			payload: this.props.item
		})
	}

	componentDidMount () {
	}

	render () {
		return (
			<TouchableOpacity 
			style = {this.props.selectedService == this.props.item ? styles.containerSelected : styles.container} 
			onPress = { this.selectItem }>
			<View style = {styles.row}>
				<View style = {{flex: 1}}>
					<Text style = {styles.label}>Servicio: </Text>
					<Text style = {styles.label}>Nombre: </Text>
					<Text style = {styles.label}>Contraseña: </Text>
				</View>
				<View style = {{flex: 2}}>
					<Text style = {styles.text}>{this.props.item.service}</Text>
					<Text style = {styles.text}>{this.props.item.user}</Text>
					<Text style = {styles.text}>{this.props.item.pass.replace(/./g, '*')}</Text>
				</View>
			</View>
			</TouchableOpacity>
			);
	}

}

function mapStateToProps (state) {
	return {
		selectedService: state.selectService
	}
}

const styles = StyleSheet.create({
	container: {
		marginLeft: 15,
		marginRight: 15,
		padding: 10,
		backgroundColor: 'white',
		borderRadius: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 1,
		shadowOpacity: .5
	},
	containerSelected: {
		marginLeft: 15,
		marginRight: 15,
		padding: 10,
		backgroundColor: 'white',
		borderRadius: 5,
		borderLeftWidth: 10,
		borderLeftColor: Colors.primary,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 1,
		shadowOpacity: .5
	},
	text: {
		fontSize: 16
	},
	row: {
		flexDirection: 'row'
	},
	column: {
		flex: 1
	},
	label: {
		textAlign: 'right',
		fontSize: 16,
		fontWeight: 'bold'
	}
});

export default connect(mapStateToProps)(ServicesListItem)
