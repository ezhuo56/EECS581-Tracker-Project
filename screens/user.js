/*
  Name: user.js
  Description: Makes the user page be able to navigated to with button taps from the user
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/11/2022
  Date revised: 10/22/2022
  Preconditions: Importing react components 
  Postconditions: Creates the user page from the imported components provided by react native
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/
import {React, useState, useContext} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable } from 'react-native';
import { TouchableHighlight, TouchableOpacity, Image, ScrollView } from 'react-native';
import { ColorSchemeContext, UserContext, LoginContext} from '../context';
import NavBar from '../components/navBar.js';
import userData from "../components/userData.js";


//creates two functions to allow the user to navigate to either the home page or the login page
function User({navigation}){
    //Retrieves the current app color scheme
    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);
    const [user, setUser] = useContext(UserContext);
    const [loginInfo, setLogins] = useContext(LoginContext);

    function navU(){
        navigation.navigate('userPage');
    }
    function navH(){
        navigation.navigate('homePage');
    }
    function navS(){
        navigation.navigate('searchPage');
    }
    function navSet(){
        navigation.navigate('settingsPage');
    }
    function navL(){
        navigation.navigate('loginPage');
    }
    function navUS(){
        navigation.navigate('UserSetupPage');
    }

    //CSS style sheet for the page to make it look red with bold fonts
    const styles = StyleSheet.create({
        parent:{
            flex: 1,
            backgroundColor: colorScheme.backgroundColor,
        },  
        profileBack: {
            padding: 0,
            width: '100%',
            backgroundColor: colorScheme.primaryColor, //'crimson',
            height: 150,
        },
        infoCont: {
            alignItems: 'center',
        },
        backBut: {
            marginTop: 125,
            width: 75,
            height: 25,
            backgroundColor: colorScheme.primaryColor,
            alignItems: 'center',
            justifyContent: 'center',
        },
        backText: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
        },
        alignImg: {
            width: 140,
            height: 140,
            borderRadius: 100,
            marginTop: -70,
        },
        userName: {
            fontSize: 35,
            fontWeight: 'bold',
        },
        email: {
            fontSize: 15,
            color: 'black',
            padding: 15,
        },
        bottom: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 50,
            backgroundColor: 'red',
        },
        resize: {
            backgroundColor: 'crimson',
            alignItems: 'center',
            width: '50%',
            height: 25,
        },
        followCont: {
            alignItems: 'center',
        },
        followTitle: {
            padding: 5,
            alignItems: 'center',
            width: '55%',
            backgroundColor: 'crimson',
        },
        followBox: {
            width: '55%',
            height: 100,
            backgroundColor: 'grey',
        },
        gear: {
            marginTop: 100,
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colorScheme.primaryColor,
        },
        gearResize: {
            width: 35,
            height: 35,
        }
    })

    //style sheet for the app
const navBar = StyleSheet.create({
    containerB: {
        flexDirection: 'row',
        height: 50,
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    resizeUserB: {
        width: 30,
        height: 25,
    },
    resizeHomeB: {
        width: 50,
        height: 25,
    },
    resizeSearchB: {
        width: 25,
        height: 25,
    },
    userB: {
        height: '100%',
        width: '33.33%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorScheme.selectColor,
    },
    homeB: {
        height: '100%',
        width: '33.33%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorScheme.navBar,
    },
    searchB: {
        height: '100%',
        width: '33.33%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorScheme.navBar,
    }
});

    let darkGear = require ( '../img/gearIcon.png' );
    let lightGear = require ( '../img/gearIconWhite.png' );


//Created a barebones filler userpage, that may be altered later, but fulfills all that is needed
//Currently options button just takes user to settings page, and signout goes to login page
    return(
        <View style = { styles.parent }>
            <ScrollView>
                <View style = { styles.profileBack } >
                <Pressable style = { styles.gear } onPress = { navSet } >
                        <Image source = {(colorScheme.name == 'blue' ? lightGear : darkGear)}
                        style = { styles.gearResize }></Image>
                </Pressable>
                </View>
                <View style = { styles.infoCont } >
                    <Pressable onPress={navUS}>
                        <Image source = { require ( '../img/temp.png' ) }
                        style = { styles.alignImg }></Image>
                    </Pressable>
                    <Text style = { styles.userName }> {user.first + " " + user.second} </Text>
                    <Text style = { styles.email }> { user.email } </Text>
                    <View style = { styles.infoBack } >
                    </View>
                </View>
            </ScrollView>
            <View style = { navBar.containerB } >
                <Pressable style = { navBar.userB } onPress = { navU } >
                    <Image source = { require( '../img/userIcon.png' ) } 
                    style = { navBar.resizeUserB }
                    />
                </Pressable>
                <Pressable style = { navBar.homeB } onPress = { navH } >
                    <Image source = { require( '../img/homeIcon.png' ) } 
                    style = { navBar.resizeHomeB }   
                    />
                </Pressable>
                <Pressable style = { navBar.searchB } onPress = { navS } >
                    <Image source = { require( '../img/searchIcon.png' ) } 
                    style = { navBar.resizeSearchB }       
                    />
                </Pressable>
            </View>
        </View>
    );
}

export default User