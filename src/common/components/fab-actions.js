import React, { Component, Fragment } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from './../../styles/colors';
import Fab from './fab';

export default class FabActions extends Component {

	componentDidMount () {
		//console.log(Icons);
	}

	componentWillReceiveProps (nextProps) {
		//console.log(nextProps);
	}

	render() {
		return (
			<Fragment>
				<Fab 
				title = "&#xf055;"
				onPress = { this.props.addBtnClick }
				styles = {styles.addButton}
				/>
				<Fab 
				title = "&#xf06e;"
				onPress = { this.props.showBtnClick }
				styles = {styles.showButton}
				show = {this.props.showShow}
				color = {Colors.blue}
				/>
				<Fab 
				title = "&#xf1f8;"
				onPress = { this.props.removeBtnClick }
				styles = {styles.removeButton}
				show = {this.props.showRemove}
				color = {Colors.green}
				/>
			</Fragment>
			);
	}
}

const styles = StyleSheet.create({
	addButton: {
		bottom: 25,
		right: 25,
		height: 75,
		width: 75,
	},
	showButton: {
		bottom: 110,
		right: 37,
		height: 50,
		width: 50,
	},
	removeButton: {
		bottom: 30,
		right: 110,
		height: 50,
		width: 50,
	},
});
