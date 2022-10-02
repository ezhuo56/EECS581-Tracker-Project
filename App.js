import React from 'react';
import { userState, Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import Search from './screens/search';
import Home from './screens/home';
import User from './screens/user';



export default function App(){
  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "homePage" component = {Home} />
        <Stack.Screen name = "userPage" component = {User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

  }
});