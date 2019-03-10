import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomTabBar } from 'react-navigation';

import { theme } from '../core/themeProvider';

const TabBar = props => {
  return (
    <BottomTabBar
      {...props}
      activeTintColor={theme.backgroundColor}
      labelStyle={style.label}
    />
  );
};

const style = StyleSheet.create({
  label: { fontSize: 18, fontWeight: '100', textTransform: 'uppercase' },
});

export default TabBar;
