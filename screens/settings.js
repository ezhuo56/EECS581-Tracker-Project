/*
  Name: settings.js
  Description: Makes the settings page be able to navigated to with button taps from the user
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/12/2022
  Date revised: 1/23/2023
  Preconditions: Importing react components 
  Postconditions: Creates the settings page from the imported components provided by react native
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/

//Import everything used for the page
import { React, useState, useContext } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable } from 'react-native';
import { lightColorScheme, darkColorScheme, blueColorScheme } from '../colorschemes';
import { ColorSchemeContext, UserContext } from '../context';
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from '../firebase';

//Setup Settings
function Settings({navigation}){
    //Create all necessary vars
    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);
    const [user, setUser] = useContext(UserContext);

    //Create all needed functions (Explanation given if necessary)
    function navU(){
        navigation.navigate('userPage', {styles: styles});
    }
    //Also includes the ability to signout, restoring to default settings
    function navL(){
        const auth = getAuth();
        signOut(auth).then(() => {
        }).catch((error) => {
            //Unable to signout
        });
        setColorScheme(lightColorScheme);
        navigation.navigate('loginPage');
    }
    //Changes colorscheme, later to retrieve the catered colorscheme of each user
    function changeColorScheme(){
        const db = getDatabase();
        let colorSchemeName = "";
        switch (colorScheme.name) {
            case 'light':
                setColorScheme(darkColorScheme);
                colorSchemeName = "dark";
                break;
            case 'dark':
                setColorScheme(blueColorScheme);
                colorSchemeName = "blue";
                break;
            case 'blue':
                setColorScheme(lightColorScheme);
                colorSchemeName = "light";
                break;
        }
        /*set(ref(db, 'users/' + auth.currentUser.uid), {
            first: user.first,
            second: user.second,
            email: user.email,
            colorScheme: colorSchemeName,
            userId: auth.currentUser.uid,
        })*/
    }

    //CSS Styling for the page
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
            backgroundColor: colorScheme.secondaryColor,
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
    });

    //Create the settings page
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