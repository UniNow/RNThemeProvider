import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { theme } from '../core/themeProvider';

MainScreen = () => {
  return (
    <View style={[style.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[style.text, { color: theme.color }]}>Main Part</Text>
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
    textTransform: 'uppercase',
  },
});

export default MainScreen;
