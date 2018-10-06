import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default (props) => {
	return (
		<View style = {styles.constainer}>
			<Text style = {styles.text}>{props.text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	constainer: {
	},
	text: {
		fontSize: 16,
		textAlign: 'center'
	}
});