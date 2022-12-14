/*
  Name: settings.js
  Description: Makes the settings page be able to navigated to with button taps from the user
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/12/2022
  Date revised: 11/20/2022
  Preconditions: Importing react components 
  Postconditions: Creates the settings page from the imported components provided by react native
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/
import { React, useState, useContext } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable } from 'react-native';
import { lightColorScheme, darkColorScheme, blueColorScheme } from '../colorschemes';
import { ColorSchemeContext, UserContext } from '../context';
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from '../firebase';

//Creates a function to navigate to the user page
function Settings({navigation}){
    //Retrieves the current app color scheme and a function to set it for the rest of the app
    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);
    const [user, setUser] = useContext(UserContext);

    function navU(){
        navigation.navigate('userPage', {styles: styles});
    }

    function navL(){
        //right here add in sign out function to delete the current user data
        const auth = getAuth();
        signOut(auth).then(() => {
         //the user has been signed out
        }).catch((error) => {
         //didn't sign out
        });
        //Reset color scheme to default
        setColorScheme(lightColorScheme);
        //return back to login page
        navigation.navigate('loginPage');
    }

    //Function to change the color scheme of the whole app
    function changeColorScheme() {
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