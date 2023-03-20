/*
  Name: search.js
  Description: Makes the search page be able to navigated to with button taps from the user
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/11/2022
  Date revised: 3/20/2023
  Preconditions: Importing react components 
  Postconditions: Creates the search page from the imported components provided by react native
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/

//Import everything used for the page
import {React, useContext, useState} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable, Image } from 'react-native';
import { ColorSchemeContext } from '../context';
import SearchBar from "../components/searchBar";
import { useNavigation } from '@react-navigation/native';
import { auth, dataBase } from '../firebase';
import {collection, addDoc, doc, setDoc, getDocs, onSnapshot } from "firebase/firestore";

//Setup Search
function Search({navigation}){
    //Create all necessary vars
    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext); 
    const temp = useNavigation();

    //Create all needed functions (Explanation given if necessary)
    function navU(){
        navigation.navigate('userPage');
    }
    function navH(){
        navigation.navigate('homePage');
    }
    function navS(){
        navigation.navigate('searchPage');
    }

    //CSS Styling for the page
    const styles = StyleSheet.create({
        parent: {
            flex: 1,
            backgroundColor: colorScheme.backgroundColor,
        },
        center: {
            flex: 1,
            alignItems: 'center'
        },
        butCont: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start',
        },
        button: {
            width: 100,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'darkred',
            marginTop: -50,
        },
        text: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
        },
        screenText: {
            fontWeight: 'bold',
            color: colorScheme.textColor,
        },
        title:{
            marginTop: 50,
            fontSize: 30,
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
        }
    });

    const navBar = StyleSheet.create({
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
            backgroundColor: colorScheme.navBar,
        },
        homeB: {
            height: '100%',
            width: '33.33%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colorScheme.navBar,
        },
        searchB: {
            height: '100%',
            width: '33.33%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colorScheme.selectColor,
        }
    });

    //Create the search page
    return(
        <View style = { styles.parent }>
            <View style = {{ height: 75, backgroundColor: colorScheme.backgroundColor}}></View>
            <SearchBar/>
            <View style = { navBar.containerB } >
                <Pressable style = { navBar.userB } onPress = { navU } >
                    <Image source = { require( '../img/userIcon.png' ) } 
                        style = { navBar.resizeUserB }
                    />
                </Pressable>
                <Pressable style = { navBar.homeB } onPress = { navH } >
                    <Image source = { require( '../img/homeIcon.png' ) } 
                        style = { navBar.resizeHomeB }   
                    />
                </Pressable>
                <Pressable style = { navBar.searchB } onPress = { navS } >
                    <Image source = { require( '../img/searchIcon.png' ) } 
                        style = { navBar.resizeSearchB }       
                    />
                </Pressable>
            </View>
        </View>
    );
}

export default Search