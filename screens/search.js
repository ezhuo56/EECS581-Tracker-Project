/*
  Name: search.js
  Description: Makes the search page be able to navigated to with button taps from the user
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/11/2022
  Date revised: 10/12/2022
  Preconditions: Importing react components 
  Postconditions: Creates the search page from the imported components provided by react native
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/
import {React, useContext, useState} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable } from 'react-native';
import { ColorSchemeContext } from '../context';
import SearchBar from "../components/searchBar";

//create a function that would allow the user to navigate to the home page 
function Search({navigation}){
    //Retrieves the current app color scheme
    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext); 

    //CSS style sheet for the page to make it look red with bold fonts
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
    })

    function navH(){
        navigation.navigate('homePage');
    }
    //create a button that allows the user to interact to navigate back to the home page 
    return(
        <View style = { styles.parent }>
            <View style = {{ height: 25, backgroundColor: 'red'}}></View>
            <View style = {{ height: 100, backgroundColor: 'red', alignItems: 'center',}}>
                <Text style = { styles.title }>Search</Text>
            </View>
            <Pressable style={styles.button} onPress={navH}>
                    <Text style={styles.text}> Home </Text>
            </Pressable>
            <SearchBar/>
        </View>
    );
}

export default Search