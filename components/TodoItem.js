import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default class TodoItem extends React.Component {
  render() {
    return (
			<TouchableHighlight style={styles.touchContainer} underlayColor={'lightgrey'} onPress={() => { this.props.onPress ? this.props.onPress() : null }}>
				<View style={[styles.container, this.props.background ? {backgroundColor: this.props.background} : null]}>
					<View style={styles.leftContet}>
						<Text style={styles.title}>{this.props.title}</Text>
						<Text style={styles.datetime}>{this.props.datetime}</Text>
						{ this.props.reminder ? (
							<View style={styles.reminderRow}>
								<View style={styles.iconBox}>
									<MaterialCommunityIcons name={'bell'} size={12} color={'green'} />
								</View>
								<Text style={styles.reminder}>{this.props.reminder}</Text>
							</View>
						) : null }
					</View>
					<View style={styles.rightContent}>
						<Feather name={this.props.icon} size={20} color="black" />
					</View>
				</View>
			</TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
	touchContainer: {
		marginLeft: 20,
		marginRight: 20,
		marginTop: 10, 
		marginBottom: 10,
		overflow: 'hidden',
		borderRadius: 8,
	},
  container: {
		height: 100,
		flexDirection: 'row',
		// fallback color, if no props set
		backgroundColor: 'white',
		padding: 15,
		alignItems: 'center',
		borderRadius: 8,
		overflow: 'hidden',
	},
	leftContet: {
		flex: 1,
	},
	rightContent: {
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontWeight: 'bold',
		fontSize: 20,
		paddingBottom: 3,
	},
	datetime: {
		fontSize: 14,
		paddingBottom: 2,
	},
	reminderRow: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	iconBox: {
		paddingTop: 2,
		paddingBottom: 2,
		paddingRight: 2,
	},
	reminder: {
		fontSize: 12,
		color: 'green',
	}
});
