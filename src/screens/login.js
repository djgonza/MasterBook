import React, { Component, Fragment } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import Colors from './../styles/colors';

class Login extends Component {

	constructor (props) {
		super(props)
		this.state = {
			pass: ''
		};
	}

	static navigationOptions = {
		header: null
	};

	handleLogin = () => {
		if (!this.props.registeredUser) {
			Alert.alert('No hay ningun Usuario registrado')
		}
		else if (JSON.stringify(this.props.registeredUser.pass) === JSON.stringify(this.state.pass)) {
			this.props.dispatch({
				type: 'SET_USER',
				payload: {
					pass: this.state.pass
				}
			});

			this.props.dispatch (NavigationActions.navigate({
				routeName: 'Init'
			}))
		}else{
			Alert.alert('Usuario o Contraseña incorrecto')
		}
	}

	registrar = () => {
		this.props.dispatch (NavigationActions.navigate({
			routeName: 'Registry'
		}))
	}

	componentDidMount () {

	}

	render () {
		return (
			<View style = {styles.container}>
			<View style = {{width: '75%'}}>
			<Text style = {styles.title}>Acceder</Text>
			<TextInput 
			style = { styles.input } 
			placeholder = 'Contraseña'
			placeholderTextColor = '#ccc'
			secureTextEntry = {true}
			onChangeText={(pass) => this.setState({...this.state, pass})}
			value={this.state.pass}
			/>
			<TouchableOpacity
			onPress={this.handleLogin}
			style={styles.button}
			>
			<Text style={styles.buttonLabel}>Iniciar Sesión</Text>
			</TouchableOpacity>
			</View>
			<View style = {{paddingTop: 100}}>
			<Text>Aun no tienes cuenta, <Text onPress = {this.registrar} style = {{color: Colors.blue}}>Registrate</Text></Text>
			</View>
			</View>
			);
	}

}

function mapStateToProps(state) {
	return {
		registeredUser: state.registeredUser
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		//justifyContent: 'center',
		flex: 1,
		paddingTop: 100,
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
	},
	button: {
		backgroundColor: Colors.primary,
		borderRadius: 5,
	},
	buttonLabel: {
		color: 'white',
		padding: 15,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 25,
		textAlign: 'center'
	},
})

export default connect(mapStateToProps)(Login);