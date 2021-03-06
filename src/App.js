import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import { ThemeContextProvider } from './core/themeProvider';

import MainScreen from './screens/Main';
import SettingsScreen from './screens/Settings';

import TabBar from './components/TabBar';

const TabNavigator = createBottomTabNavigator(
  {
    Main: MainScreen,
    Settings: SettingsScreen,
  },
  {
    tabBarComponent: props => <TabBar {...props} />,
  },
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <AppContainer />
      </ThemeContextProvider>
    );
  }
}
