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
import { React, useState, useContext } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable } from 'react-native';
import { ColorSchemeContext, LoginContext, UserContext } from '../context';

//creates two functions that would navigate to either the home page or the sign up page
function Login({navigation}){
    //Retrieves the current app color scheme
    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);
    const [loginInfo, setLogins] = useContext(LoginContext);
    const [user, setUser] = useContext(UserContext);

    function navH(){
        let loggedIn = false;
        loginInfo.forEach(login => {
            if(username == login.username && password == login.password) {
                setUser(login);
                navigation.navigate('homePage');
                loggedIn = true;
            }
        })
        if(!loggedIn) {
            alert("Username or password was incorrect");
        }
    }
    function navS(){
        navigation.navigate('signupPage');
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
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
        input: {
            borderWidth: 1,
            backgroundColor: 'white',
            padding: 8,
            margin: 10,
            width: 200,
            textAlign: 'center',
            fontWeight: 'bold',
        },
        inputHeader: {
            fontWeight: 'bold',
            color: colorScheme.textColor
        }
    })

    //creates two buttons that would allow the user to interact with to navigate to either the home page or the sign up page
    //Also creates two text inputs, one for a username and one for a password. The password utilizes secure text entry to hide the text
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
                <Text style = {styles.inputHeader}> Username </Text>
                <TextInput 
                    style = {styles.input}
                    placeholder = 'Enter Username'
                    placeholderTextColor = {styles.input.placeholderTextColor}
                    onChangeText={(val) => setUsername(val)}
                />
                <Text style = {styles.inputHeader}> Password </Text>
                <TextInput 
                    style = {styles.input}
                    placeholder = 'Enter Password'
                    placeholderTextColor = {styles.input.placeholderTextColor}
                    secureTextEntry={true}
                    onChangeText={(val) => setPassword(val)}
                />
            </View>
        </View>
    );
}

export default Login