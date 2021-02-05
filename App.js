import React from 'react';
import { StyleSheet, View } from 'react-native';
import FP from './components/FP';
import Login from './components/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <FP />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
