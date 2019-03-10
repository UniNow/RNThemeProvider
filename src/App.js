import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import MainScreen from './screens/Main';
import SettingsScreen from './screens/Settings';

const TabNavigator = createBottomTabNavigator(
  {
    Main: MainScreen,
    Settings: SettingsScreen,
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;