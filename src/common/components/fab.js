import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

import Colors from './../../styles/colors';

export default class Fab extends Component {

	componentWillMount() {
		if(this.props.show == undefined) {
			this._visibility = new Animated.Value(1);
		}else{
			this._visibility = new Animated.Value(this.props.show ? 1 : 0.01);
		}
	}

	componentWillReceiveProps (nextProps) {
		if(nextProps.show != undefined) {
			Animated.timing(this._visibility, {
				toValue: nextProps.show ? 1 : 0.01,
				duration: 500,
				useNativeDriver: true,
			}).start();
		}
		
	}

	render() {

		const containerStyle = {
			opacity: this._visibility.interpolate({
				inputRange: [0.01, 1],
				outputRange: [0.01, 1],
			}),
			transform: [
			{
				scale: this._visibility.interpolate({
					inputRange: [0.01, 1],
					outputRange: [1.1, 1],
				}),
			},
			],
		};

		return (
			<Animated.View style = {{...styles.container, ...containerStyle, ...this.props.styles}}>
			<TouchableOpacity
			onLayout = { this.props.onLayout } 
			style = {[styles.button, { backgroundColor: this.props.color ? this.props.color : Colors.primary }]} 
			onPress = { this.props.onPress }
			>
			<Text style = {styles.text}>{ this.props.title }</Text>
			</TouchableOpacity>
			</Animated.View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 25,
		right: 25,
		height: 75,
		width: 75,
	},
	button: {
		backgroundColor: Colors.primary,
		borderRadius: 50,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: 'white',
		fontSize: 30,
		fontFamily: 'fontawesome', 
	}
});
