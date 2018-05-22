import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default class ActionBar extends React.Component {
  render() {
    return (
			<TouchableHighlight style={styles.touchContainer} underlayColor={'lightgrey'} onPress={() => { this.props.onPress ? this.props.onPress() : null }}>
				<View style={styles.container}>
					<Feather name={this.props.icon} size={30} color="black" />
				</View>
			</TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
	touchContainer: {
		margin: 20,
		overflow: 'hidden',
		borderRadius: 8,
	},
	container: {
		height: 60,
		flexDirection: 'row',
		// fallback color, if no props set
		backgroundColor: '#def2ff',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
});
