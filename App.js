import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
// import FeatureList from './components/FeatureOverview/FeatureList/index';
import FP from './pages/FrontPage/index';
import Login from './pages/Login/index';
import GReg from './pages/Registration/index';
import SReg from './pages/SRegistration/index';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      {/* <FeatureList /> */}
      {/* <FP></FP> */}
      {/* <Login /> */}
      <GReg/>
      <SReg/>
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    color: "purple"
  },
});
