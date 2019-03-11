import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { withTheme } from '../core/themeProvider';

MainScreen = ({ theme }) => {
  return (
    <View style={[style.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[style.text, { color: theme.color }]}>MAIN PART</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default withTheme(MainScreen);
