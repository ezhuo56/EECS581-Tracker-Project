/*
  Name: navBar.js
  Description: navigates the entire app
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 11/20/2022
  Date revised: 11/20/2022
  Preconditions: Importing userdata
  Postconditions: Create new user information given from app
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/
import { React, useContext } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable, Image } from 'react-native';
import { ColorSchemeContext } from '../context';

function NavBar( { navUser, navHome, navSearch } ){
    return(
        <View style = { stylesB.containerB } >
            <Pressable style = { stylesB.userB } onPress = { navU } >
                <Image source = { require( '../img/userIcon.png' ) } 
                style = { stylesB.resizeUserB }
                />
            </Pressable>
            <Pressable style = { stylesB.homeB } onPress = { navH } >
                <Image source = { require( '../img/homeIcon.png' ) } 
                style = { stylesB.resizeHomeB }   
                />
            </Pressable>
            <Pressable style = { stylesB.searchB } onPress = { navS } >
                <Image source = { require( '../img/searchIcon.png' ) } 
                style = { stylesB.resizeSearchB }       
                />
            </Pressable>
        </View>
    );
}

const stylesB = StyleSheet.create({
    containerB: {
        flexDirection: 'row',
        height: 50,
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    resizeUserB: {
        width: 30,
        height: 25,
    },
    resizeHomeB: {
        width: 50,
        height: 25,
    },
    resizeSearchB: {
        width: 25,
        height: 25,
    },
    userB: {
        height: '100%',
        width: '33.33%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    homeB: {
        height: '100%',
        width: '33.33%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    searchB: {
        height: '100%',
        width: '33.33%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    }
});

export default NavBar;