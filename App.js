import { StatusBar } from 'expo-status-bar';
import React from 'react';
import React, { useState } from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const App = () => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Add Timer",
      "Add the amount of time you want to count down to",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    return (
      <View style={styles.container}>
        <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
        </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
