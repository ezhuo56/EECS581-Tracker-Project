/*
  Name: forgetpassword.js
  Description: Makes the the forgetpassword screen to reset the user's password
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 11/30/2022
  Date revised: 11/30/2022
  Preconditions: Importing react components 
  Postconditions: Creates the forgetpassword from the imported components
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/
import { React, useContext, useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable, Image } from 'react-native';
import { ColorSchemeContext, LoginContext, UserContext} from '../context';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, getAuth } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 
import { auth, dataBase } from '../firebase';
import userData from '../components/userData';
import userConverter from '../components/firebaseConverter';
import { FirebaseError } from 'firebase/app';





function Forgetpassword({navigation})
{
    //create variables to send out password reset link to email
    const [passEmail, setpassEmail] = useState('');
    /*function sendPassLink()
    {
        
        sendPasswordResetEmail(auth,setpassEmail);
         
    
    }*/
    //function to check for send password reset link to email is working correctly
    function sendPassLink()
    {
        sendPasswordResetEmail(auth,passEmail)
        .then((re)=>
        {
            console.log( re ); 
            alert("password email sent!");  
        })
        .catch((error) =>
        {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
 
    
    //navigate back to the homepage
    function navL()
    {
        navigation.navigate('loginPage');
    }
    return(
        <View style = {styles.parent}>
            <View style = { styles.iconCont }>
                <Image source = { require ( '../img/BigBops.png' ) }
                       style = { styles.Icon }></Image>
                  <TextInput
                 style = {styles.input}
                 placeholder = 'Email'
                 placeholderTextColor = {styles.input.placeholderTextColor}
                 onChangeText={(val)=> setpassEmail(val)}
                 />     
                  <Pressable style = { styles.signupBut} onPress = {sendPassLink}>
                    <Text>Reset Password</Text>
                    </Pressable>      
                <Pressable style = { styles.cancel } onPress = { navL }>
                    <Text> Cancel </Text>
                     
                </Pressable>
                
            </View>
        </View>
        


    );
}
 
  

const styles = StyleSheet.create({
    parent: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        
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
})
export default Forgetpassword