import React, { Component } from 'react';
import ReactNative, { View, Text, StyleSheet, Animated, Dimensions, TouchableOpacity } from 'react-native';

import Colors from './../../styles/colors';

export default class prompt extends Component {

	constructor(props) {

		super(props);

		this.state = {
			position: null,
			dimensions: this.calculateContainerDimensions()
		};
		
		this.state.position = new Animated.ValueXY({x: this.state.dimensions.offsetWidth, y: 0});

	}

	calculateContainerDimensions () {
		let dimensions = {
			width: 0,
			height: 0,
			offsetWidth: 0,
			offsetHeight: 0
		}

		dimensions.width = Dimensions.get('window').width * 0.7;
		dimensions.offsetWidth = Dimensions.get('window').width * 0.3 / 2;

		dimensions.height = Dimensions.get('window').height * 0.2;
		dimensions.offsetHeight = Dimensions.get('window').height * 0.8 / 4;
		
		return dimensions;
		
	}

	componentDidMount () {

		Animated.spring(this.state.position, {
			toValue: { x: this.state.dimensions.offsetWidth, y: this.state.dimensions.offsetHeight },
			friction: 5,
			tension: 200
		}).start();

	}

	componentWillUnmount () {
		console.log('unmount');
	}

	render() {
		
		const container = {
			transform: this.state.position.getTranslateTransform(),
			width: this.state.dimensions.width,
			height: this.state.dimensions.height,
			backgroundColor: 'white',
			borderRadius: 15,
		}

		return (
			<View style = {styles.background}>
			<Animated.View style = {container}>
				<View style = {styles.area}>
					<View style = {{flex: 3}}>
						{this.props.children}
					</View>
					<View style = {[styles.row, {flex: 2}]}>
						<TouchableOpacity
						onPress={this.props.cancel}
						style={[styles.button, {borderBottomLeftRadius: 5}]}
						>
						<Text style={styles.buttonLabel}>Cancelar</Text>
						</TouchableOpacity>
						<View style={styles.separator}></View>
						<TouchableOpacity
						onPress={this.props.accept}
						style={[styles.button, {borderBottomRightRadius: 5}]}
						>
						<Text style={styles.buttonLabel}>Aceptar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Animated.View>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	background: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: 'rgba(0,0,0,.2)',
		zIndex: 99
	},
	area: {
		flex: 1,
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 10
	},
	button: {
		backgroundColor: Colors.primary,
		//borderRadius: 5,
		flex: 1
	},
	buttonLabel: {
		color: 'white',
		padding: 15,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	row: {
		flexDirection: 'row',
	},
	separator: {
		width: 1,
		backgroundColor: 'white'
	}
});
