import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import FeatureList from './components/FeatureList';
import FP from './components/FP';
import Login from './components/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <FeatureList />
      <Login />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
});
