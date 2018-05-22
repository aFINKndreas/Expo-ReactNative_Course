import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { FluidNavigator } from 'react-navigation-fluid-transitions';

import { Overview, Details, Add } from './screens/Screens';

export const RootNavigation = FluidNavigator({
  Overview: {
    screen: Overview
  }, 
  Details: {
    screen: Details
  },
  Add: {
    screen: Add
  }
});

export default class App extends React.Component {
  render() {
    return (
      <RootNavigation/>
    );
  }
}