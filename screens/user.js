/*
  Name: user.js
  Description: Makes the user page be able to navigated to with button taps from the user
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/11/2022
  Date revised: 10/16/2022
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
import { ColorSchemeContext } from '../context';
//creates two functions to allow the user to navigate to either the home page or the login page
function User({navigation}){
    //Retrieves the current app color scheme
    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);

    function navH(){
        navigation.navigate('homePage');
    }
    function navL(){
        navigation.navigate('loginPage');
    }
    function navS(){
        navigation.navigate('settingsPage');
    }

    //CSS style sheet for the page to make it look red with bold fonts
    const styles = StyleSheet.create({
        parent:{
            flex: 1,
            backgroundColor: colorScheme.backgroundColor,
        },  
        profileBack: {
            alignItems: 'flex-end',
            padding: 0,
            width: '100%',
            backgroundColor: 'red',
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
            marginBottom: 10,
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
        }
    })

//Created a barebones filler userpage, that may be altered later, but fulfills all that is needed
//Currently options button just takes user to settings page, and signout goes to login page
    return(
        <View style = { styles.parent }>
            <ScrollView>
                <View style = { styles.profileBack } >
                    <Pressable style = { styles.backBut } onPress = { navH }>
                    <Text style = { styles.backText } > Home </Text>
                    </Pressable>
                </View>
                <View style = { styles.infoCont } >
                    <Image source = { require ( '../img/temp.png' ) }
                    style = { styles.alignImg }></Image>
                    <Text style = { styles.userName }> Bob Jones </Text>
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
            <View style = { styles.bottom } >
                <Pressable style = { styles.resize } onPress = { navS }>
                    <Text style = { styles.backText } > Options </Text>
                </Pressable>
                <Pressable style = { styles.resize } onPress = { navL }>
                    <Text style = { styles.backText } > Signout </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default User