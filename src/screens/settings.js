import React, { Component, Fragment } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import Colors from './../styles/colors';

class Settings extends Component {

	constructor (props) {
		super(props)
		this.state = {
			oldPass: '',
			newPass: '',
			validatePass: '',
			error: null,
			action: null
		};
	}

	static navigationOptions = {
		title: 'Ajustes',
		headerStyle: {
			backgroundColor: Colors.primary
		},
		headerTintColor: '#fff',
		headerTitle: <Text style = {{
			flex: 1,
			color: 'white',
			textAlign: 'center',
			fontSize: 20
		}}>Ajustes</Text>,
		headerRight: <View></View>
	};

	componentDidMount () {

	}

	logOut = () => {

		Alert.alert(
			'Salir',
			'¿Estas seguro que deseas salir?',
			[
			{text: 'Cancel', onPress: () => {}, style: 'cancel'},
			{text: 'Aceptar', onPress: () => {
				this.props.dispatch({
					type: 'REMOVE_USER'
				});
				this.props.dispatch (NavigationActions.navigate({
					routeName: 'Init'
				}))
			}},
			],
			{ cancelable: false }
			)
	}

	confirmRemoveAccount = () => {
		Alert.alert(
			'Eliminar cuenta',
			'¿Estas seguro que deseas eliminar la cuenta? Esta acción es irreversible.',
			[
			{text: 'Cancel', onPress: () => {}, style: 'cancel'},
			{text: 'Aceptar', onPress: () => this.removeAccount()},
			],
			{ cancelable: false }
			)
	}

	removeAccount = () => {
		this.props.dispatch({
			type: 'REMOVE_USER'
		});
		this.props.dispatch({
			type: 'REMOVE_REGISTERED_USER'
		});
		this.props.dispatch({
			type: 'CLEAR_SERVICES'
		});
		this.props.dispatch (NavigationActions.navigate({
			routeName: 'Init'
		}))
	}

	validateUpdatePass = () => {
		if (this.state.oldPass != this.props.registeredUser.pass) {
			this.setState({error: 'La contraseña antigua no concide'});
			return;
		}
		if (this.state.newPass.length < 3) {
			this.setState({error: 'La contraseña nueva tiene menos de 3 caracteres'});
			return;
		}

		if (this.state.newPass != this.state.validatePass) {
			this.setState({error: 'Las nuevas contraseñas no coinciden'});
			return;
		}

		Alert.alert('La contraseña se ha actualizado')

		this.props.dispatch({
			type: 'SET_REGISTERED_USER',
			payload: {
				pass: this.state.newPass
			}
		});
		
		this.props.dispatch (NavigationActions.navigate({
			routeName: 'Init'
		}))

	}

	showUpdatePass = () => {
		return (<View>
			<Text style = {styles.title}>Actulizar Contraseña</Text>
			<Text>{this.state.error}</Text>
			<TextInput 
			style = { styles.input } 
			placeholder = 'Antigua Contraseña'
			placeholderTextColor = '#ccc'
			secureTextEntry = {true}
			onChangeText={(oldPass) => this.setState({...this.state, oldPass})}
			value={this.state.oldPass}
			/>
			<TextInput 
			style = { styles.input } 
			placeholder = 'Nueva Contraseña'
			placeholderTextColor = '#ccc'
			secureTextEntry = {true}
			onChangeText={(newPass) => this.setState({...this.state, newPass})}
			value={this.state.newPass}
			/>
			<TextInput 
			style = { styles.input } 
			placeholder = 'Repita la nueva Contraseña'
			placeholderTextColor = '#ccc'
			secureTextEntry = {true}
			onChangeText={(validatePass) => this.setState({...this.state, validatePass})}
			value={this.state.validatePass}
			/>
			<View style = {styles.row}>
			<TouchableOpacity
			onPress={() => {this.setState({action: null})}}
			style={styles.button}
			>
			<Text style={styles.buttonLabel}>Cancelar</Text>
			</TouchableOpacity>
			<View style = {styles.separator}/>
			<TouchableOpacity
			onPress={this.validateUpdatePass}
			style={styles.button}
			>
			<Text style={styles.buttonLabel}>Guardar</Text>
			</TouchableOpacity>
			</View>
			</View>)
	}

	defaultView = () => {
		return (<View>
			<TouchableOpacity
			onPress={() => {this.setState({action: 'updatePass'})}}
			style={styles.button}
			>
			<Text style={styles.buttonLabel}>Actualizar Contraseña</Text>
			</TouchableOpacity>
			<TouchableOpacity
			onPress={this.logOut}
			style={styles.button}
			>
			<Text style={styles.buttonLabel}>Salir</Text>
			</TouchableOpacity>
			<TouchableOpacity
			onPress={this.confirmRemoveAccount}
			style={styles.button}
			>
			<Text style={styles.buttonLabel}>Eliminar Cuenta</Text>
			</TouchableOpacity>
			</View>);
	}

	switchRender = () => {
		switch (this.state.action) {
			case 'updatePass': {
				return this.showUpdatePass()
				break;
			}
			default: {
				return this.defaultView();
			}
		}
	}

	render () {
		return (
			<ScrollView style = {styles.container}>
			{this.switchRender()}
			</ScrollView>);
	}

}

function mapStateToProps(state) {
	return {
		registeredUser: state.registeredUser
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
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 25,
		textAlign: 'center'
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	separator: {
		width: 1,
		backgroundColor: 'white'
	}
})

export default connect(mapStateToProps)(Settings);