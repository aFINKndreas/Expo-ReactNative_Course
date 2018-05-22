import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import { HeadItem, CheckboxItem, ActionBar } from '../components/Components';
import Feather from '@expo/vector-icons/Feather';

export default class Details extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			item: this.props.navigation.state.params.item
    };
    if (this.props.navigation.state.params.item.items.length === 0){
      this.props.navigation.state.params.item.items.push({selected: false, text: null});
    }
  }
  
  addItem = () => {
    this.state.item.items.push({
      selected: false,
      text: null
    });
    this.forceUpdate();
  }

  updateItem = (index, checked, title) => {
    this.state.item.items[index].checked = checked;
    this.state.item.items[index].title = title;
    this.forceUpdate();
  }

  removeItem = (index) => {
    if (index > -1) {
      this.state.item.items.splice(index, 1);
    }
    this.forceUpdate();
  }

  render() {
    return (
      <View style={styles.container}>
				<Transition shared={"item-"+this.state.item.index}>
          <HeadItem style={{}} navigation={this.props.navigation} title={this.state.item.title} datetime={this.state.item.datetime} reminder={this.state.item.reminder} icon={this.state.item.icon} background={this.state.item.background}/>
        </Transition>
				<ScrollView>
          <View style={styles.scrollContainer}>
            { this.state.item.items.map((item,index) => (
						  <CheckboxItem key={index} borderBottom={ index < this.state.item.items.length ? true : false } selected={item.selected} value={item.text} onChange={(res) => {this.updateItem(index,res.checked,res.title)}} onDelete={() => {this.removeItem(index)}} />
             )) }
          </View>
        </ScrollView>
				<Transition shared={"actionBar"}>
          <ActionBar icon={"plus"} onPress={() => {this.addItem()}} style={styles.actionBar}/>
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
	scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
	actionBar: {
    position: 'absolute',
    bottom: 0,
    left: 0, 
    right: 0
  }
});
