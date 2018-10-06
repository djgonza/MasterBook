import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

import Colors from './../styles/colors';

class AddService extends Component {

	constructor (props) {
		super(props)
		this.state = {
			user: '',
			pass: '',
			service: '',
			id: Math.random().toString(36).substr(2, 9)
		};
	}

	static navigationOptions = {
		headerTitle: <Text style = {{
			flex: 1,
			color: 'white',
			textAlign: 'center',
			fontSize: 20
		}}>Añadir Servicio</Text>,
		headerRight: <View></View>,
		headerStyle: {
			backgroundColor: Colors.primary,
		},
		headerTintColor: '#fff',
	};

	guardar = () => {
		if (this.state.user == '' || this.state.pass == '' || this.state.service == '') {
			Alert.alert('Es necesario un Usuario, una Contraseña y el nombre del servicio')
			return;
		}
		this.props.dispatch({
			type: 'ADD_SERVICE',
			payload: this.state
		})
		this.props.navigation.navigate('ServicesList');
	}

	render () {
		return (
			<ScrollView style = { styles.container }>
			<TextInput 
				style = { styles.input } 
				placeholder = 'Nombre del Servicio'
				placeholderTextColor = '#ccc'
				onChangeText={(service) => this.setState({...this.state, service})}
				value={this.state.service}/>
			<TextInput 
				style = { styles.input } 
				placeholder = 'Usuario'
				placeholderTextColor = '#ccc'
				onChangeText={(user) => this.setState({...this.state, user})}
				value={this.state.user}/>
			<TextInput 
				style = { styles.input } 
				placeholder = 'Contraseña'
				placeholderTextColor = '#ccc'
				onChangeText={(pass) => this.setState({...this.state, pass})}
				secureTextEntry = {true}
				value={this.state.pass}/>
			<TouchableOpacity 
				style = { styles.button }
				onPress = { this.guardar }
			>
				<Text style = {styles.buttonLabel}>Guardar</Text>
			</TouchableOpacity>
			</ScrollView>);
	}

}

const styles = StyleSheet.create({
	container: {
		//alignItems: 'center',
		//justifyContent: 'center',
		flex: 1,
		margin: 20
	},
	input: {
		marginBottom: 10,
		height: 50,
		paddingHorizontal: 10,
		borderRadius: 5,
		borderColor: 'black',
		borderBottomWidth: 1,
		marginBottom: 25,
		textAlign: 'center',
		minWidth: '75%'
	},
	button: {
		backgroundColor: Colors.primary,
		borderRadius: 5,
		marginBottom: 15
	},
	buttonLabel: {
		color: 'white',
		padding: 15,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	}
});

function mapStateToProps (state) {
	return {
		services: state.services
	}
}

export default connect(mapStateToProps)(AddService);