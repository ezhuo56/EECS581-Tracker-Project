/*
  Name: signup.js
  Description: Makes the signup page be able to navigated to with button taps from the user
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/11/2022
  Date revised: 1/23/2023
  Preconditions: Importing react components 
  Postconditions: Creates the signup page from the imported components provided by react native
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/

//Import everything used for the page
import { React, useContext, useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable, Image } from 'react-native';
import { ColorSchemeContext, LoginContext, UserContext} from '../context';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 
import { auth, dataBase } from '../firebase';
import userData from '../components/userData';
import userConverter from '../components/firebaseConverter';

//Setup Signup
function Signup({navigation}){
    //Create all necessary vars
    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);
    const [loginInfo, setLogins] = useContext(LoginContext);
    const [user, setUser] = useContext(UserContext);
    const[ password, setPassword ] = useState('');
    const[ password2, setPassword2 ] = useState('');
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');

    //Create all needed functions (Explanation given if necessary)
    function navL(){
        navigation.navigate('loginPage');
    }
    //Checks whether passwords match
    function checkUser(){
        if( password == password2 ){
            handleSignUp();
        } else {
            alert("The passwords provided must match")
        }
    }
    async function updateUser() {
        const docRef = doc(dataBase, "users", auth.currentUser.uid).withConverter(userConverter);
        await setDoc(docRef, new userData(firstName, secondName, loginInfo));
        setUser(new userData(firstName, secondName, loginInfo));
    }
    //Sends an email verification link
    function verification(){
        sendEmailVerification( auth.currentUser )
            .then( ( re ) => {
                console.log( re );
            })
            .catch( ( err ) => {
                console.log( err );
            });
        navL();
    }
    //Signs the user up to firebase, given that conditions are met
    function handleSignUp(){
        createUserWithEmailAndPassword( auth, loginInfo, password )
            .then( ( re ) => {
                updateUser();
            })
            .catch( ( re ) => {
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

    //CSS Styling for the page
    const styles = StyleSheet.create({
        parent: {
            height: '100%',
            width: '100%',
            alignItems: 'center',
            backgroundColor: colorScheme.backgroundColor,
        },
        center: {
            flex: 1,
            marginTop: -100,
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

        },
        iconCont:{
            height: '45%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        Icon: {
            width: 150,
            height: 150,
        },
        title: {
            fontWeight: 'bold',
            fontSize: 28,
            padding: 20,
        }
    });

    //Create the signup page
    return(
        <View style = {styles.parent}>
            <View style = { styles.iconCont }>
                <Image source = { require ( '../img/BigBops.png' ) }
                       style = { styles.Icon }></Image>
            </View>
            <View style = {styles.center}>
                <Text style = {styles.title}> Create Account </Text>
                 <TextInput
                    style = {styles.input}
                    placeholder = 'First Name'
                    placeholderTextColor = {styles.input.placeholderTextColor}
                    onChangeText={(val)=> setFirstName(val)}
                 />
                 <TextInput
                    style = {styles.input}
                    placeholder = 'Last Name'
                    placeholderTextColor = {styles.input.placeholderTextColor}
                    onChangeText={(val)=> setSecondName(val)}
                 />
                 <TextInput
                    style = {styles.input}
                    placeholder = 'Email'
                    placeholderTextColor = {styles.input.placeholderTextColor}
                    onChangeText={(val)=> setLogins(val)}
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
                <Pressable style = { styles.signupBut } onPress = { verification }>
                    <Text style = { styles.signupT } > Verify </Text>
                </Pressable>
                <Pressable style = { styles.cancel } onPress = { navL }>
                    <Text> Cancel </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Signup