/*
  Name: searchBar.js
  Description: Create an artist bio
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 2/12/2023
  Date revised: 2/12/2023
  Preconditions: None
  Postconditions: None
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/

import {React, useContext, useState} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable, Image } from 'react-native';
import { ColorSchemeContext } from '../context';
import SearchBar from "../components/searchBar";

function Artists({ route, navigation}){
    
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <Text> item : {JSON.stringify(route.params)} </Text>
        </SafeAreaView>
    );
}

export default Artists;