/*
  Name: SignIn.js
  Description: Makes the signup page be able to navigated to with button taps from the user
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 11/14/2022
  Date revised: 11/14/2022
  Preconditions: Importing react components 
  Postconditions: Creates the signIn page from the imported components provided by react native
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/
/*
import { React, useContext, useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable } from 'react-native';
import { ColorSchemeContext, LoginContext } from '../context';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

//create a function that would allow the user to navigate to the login page
function SignIn({navigation}){
    //Retrieves the current app color scheme
    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);
    const [loginInfo, setLogins] = useContext(LoginContext);
    const[ email, setEmail ] = useState('');
    const[ password, setPassword ] = useState('');
    const[ password2, setPassword2 ] = useState('');

    function handleSignIn(){
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log( userCredential );
                navL();
                // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log( re );
            errorCode = re.code;
            if(errorCode == 'auth/email-already-in-use') {
                alert("The email provided is already in use")
            }
            else if(errorCode == 'auth/invalid-email') {
                alert("The email provided is invalid")
            }
            else if(errorCode == 'auth/weak-password') {
                alert("The password provided is too weak (Must be at least 6 characters long)")
            }
            else {
                alert("An error occured when creating your account")
            }
        });
    }

    function checkUser(){
        if( password == password2 ){
            handleSignIn();
        } else {
            alert("The passwords provided must match")
        }
    }

    function navL(){
        navigation.navigate('loginPage');
    }

    //CSS style sheet for the page to make it look red with bold fonts
    const styles = StyleSheet.create({
        parent: {
            height: '100%',
            width: '100%',
            alignItems: 'center',
            backgroundColor: colorScheme.backgroundColor,
        },
        center: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        input: {
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: 'white',
            padding: 8,
            margin: 10,
            width: 200,
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
        },
        signupBut: {
            backgroundColor: 'crimson',
            borderRadius: 5,
            width: 100,
            height: 25,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
        },
        signupT: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
        },
        cancel: {
            marginTop: 25,

        }
    })
    return(
        <View style = {styles.parent}>
            <View style = {styles.center}>
                 <TextInput
                 style = {styles.input}
                 placeholder = 'Email'
                 placeholderTextColor = {styles.input.placeholderTextColor}
                 onChangeText={(val)=> setEmail(val)}
                 />
                <TextInput
                 style = {styles.input}
                 placeholder = 'Enter Password'
                 placeholderTextColor = {styles.input.placeholderTextColor}
                 secureTextEntry={true}
                 onChangeText={(val)=> setPassword(val)}
                 />

                 <TextInput
                 style = {styles.input}
                 placeholder = 'Re-enter Password'
                 placeholderTextColor = {styles.input.placeholderTextColor}
                 secureTextEntry={true}
                 onChangeText={(val)=> setPassword2(val)}
                 />

                <Pressable style = { styles.signupBut } onPress = { checkUser }>
                    <Text style = { styles.signupT } > Signup </Text>
                </Pressable>
                <Pressable style = { styles.cancel } onPress = { navL }>
                    <Text> Cancel </Text>
                </Pressable>
            </View>
        </View>
        


    );
}

/*<TextInput
style = {styles.input}
placeholder = 'First Name'
placeholderTextColor = {styles.input.placeholderTextColor}
onChangeText={(val)=> creatFirstname(val)}
/> 
<TextInput
style = {styles.input}
placeholder = 'Last Name'
placeholderTextColor = {styles.input.placeholderTextColor}
onChangeText={(val)=> creatLastname(val)}
/> 
<TextInput
style = {styles.input}
placeholder = 'Reenter Password'
placeholderTextColor = {styles.input.placeholderTextColor}
secureTextEntry={true}
onChangeText={(val)=> createnewPass2(val)}
/>*/


//export default SignIn
