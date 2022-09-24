import React from 'react';
import reactDom from 'react-dom';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const App = () => (
  <View style = {styles.timeCont}>
    <View style = {styles.box}>

    </View>
    <View style = {styles.box}>

    </View>
  </View>
  
);

const styles = StyleSheet.create({
  timeCont: {
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '100%',
    height: '20%',
    backgroundColor: 'blue',
    marginTop: '5dp',
  }
});

export default App;