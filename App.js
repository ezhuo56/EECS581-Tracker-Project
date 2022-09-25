import React, { useState } from 'react';
import reactDom from 'react-dom';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';

export default function App(){
  const [time, setTime] = useState(0);
  return(
    <SafeAreaView style = {styles.container}>
      <View style = {styles.box}>
        <TextInput 
          style = {styles.input}
          placeholder = 'e.g. 600'
          onSubmitEditing={(val) => setTime(val)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '100%',
    height: '20%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
