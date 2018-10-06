import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default (props) => {
	return (
		<View style = {styles.constainer}>
			<SafeAreaView>
				<Text style = {styles.title}>Header</Text>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	constainer: {
		height: '15%',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		//zIndex: 1
	},
	title: {
		fontWeight: 'bold',
		//borderColor: 'red',
		//borderWidth: 0.5,
		fontSize: 30,
	}
});
