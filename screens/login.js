/*
  Name: login.js
  Description: Makes the login page be able to navigated to with button taps from the user
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/11/2022
  Date revised: 4/13/2023
  Preconditions: Importing react components 
  Postconditions: Creates the login page from the imported components
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/

//Import everything used for the page
import { React, useState, useContext } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable, Image } from 'react-native';
import { ColorSchemeContext, LoginContext, UserContext, ExpoPushContext} from '../context';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, dataBase } from '../firebase';
import {collection, addDoc, doc, getDoc } from "firebase/firestore";
import {userData} from "../components/userData.js";
import {userConverter} from "../components/firebaseConverter"
import User from './user';
import { darkColorScheme, lightColorScheme, blueColorScheme } from '../colorschemes';
import { sendNotification } from '../notification';

//Setup Login
function Login({navigation}){
    //Create all necessary vars
    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);
    const [loginInfo, setLogins] = useContext(LoginContext);
    const [user, setUser] = useContext(UserContext);
    const [expoPushToken, setExpoPushToken] = useContext(ExpoPushContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //Create all needed functions (Explanation given if necessary)
    function navH(){
        navigation.navigate('homePage');
    }
    function navS(){
        navigation.navigate('signupPage');
    }
    function navForgetPass(){
        navigation.navigate('forgetpasswordPage')
    }
    function handleLogin(){
        sendNotification(expoPushToken, 'Login Attempt', 'There was an attempt to login to Big Bops on your device');
        getMusicInfo();

        signInWithEmailAndPassword( auth, email, password )
        .then( ( re ) => {
            setLogins(email);
            handleUser();
            navH();
            setEmail('');
            setPassword('');
        })
        .catch( ( re ) => {
            alert( re );
        })
    }

    async function getMusicInfo() {
        musicURL = "https://rss.applemarketingtools.com/api/v2/us/music/most-played/10/albums.json"
        let response = await fetch(musicURL, {
            method: "GET",
        });
        let jsonData = await response.json();
        let musicNames = [];
        jsonData['feed']['results'].map(function (result) {
            musicNames.push(result['name'])
        });
        sendNotification(expoPushToken, 'Most Played Music', 'Todays most played music includes: ' + musicNames.join(', '));
    }


    //Finds the user information on firebase
    async function handleUser(){
        const docRef = doc(dataBase, "users", auth.currentUser.uid).withConverter(userConverter);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            const UserLoggedIn = docSnap.data();
            setUser(UserLoggedIn);
            if(UserLoggedIn.colorScheme == 'blue'){
                setColorScheme(blueColorScheme);
            }
            else if(UserLoggedIn.colorScheme == 'dark'){
                setColorScheme(darkColorScheme);
            }
            else if(UserLoggedIn.colorScheme == 'light'){
                setColorScheme(lightColorScheme);
            } else {
                setColorScheme(lightColorScheme);
            }
        } else {
            alert("Error, the login user does not have information in the firestore data base. Log off and input their data manually.\n");
        }
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
        },
        input: {
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: 'white',
            padding: 5,
            margin: 5,
            width: 300,
        },
        loginBut: {
            width: 150,
            height: 35,
            marginTop: 25,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'darkred',
        },
        signupBut: {
            marginTop: 25,
            alignItems: 'center',
        },
        textL: {
            fontWeight: 'bold',
            color: 'white',
            fontSize: 16,
        },
        textS: {
            fontWeight: 'bold',
            color: 'blue',  
            fontSize: 12,
        },
        iconCont: {
            height: '45%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        Icon: {
            width: 150,
            height: 150,
        },
        center2: {
            alignItems: 'center',
            marginTop: -50,
            padding: 20,
        },
        title: {
            fontWeight: 'bold',
            fontSize: 28,
        }
    });

    //Create the Login page
    return(
        <View style = {styles.parent}>
            <View style = { styles.iconCont }>
                <Image source = { require ( '../img/BigBops.png' ) }
                       style = { styles.Icon }>
                </Image>
            </View>
            <View style = { styles.center2 }>
                <Text style = { styles.title }>Login</Text>
            </View>
            <View style = {styles.center}>
                <TextInput 
                    value = { email }
                    style = {styles.input}
                    placeholder = 'Email'
                    placeholderTextColor = {styles.input.placeholderTextColor}
                    onChangeText={(val) => setEmail(val)}
                />
                <TextInput 
                    value = { password }
                    style = {styles.input}
                    placeholder = 'Password'
                    placeholderTextColor = {styles.input.placeholderTextColor}
                    secureTextEntry={true}
                    onChangeText={(val) => setPassword(val)}
                />
                <Pressable style = { styles.loginBut } onPress = { handleLogin }>
                    <Text style = { styles.textL }> Login </Text>
                </Pressable>
                <Pressable style = {styles.signupBut } onPress = { navS } >
                    <Text style = { styles.textS }> Don't have a account?</Text>
                    <Text style = { styles.textS }> Signup </Text>
                </Pressable>
                <Pressable style = {styles.signupBut } onPress = { navForgetPass } >
                    <Text style = { styles.textS }> Forgotten password?</Text>
                    <Text style = { styles.textS }> Forget password </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Login