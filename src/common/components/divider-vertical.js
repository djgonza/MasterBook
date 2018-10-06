import React from 'react';
import { View, StyleSheet } from 'react-native';

export default (props) => {
	return (
		<View style = {styles.constainer}></View>
	);
}

const styles = StyleSheet.create({
	constainer: {
		marginLeft: 10,
		marginRight: 10,
		height: '100%', 
		backgroundColor: '#ccc',
		width: 1
	}
});
