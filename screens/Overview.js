import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TodoItem, ActionBar } from '../components/Components';
import { Transition } from 'react-navigation-fluid-transitions';

const data = {
  cards: [
    { 
      title: 'TodoList 1',
      datetime: '23. Mai 2018, 17:35',
      reminder: '23. Mai 2018, 17:50',
      icon: 'bell',
      background: '#def2ff',
      items: [
        {
          selected: false,
          text: 'Hello, this is an amazing text sample!'
        },
        {
          selected: true,
          text: 'Hello, this was an amazing text sample!'
        }
      ]
    },
    { 
      title: 'TodoList 2',
      datetime: '23. Mai 2018, 17:35',
      reminder: '23. Mai 2018, 17:50',
      icon: 'box',
      background: '#bfeabe',
      items: []
    },
    { 
      title: 'TodoList 3',
      datetime: '23. Mai 2018, 17:35',
      reminder: '23. Mai 2018, 17:50',
      icon: 'cloud',
      background: '#f2d8c6',
      items: []
    },
    { 
      title: 'TodoList 1',
      datetime: '23. Mai 2018, 17:35',
      reminder: '23. Mai 2018, 17:50',
      icon: 'bell',
      background: '#def2ff',
      items: []
    },
    { 
      title: 'TodoList 2',
      datetime: '23. Mai 2018, 17:35',
      reminder: '23. Mai 2018, 17:50',
      icon: 'box',
      background: '#bfeabe',
      items: []
    },
    { 
      title: 'TodoList 3',
      datetime: '23. Mai 2018, 17:35',
      reminder: '23. Mai 2018, 17:50',
      icon: 'cloud',
      background: '#f2d8c6',
      items: []
    },
    { 
      title: 'TodoList 1',
      datetime: '23. Mai 2018, 17:35',
      reminder: '23. Mai 2018, 17:50',
      icon: 'bell',
      background: '#def2ff',
      items: []
    },
    { 
      title: 'TodoList 2',
      datetime: '23. Mai 2018, 17:35',
      reminder: '23. Mai 2018, 17:50',
      icon: 'box',
      background: '#bfeabe',
      items: []
    },
    { 
      title: 'TodoList 3',
      datetime: '23. Mai 2018, 17:35',
      reminder: '23. Mai 2018, 17:50',
      icon: 'cloud',
      background: '#f2d8c6',
      items: []
    }
  ]
}

export default class Overview extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.scrollContainer}>
            { data.cards.map((item, index) => (
              <Transition shared={"item-"+index} key={index}>
                <TodoItem style={{}} navigation={this.props.navigation} onPress={() => {this.props.navigation.navigate('Details', { item: item })}} title={item.title} datetime={item.datetime} reminder={item.reminder} icon={item.icon} background={item.background}/>
              </Transition>
            ))}
          </View>
        </ScrollView>
        <Transition shared={"actionBar"}>
          <ActionBar icon={"plus"} onPress={() => {this.props.navigation.navigate('Add');}} style={styles.actionBar}/>
        </Transition>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
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
