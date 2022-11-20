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
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable, Image } from 'react-native';
import { ColorSchemeContext, LoginContext, UserContext} from '../context';
import { auth, dataBase } from '../firebase';
import {collection, addDoc, doc, setDoc } from "firebase/firestore";
import userData from '../components/userData';

//creates two functions that would navigate to either the home page or the sign up page
function UserSetUp({navigation}){
    //Retrieves the current app color scheme
    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);
    const [loginInfo, setLogins] = useContext(LoginContext);
    const [user, setUser] = useContext(UserContext);

    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')

    function navU(){
        navigation.navigate('userPage');
    }

    function updateUser() {
        var FirstName = firstName;
        var LastName = secondName;
        const docRef = collection(dataBase, "users");
        try
        {
                setDoc(doc(docRef, auth.currentUser.uid), {
                //userID: auth,
                first: FirstName,
                last: LastName
            });
        } catch(e) {
            console.error("Error adding to firebase: ", e);
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
        }
    })

    //creates two buttons that would allow the user to interact with to navigate to either the home page or the sign up page
    //Also creates two text inputs, one for a username and one for a password. The password utilizes secure text entry to hide the text
    return(
        <View style = {styles.parent}>
            <View style = { styles.iconCont }>
                <Image source = { require ( '../img/BigBops.png' ) }
                       style = { styles.Icon }></Image>
            </View>
            <View style = {styles.center}>
                <TextInput 
                    style = {styles.input}
                    placeholder = 'first Name'
                    placeholderTextColor = {styles.input.placeholderTextColor}
                    onChangeText={(val) => setFirstName(val)}
                />
                <TextInput 
                    style = {styles.input}
                    placeholder = 'last Name'
                    placeholderTextColor = {styles.input.placeholderTextColor}
                    onChangeText={(val) => setSecondName(val)}
                />
                <Pressable style = { styles.loginBut } onPress = { updateUser}>
                    <Text style = { styles.textL }> Save Data </Text>
                </Pressable>
                <Pressable style = { styles.loginBut } onPress = { navU}>
                    <Text style = { styles.textL }> go back </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default UserSetUp