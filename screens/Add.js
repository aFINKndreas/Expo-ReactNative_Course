import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import { ActionBar } from '../components/Components';

export default class Add extends React.Component {
  render() {
		const navParams = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
				<Transition shared={"actionBar"}>
					<ActionBar icon={"chevron-left"} onPress={() => {this.props.navigation.goBack();}} style={styles.actionBar}/>
				</Transition>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
		flex: 1,
		flexDirection: 'column'
	},
	actionBar: {
		position: 'absolute',
		top: 0,
		left: 0
	}
});
