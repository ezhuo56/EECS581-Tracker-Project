import React, { useState, Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';


export default function App(){
  const [time, setTime] = useState(0);
  const [timers, setTimers] = useState([]);

  function createTimer() {
    setTimers([...timers, <TimerComponent style = {styles.input} startTimeInSeconds={time} key={timers.length}/>])
  }

  return(
    <View style = {styles.container}>
      <View style = {styles.box}>
        <TextInput 
          style = {styles.input}
          placeholder = 'e.g. 600'
          onChangeText={(val) => setTime(val)}
          onSubmitEditing={(val) => createTimer()}
        />
        {timers}
        <Button title="CLEAR" onPress={() => {setTimers([])}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
  }
});