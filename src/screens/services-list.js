import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative, { View, Text, FlatList, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

import Colors from './../styles/colors';

import Header from './../common/components/header';

import ListHeader from './../common/components/list-header';
import ListFooter from './../common/components/list-footer';
import ListEmpty from './../common/components/list-empty';
import ListVerticalSeparator from './../common/components/list-vertical-separator';

import FabActions from './../common/components/fab-actions';
import Prompt from './../common/components/prompt';

import Item from './components/service-list-item';

class ServicesList extends Component {

	constructor (props) {
		super(props)
		this.state = {
			showPrompt: false,
			promptPass: '',
			promptError: ''
		}
	}

	addClick = () => {
		this.props.dispatch({
			type: 'SET_SELECTED_SERVICE',
		})
		this.props.navigation.navigate('AddService');
	}

	showClick = () => {
		this.setState({
			showPrompt: true
		})
	}

	removeClick = () => {
		this.props.dispatch({
			type: 'REMOVE_SERVICE',
			payload: this.props.selectedService
		})
		this.props.dispatch({
			type: 'REMOVE_SELECTED_SERVICE',
			payload: this.props.selectedService
		})
	}

	selectItem = (item) => {
		this.props.dispatch({
			type: 'SET_SELECTED_SERVICE',
			payload: item
		})
	}

	settings = () => {

		this.props.dispatch (NavigationActions.navigate({
			routeName: 'Settings'
		}))

	}

	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: <Text style = {{
				flex: 1,
				color: 'white',
				textAlign: 'center',
				fontSize: 20
			}}>Servicios</Text>,
			headerRight: (
				<TouchableOpacity
				onPress={ navigation.getParam('settings') }
				style = {{marginRight: 15}}
				>
				<Text style={{fontFamily: 'fontawesome', fontSize: 25, color: 'white'}}>&#xf013;</Text>
				</TouchableOpacity>
				),
			headerStyle: {
				backgroundColor: Colors.primary,
			},
			headerTintColor: '#fff',
		}
	};

	// static navigationOptions = {
	// 	header: null//Header
	// }

	componentDidMount () {
		this.props.navigation.setParams({ settings: this.settings });
	}

	resetState () {
		this.setState({
			showPrompt: false,
			promptPass: '',
			promptError: ''
		})
	}

	validatePass = () => {
		if (this.state.promptPass == this.props.user.pass) {
			this.resetState();
			this.props.navigation.navigate('ShowService');
			return;
		}
		this.setState({promptError: 'La contraseña es incorrecta'})
	}

	setPropmpt = () => {
		if(this.state.showPrompt)
			return (<Prompt
				cancel = {() => {this.resetState()}}
				accept = {this.validatePass}
				>
				<Text style = {{color: 'red'}}>{this.state.promptError}</Text>
				<TextInput 
				style = {{marginBottom: 10,width: 250,height: 50,paddingHorizontal: 10,borderRadius: 5,borderColor: 'black',borderBottomWidth: 1}} 
				placeholder = 'Contraseña'
				placeholderTextColor = '#ccc'
				secureTextEntry = {true}
				onChangeText={(pass) => this.setState({promptPass: pass})}
				value={this.state.promptPass}
				/>
				</Prompt>)
	}

	render () {

		return (
			<View style = {{flex: 1}}>
			<FlatList
			data = { this.props.services }
			renderItem = { ({item}) => <Item item = {item} /> }
			ListEmptyComponent = { <ListEmpty text = {"No hay elementos en la lista"} /> }
			ListHeaderComponent = { <ListHeader /> }
			ListFooterComponent = { <ListFooter/> }
			ItemSeparatorComponent = {(item, index) => <ListVerticalSeparator />}
			keyExtractor = {(item, index) => index.toString()}
			/>
			<FabActions
			showRemove = {this.props.selectedService ? true : false}
			showShow = {this.props.selectedService ? true : false}
			addBtnClick = { this.addClick }
			showBtnClick = { this.showClick }
			removeBtnClick = { this.removeClick }
			/>
			{this.setPropmpt()}
			</View>);
	}

}

function mapStateToProps (state) {
	return {
		services: state.services,
		selectedService: state.selectService,
		user: state.user
	}
}

export default connect(mapStateToProps)(ServicesList);