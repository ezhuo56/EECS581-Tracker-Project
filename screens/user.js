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
import {React, useContext} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable } from 'react-native';
import { TouchableHighlight, TouchableOpacity, Image, ScrollView } from 'react-native';
import { ColorSchemeContext, UserContext } from '../context';
import NavBar from '../components/navBar.js';

//creates two functions to allow the user to navigate to either the home page or the login page
function User({navigation}){
    //Retrieves the current app color scheme
    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);
    const [user, setUser] = useContext(UserContext);

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

    //CSS style sheet for the page to make it look red with bold fonts
    const styles = StyleSheet.create({
        parent:{
            flex: 1,
            backgroundColor: colorScheme.backgroundColor,
        },  
        profileBack: {
            padding: 0,
            width: '100%',
            backgroundColor: 'crimson',
            height: 150,
        },
        infoCont: {
            alignItems: 'center',
        },
        backBut: {
            marginTop: 125,
            width: 75,
            height: 25,
            backgroundColor: 'darkred',
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
            color: 'grey',
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
            marginTop: 150,
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'crimson',
        },
        gearResize: {
            width: 35,
            height: 35,
        }
    })

//Created a barebones filler userpage, that may be altered later, but fulfills all that is needed
//Currently options button just takes user to settings page, and signout goes to login page
    return(
        <View style = { styles.parent }>
            <ScrollView>
                <View style = { styles.profileBack } >
                <Pressable style = { styles.gear } onPress = { navSet } >
                        <Image source = { require ( '../img/gearIcon.png' ) }
                        style = { styles.gearResize }></Image>
                </Pressable>
                </View>
                <View style = { styles.infoCont } >
                    <Image source = { require ( '../img/temp.png' ) }
                    style = { styles.alignImg }></Image>
                    <Text style = { styles.userName }> {user.firstname + ' ' + user.lastname} </Text>
                    <Text style = { styles.email }> abc@123.gmail.com </Text>
                    <View style = { styles.infoBack } >
                    </View>
                </View>
                <View style = { styles.followCont } >
                    <View style = { styles.followTitle } >
                        <Text style = {{ fontSize: 15, fontWeight: 'bold', color: 'white' }}> Following </Text>
                    </View>
                    <View style = { styles.followBox } >
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
        backgroundColor: 'lightblue',
    },
    homeB: {
        height: '100%',
        width: '33.33%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    searchB: {
        height: '100%',
        width: '33.33%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    }
});

export default User