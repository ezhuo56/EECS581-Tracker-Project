/*
  Name: settings.js
  Description: Makes the settings page be able to navigated to with button taps from the user
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/12/2022
  Date revised: 10/12/2022
  Preconditions: Importing react components 
  Postconditions: Creates the settings page from the imported components provided by react native
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/
import { React, useState, useContext } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable } from 'react-native';
import { lightColorScheme, darkColorScheme } from '../colorschemes';
import { ColorSchemeContext } from '../context';

//Creates a function to navigate to the user page
function Settings({navigation}){
    //Retrieves the current app color scheme and a function to set it for the rest of the app
    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);

    //CSS style sheet for the page to make it look red with bold fonts
    const styles = StyleSheet.create({
        parent: {
            height: '100%',
            width: '100%',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colorScheme.backgroundColor,
        },
        center: {
            flex: 1,
            alignItems: 'center',
            color: colorScheme.textColor,
        },
        butCont: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start',
        },
        button: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 0,
            elevation: 3,
            backgroundColor: 'darkred',
        },
        text: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
        },
        screenButton: {
            marginBottom: '100%',
            width: '60%',
            height: '5%',
            backgroundColor: 'black',
            alignItems: 'center',
            display: 'flex',
            color: 'white',
        },
    })

    function navU(){
        navigation.navigate('userPage', {styles: styles});
    }
    //Function to change the color scheme of the whole app
    function changeColorScheme() {
        if(colorScheme.darkMode) {
            setColorScheme(lightColorScheme);
        }
        else {
            setColorScheme(darkColorScheme);
        }
    }
    //create buttons that would allow the user to interact with to access their user page
    return(
        <View style = {styles.parent}>
            <View style = {styles.butCont}>
                <Pressable style={styles.button} onPress={navU}>
                    <Text style={styles.text}> User </Text>
                </Pressable>
            </View>
            <View style = {styles.screenButton}>
                <Button title="Switch Color Schemes" color = 'white' onPress={() => {
                    changeColorScheme();
                }}/>
            </View>
        </View>
    );
}

export default Settings