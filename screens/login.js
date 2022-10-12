/*
  Name: login.js
  Description: Makes the login page be able to navigated to with button taps from the user
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/11/2022
  Date revised: 10/12/2022
  Preconditions: Importing react components 
  Postconditions: Creates the login page from the imported components
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable } from 'react-native';
//creates two functions that would navigate to either the home page or the sign up page
function Login({navigation}){
    function navH(){
        navigation.navigate('homePage');
    }
    function navS(){
        navigation.navigate('signupPage');
    }
//creates two buttons that would allow the user to interact with to navigate to either the home page or the sign up page
    return(
        <View style = {styles.parent}>
            <View style = {styles.butCont}>
                <Pressable style={styles.button} onPress={navH}>
                    <Text style={styles.text}> Login </Text>
                </Pressable>
                <Pressable style={styles.button} onPress={navS}>
                    <Text style={styles.text}> Signup </Text>
                </Pressable>
            </View>
            <View style = {styles.center}>
                <Text>Login</Text>
            </View>
        </View>
    );
}
//CSS style sheet for the page to make it look red with bold fonts
const styles = StyleSheet.create({
    parent: {
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        width: '50%',
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
})

export default Login