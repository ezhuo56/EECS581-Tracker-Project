/*
  Name: signup.js
  Description: Makes the signup page be able to navigated to with button taps from the user
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/11/2022
  Date revised: 10/12/2022
  Preconditions: Importing react components 
  Postconditions: Creates the signup page from the imported components provided by react native
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/
import { React, useContext, useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable } from 'react-native';
import { ColorSchemeContext, LoginContext } from '../context';
//create a function that would allow the user to navigate to the login page
function Signup({navigation}){
    //Retrieves the current app color scheme
    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);
    const [loginInfo, setLogins] = useContext(LoginContext);
    const[newUsername, createnewUsername] = useState('')
    const[newPassword, createnewPass] = useState('')
    const[newPassword1, createnewPass2] = useState('')

    function navC(){
        navigation.navigate('loginPage');
    }

    function navL(){
        if(newPassword != newPassword1) {
            alert("Passwords must match");
            return;
        }
        else {
            loginInfo.forEach(login => {
                if(login.username == newUsername) {
                    alert("Username already exists");
                }
                return;
            })
            let newLogin = {
                'username': newUsername,
                'password': newPassword,
            }
            setLogins(loginInfo.concat(newLogin));
            navigation.navigate('loginPage');
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
        input: {
            borderWidth: 1,
            backgroundColor: 'white',
            padding: 8,
            margin: 10,
            width: 200,
            textAlign: 'center',
            fontWeight: 'bold',
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
            color: colorScheme.textColor
        }
    })
    return(
        <View style = {styles.parent}>
            <View style = {styles.butCont}>
                <Pressable style={styles.button} onPress={navC}>
                    <Text style={styles.text}> Cancel </Text>
                </Pressable>
                <Pressable style={styles.button} onPress={navL}>
                    <Text style={styles.text}> Signup </Text>
                </Pressable>
            </View>
            <View style = {styles.center}>
            
                 <TextInput
                 style = {styles.input}
                 placeholder = 'Enter Username'
                 placeholderTextColor = {styles.input.placeholderTextColor}
                 onChangeText={(val)=> createnewUsername(val)}
                 />
                     <TextInput
                 style = {styles.input}
                 placeholder = 'Enter Password'
                 placeholderTextColor = {styles.input.placeholderTextColor}
                 secureTextEntry={true}
                 onChangeText={(val)=> createnewPass(val)}
                 />
                <TextInput
                 style = {styles.input}
                 placeholder = 'Reenter Password'
                 placeholderTextColor = {styles.input.placeholderTextColor}
                 secureTextEntry={true}
                 onChangeText={(val)=> createnewPass2(val)}
                 />
            </View>
        </View>
        


    );
}

export default Signup