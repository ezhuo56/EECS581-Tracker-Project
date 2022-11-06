/*
  Name: App.js
  Description: Creates the app for the user to see with buttons to interact with the different screens being the login page, sign up page, home page, user page, and the search page.
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/9/2022
  Date revised: 10/22/2022
  Preconditions: Importing react components 
  Postconditions: Creates app from imported components
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/
import React from 'react';
import { useState, Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './screens/search';
import Home from './screens/home';
import User from './screens/user';
import Login from './screens/login';
import Signup from './screens/signup';
import Settings from './screens/settings';
import {lightColorScheme, darkColorScheme} from './colorschemes';
import { ColorSchemeContext, LoginContext, UserContext } from './context';

//create the app to export to expo website which can simulate the app on our phone when a QR is scanned
export default function App(){
  const Stack = createNativeStackNavigator();

  //Sets up a color scheme to be used in the rest of the app
  const [colorScheme, setColorScheme] = useState(darkColorScheme);
  const colorSchemeData = [ colorScheme, setColorScheme ]
  const [loginInfo, setLogins] = useState([]);
  const loginData = [ loginInfo, setLogins ]
  const [userInfo, setUser] = useState([]);
  const userData = [ userInfo, setUser ]

//create the login page,sign up page, home page, user page, and search page with CSS style that would style it red with bold fonts
  return(
    <ColorSchemeContext.Provider value={colorSchemeData}>
      <LoginContext.Provider value={loginData}>
        <UserContext.Provider value={userData}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen 
                name = "loginPage" 
                component = {Login} 
                options = {{
                  headerShown: false,
                  }}  
              />
              <Stack.Screen 
                name = "signupPage" 
                component = {Signup} 
                options = {{
                  headerShown: false,
                  }}  
              />
              <Stack.Screen 
                name = "homePage" 
                component = {Home} 
                options = {{
                  headerShown: false,
                  }}  
                />
              <Stack.Screen 
                name = "userPage" 
                component = {User}
                options = {{
                  headerShown: false,
                  }}  
                />
              <Stack.Screen 
                name = "searchPage" 
                component = {Search} 
                options = {{
                  headerShown: false,
                  }}  
                />
                <Stack.Screen 
                name = "settingsPage" 
                component = {Settings} 
                options = {{
                  headerShown: false,
                  }}  
                />
            </Stack.Navigator>
          </NavigationContainer>
        </UserContext.Provider>
      </LoginContext.Provider>
    </ColorSchemeContext.Provider>
  );
}