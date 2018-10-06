import React from 'react';
import { View, StyleSheet } from 'react-native';

export default (props) => {
	return (
		<View style = {styles.constainer}></View>
	);
}

const styles = StyleSheet.create({
	constainer: {
		marginTop: 1,
		marginBottom: 1,
		height: 1, 
		backgroundColor: '#ccc',
		width: '80%'
	}
});
