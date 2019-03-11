import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomTabBar } from 'react-navigation';

import { withTheme } from '../core/themeProvider';

const TabBar = props => {
  return (
    <BottomTabBar
      {...props}
      activeTintColor={props.theme.backgroundColor}
      labelStyle={style.label}
      getLabelText={({ route }) => route.key.toUpperCase()}
    />
  );
};

const style = StyleSheet.create({
  label: { fontSize: 22, fontWeight: '400' },
});

export default withTheme(TabBar);
