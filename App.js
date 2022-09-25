import React, { useState, Component } from 'react';
import reactDom from 'react-dom';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';

export default function App(){
  const [time, setTime] = useState(0);
  return(
    <View style = {styles.container}>
      <View style = {styles.box}>
        <TextInput 
          style = {styles.input}
          placeholder = 'e.g. 600'
          onChangeText={(val) => setTime(val)}
          onSubmitEditing={(val) => addTimer(time)}
        />
        <TimerComponent></TimerComponent>
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

function addTimer(val){
  const abc = React.createElement(Text, { style: 'input'}, 'lets go');
  reactDom.render(abc, useRef());

  alert('yikes');
}

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
            <Text>
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
