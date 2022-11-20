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

    function navU(){
        navigation.navigate('userPage', {styles: styles});
    }

    function navL(){
        navigation.navigate('loginPage');
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

    //CSS style sheet for the page to make it look red with bold fonts
    const styles = StyleSheet.create({
        parent: {
            height: '100%',
            width: '100%',
            backgroundColor: colorScheme.backgroundColor,
        },
        center: {
            flex: 1,
            alignItems: 'center',
            color: colorScheme.textColor,
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
            height: '5%',
            backgroundColor: 'black',
            alignItems: 'center',
            display: 'flex',
            color: 'white',
        },
        title:{
            marginTop: 50,
            fontSize: 30,
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
        }
    })

    //create buttons that would allow the user to interact with to access their user page
    return(
        <View style = {styles.parent}>
            <Pressable style = { styles.button } onPress={navL}>
                <Text style={styles.text}> Signout </Text>
            </Pressable>
            <View style = {styles.screenButton}>
                <Button title="Switch Color Schemes" color = 'white' onPress={() => {
                    changeColorScheme();
                }}/>
            </View>
        </View>
    );
}

export default Settings