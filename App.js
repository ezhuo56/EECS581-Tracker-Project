/*
  Name: App.js
  Description: Creates the app for the user to see with buttons to interact with the different screens being the login page, sign up page, home page, user page, and the search page.
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/9/2022
  Date revised: 1/23/2023
  Preconditions: Importing react components 
  Postconditions: Creates app from imported components
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/

//Imports essentially everything used for the app
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
import Forgetpassword from './screens/password.js'
import Artists from './screens/artistBio.js';
import {lightColorScheme, darkColorScheme } from './colorschemes';
import { ColorSchemeContext, LoginContext, UserContext } from './context';
import UserSetUp from './screens/UserSetup';

//Create the app
export default function App(){
  //Creates the necessary vars (including a screens/page stack to navigate)
  const Stack = createNativeStackNavigator();
  const [colorScheme, setColorScheme] = useState(lightColorScheme);
  const colorSchemeData = [ colorScheme, setColorScheme ]
  const [loginInfo, setLogins] = useState([]);
  const loginData = [ loginInfo, setLogins ]
  const [userInfo, setUser] = useState([]);
  const userData = [ userInfo, setUser ]

//Create all the screens/pages for the app
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
                name = "forgetpasswordPage" 
                component = {Forgetpassword} 
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
                headerShown: true,
                title: "Settings",
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerStyle:{
                  backgroundColor: colorScheme.primaryColor,
                },
                }}  
              />
              <Stack.Screen 
              name = "UserSetupPage" 
              component = {UserSetUp} 
              options = {{
                headerShown: false,
                }}  
              />
              <Stack.Screen
                name = "artists"
                component = {Artists}
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