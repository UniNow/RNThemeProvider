import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

SettingsScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Settings Part</Text>
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

export default SettingsScreen;
