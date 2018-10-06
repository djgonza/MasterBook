import React from 'react';
import {
	View,
	StyleSheet,
	ActivityIndicator,
} from 'react-native';

export default (props) => {
	return (
		<View style={styles.container}>
			<ActivityIndicator />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	}
})
