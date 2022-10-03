import React from 'react';
import { userState, Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './screens/search';
import Home from './screens/home';
import User from './screens/user';



export default function App(){
  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name = "homePage" 
          component = {Home} 
          options = {{
            title: 'Home',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'red', },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }, 
            }}  
          />
        <Stack.Screen 
          name = "userPage" 
          component = {User}
          options = {{
            title: 'Profile',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'red', },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }, 
            headerBackVisible: false,
            }}  
          />
        <Stack.Screen 
          name = "searchPage" 
          component = {Search} 
          options = {{
            title: 'Profile',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'red', },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }, 
            headerBackVisible: false,
            }}  
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

  }
});