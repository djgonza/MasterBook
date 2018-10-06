import React, { Component, Fragment } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import Colors from './../styles/colors';

class Registry extends Component {

	constructor (props) {
		super(props)
		this.state = {
			pass: '',
			repeatPass: ''
		};
	}

	static navigationOptions = {
		header: null
	};

	addUser = () => {

		if (this.state.pass.length < 3) {
			this.setState({
				error: 'La Contraseña tiene que tener 3 caracteres como minimo'
			});
			return;
		}

		if (this.state.pass != this.state.repeatPass) {
			this.setState({
				error: 'Las Contraseñas no coinciden'
			});
			return;
		}

		this.props.dispatch({
			type: 'SET_REGISTERED_USER',
			payload: {
				pass: this.state.pass
			}
		});

		this.props.dispatch (NavigationActions.navigate({
			routeName: 'Init'
		}))
	}

	goLogin = () => {
		this.props.dispatch (NavigationActions.navigate({
			routeName: 'Login'
		}))
	}

	componentDidMount () {

	}

	defaultView = () => {
		return (<View style = {{width: '75%'}}>
			<Text style = {{color: 'red', textAlign: 'center'}}>{this.state.error}</Text>
			<TextInput 
			style = { styles.input } 
			placeholder = 'Contraseña'
			placeholderTextColor = '#ccc'
			secureTextEntry = {true}
			onChangeText={(pass) => this.setState({...this.state, pass})}
			value={this.state.pass}
			/>
			<TextInput 
			style = { styles.input } 
			placeholder = 'Repita la Contraseña'
			placeholderTextColor = '#ccc'
			secureTextEntry = {true}
			onChangeText={(repeatPass) => this.setState({...this.state, repeatPass})}
			value={this.state.repeatPass}
			/>
			<View style = {styles.row}>
			<TouchableOpacity
			onPress={this.goLogin}
			style={styles.button}
			>
			<Text style={[styles.buttonLabel, styles.icon]}>&#xf190;</Text>
			</TouchableOpacity>
			<View style = {styles.separator}/>
			<TouchableOpacity
			onPress={this.addUser}
			style={styles.button}
			>
			<Text style={styles.buttonLabel}><Text style = {styles.icon}>&#xf007;</Text> Registrar</Text>
			</TouchableOpacity>
			</View>
			<Text style = {{paddingTop: 100, textAlign: 'center'}}>¡Solo necesitas un Contraseña para completar el registro!</Text>
			</View>)
	}

	registeredUser = () => {
		return (<View>
			<TouchableOpacity
			onPress={this.goLogin}
			style={styles.button}
			>
			<Text style={[styles.buttonLabel, styles.icon]}>&#xf190;</Text>
			</TouchableOpacity>
			<Text style = {{paddingTop: 25, textAlign: 'center'}}>Ya hay un usuario registrado</Text>
			</View>);
	}

	render () {

		return (
			<View style = { styles.container }>
			<Text style = {styles.title}>Registro</Text>
			{ this.props.registeredUser ? this.registeredUser() : this.defaultView() }
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
		paddingTop: 100,
		flex: 1,
	},
	input: {
		marginBottom: 10,
		height: 50,
		paddingHorizontal: 10,
		borderRadius: 5,
		borderColor: 'black',
		borderBottomWidth: 1,
		marginBottom: 25,
		textAlign: 'center'
	},
	button: {
		backgroundColor: Colors.primary,
		borderRadius: 5,
	},
	buttonLabel: {
		color: 'white',
		padding: 15,
		fontSize: 18,
		textAlign: 'center',
	},
	row: {
		flexDirection: 'row',
		//justifyContent: 'space-around',
		justifyContent: 'center',
	},
	childTextCenter: {
		flex: 1,
		textAlign: "center",
		alignItems: "center"
	},
	icon: {
		fontFamily: 'fontawesome', 
		fontSize: 20
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 25
	},
	separator: {
		width: 1,
		backgroundColor: 'white'
	}
})

export default connect(mapStateToProps)(Registry);