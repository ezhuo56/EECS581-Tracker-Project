/*
  Name: Timer.js
  Description: A timer component to be used in the rest of the app.
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 9/24/2022
  Date revised: 10/12/2022
  Preconditions: Importing react components 
  Postconditions: Creates component with the react components
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: parseInt(props.startTimeInSeconds, 10) || 60,
    };
  }

  //Renders the timer by formatting the time into H:M:S format
  render() {
    return (
        <View> 
            <Text style={this.props.style}>
                {this.formatTime(this.state.seconds)}
            </Text>
        </View>
    );
  }

  //Sets the interval that decrementTime() is called (1 second)
  componentDidMount() {
    this.interval = setInterval(() => this.decrementTime(), 1000);
  }

  //Clears the interval with the component unmounts
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  //Decrements the time remaining every second, sending an alert when the timer ends
  decrementTime() {
    if(this.state.seconds >= 0) {
        this.setState(state => ({
            seconds: state.seconds - 1
    }))};
    if(this.state.seconds == 0) {
        alert("Timer Ended");
    }
  }

  //Formats time from seconds to H:M:S format
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

export default TimerComponent;