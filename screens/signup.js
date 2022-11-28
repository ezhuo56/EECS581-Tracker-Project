/*
  Name: signup.js
  Description: Makes the signup page be able to navigated to with button taps from the user
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/11/2022
  Date revised: 11/20/2022
  Preconditions: Importing react components 
  Postconditions: Creates the signup page from the imported components provided by react native
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/
import { React, useContext, useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable, Image } from 'react-native';
import { ColorSchemeContext, LoginContext, UserContext} from '../context';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 
import { auth, dataBase } from '../firebase';
import userData from '../components/userData';
import userConverter from '../components/firebaseConverter';

//create a function that would allow the user to navigate to the login page
function Signup({navigation}){
    //Retrieves the current app color scheme
    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);
    const [loginInfo, setLogins] = useContext(LoginContext);
    const [user, setUser] = useContext(UserContext);
    const[ password, setPassword ] = useState('');
    const[ password2, setPassword2 ] = useState('');
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');

    //create a sign up textbox using the Firebase methods to create a new user to store into Firebase catches password errors
    function handleSignUp(){
        createUserWithEmailAndPassword( auth, loginInfo, password )
            .then( ( re ) => {
                console.log( re );
                updateUser();
                navL();
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

    //sends the user data to a userConverter to retrieve information from the database
    async function updateUser() {
        const docRef = doc(dataBase, "users", auth.currentUser.uid).withConverter(userConverter);
        
        await setDoc(docRef, new userData(firstName, secondName, loginInfo));
        setUser(new userData(firstName, secondName, loginInfo));
    }

    //checks if the passwords match if not give an error
    function checkUser(){
        if( password == password2 ){
            handleSignUp();
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
    })
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

export default Signup