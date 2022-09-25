import React, { Component } from 'react';
import { View, Text } from 'react-native';

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

export default TimerComponent;