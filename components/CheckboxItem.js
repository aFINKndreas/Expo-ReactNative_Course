import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default class CheckboxItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selected: this.props.selected,
			inputActive: false,
			height: 0
		};
	}

	changeState = () => {
		this.setState({selected: !this.state.selected});
	}

  render() {
    return (
			<View style={[styles.container, this.props.borderBottom ? { borderBottomColor: 'lightgrey', borderBottomWidth: 1} : null]}>
				<TouchableHighlight underlayColor={'transparent'} onPress={() => { this.changeState() }}>
					<View style={styles.checkboxContainer}>
						<Feather name={ this.state.selected ? 'check-square' : 'square' } size={30} color="black" />
					</View>
				</TouchableHighlight>
				<View style={styles.textInputContainer}>
					<TextInput
						style={[styles.textInput, {height: Math.max(35, this.state.height)}]}
						placeholder="add Item..."
						value={this.props.value}
						autoCorrect={false}
						multiline={true}
						underlineColorAndroid={"transparent"}
						editable={this.state.selected ? false : true}
						onContentSizeChange={(event) => {
							this.setState({ height: event.nativeEvent.contentSize.height });
						}}
						onFocus={() => {this.setState({inputActive: true})}}
						onEndEditing={() => {this.setState({inputActive: false})}}
						onChangeText={(title) => {this.props.onChange({checked: this.state.selected, title: title})}}
					/>
				</View>
				{ this.state.inputActive ? (
					<TouchableHighlight underlayColor={'transparent'} onPress={() => { this.props.onDelete ? this.props.onDelete() : null }}>
						<View style={styles.deleteContainer}>
							<Feather name={'trash-2'} size={20} color="black" />
						</View>
					</TouchableHighlight>
				) : null}
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingLeft: 10,
		paddingRight: 20,
		paddingTop: 10,
		paddingBottom: 10,
	},
	checkboxContainer: {
		padding: 10,
	},
	deleteContainer: {
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 15,
		paddingBottom: 15
	},
	textInputContainer: {
		flex: 1,
		padding: 10
	},
	textInput: {
		fontSize: 18,
		fontWeight: 'bold',
	}
});
