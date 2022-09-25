import React, { useState, Component } from 'react';
import reactDom from 'react-dom';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';
/*
//Couldn't implement the tabs b/c the packages wouldn't install
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
    <Tabs>
      <TabList>
          <Tab>TAB 1</Tab>
          <Tab>TAB 2</Tab>
          <Tab>TAB 3</Tab>
        </TabList>
        <TabPanel>
          <h2>TAB NO: 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>TAB NO:2</h2>
        </TabPanel>
        <TabPanel>
          <h2>TAB NO:3</h2>
        </TabPanel>
      </Tabs>
*/

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
        />
        {timers}
        <View style = {{flexDirection:"row"}}>
        <Button title="ADD" onPress={() => createTimer()}/>
        <Button title="CLEAR" onPress={() => {setTimers([])}}/>
        </View>
      
        
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
  },
  box: {
    width: '100%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  input: {
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 8,
    margin: 10,
    width: 200,
    textAlign: 'center',
  }
});

class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: parseInt(props.startTimeInSeconds, 10) || 60,
    };
  }

  render() {
    return (
        <View> 
            <Text style={this.props.style}>
                {this.formatTime(this.state.seconds)}
            </Text>
        </View>
    );
  }

  componentDidMount() {
    this.interval = setInterval(() => this.decrementTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  decrementTime() {
    if(this.state.seconds >= 0) {
        this.setState(state => ({
            seconds: state.seconds - 1
    }))};
    if(this.state.seconds == 0) {
        alert("Timer Ended");
    }
  }

  formatTime(timePassedInSeconds) {
    if(timePassedInSeconds < 0) {
        return "Timer Ended"
    }
    let hours = Math.floor(timePassedInSeconds / 3600);
    let minutes = Math.floor(timePassedInSeconds / 60) % 60;
    let seconds = timePassedInSeconds % 60;
    let returnArray = [hours, minutes, seconds]
        .map(time => String(time).padStart(2, '0'))
        .join(':');
    return returnArray
  }
}
