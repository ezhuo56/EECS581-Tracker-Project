/*
  Name: searchBar.js
  Description: Create an artist bio
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 2/12/2023
  Date revised: 4/23/2023
  Preconditions: Requires User to press a Search button, pushing data forwards to database & retreving
  Postconditions: Returns a biography of said pressed searched person
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/

import {React, useContext, useState, useEffect} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable, Image, Linking } from 'react-native';
import { ColorSchemeContext } from '../context';
import SearchBar from "../components/searchBar";
import { auth, dataBase } from '../firebase';
import {collection, addDoc, doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";

function Artists({ route, navigation}){
    function navBack(){
        navigation.navigate( 'searchPage' );
    }
    function urlSpot(){
        Linking.openURL( spot );
    }
    function urlYou(){
        Linking.openURL( you );
    }
    const bee = ``;

    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);
    const [artistName, setName ] = useState( JSON.stringify(route.params) );
    const [biography, setBio ] = useState( bee );
    const [spot, setSpot] = useState( '' );
    const [you, setYou] = useState( '' );


    useEffect( () => {
        const docRef = doc( dataBase, "Artists", JSON.parse(artistName) );
        onSnapshot( docRef, ( doc ) => {
            console.log( doc.data() );
            setBio( doc.get( "Bio" ) );
            setSpot( doc.get( "spotify" ) );
            setYou( doc.get( "youtube" ) );
        })
    });

    const styles = StyleSheet.create({
        profileBack: {
            padding: 0,
            width: '100%',
            backgroundColor: colorScheme.primaryColor, //'crimson',
            height: 150,
        },
        backButton: {
            marginTop: 100,
            width: 50,
            height: 50,
            backgroundColor: 'blue',
        },
        followSpot: {
            marginTop: 25,
            width: 100,
            height: 50,
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
        },  
        followYou: {
            marginTop: 25,
            width: 100,
            height: 50,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
        },  
        bioAlign: {
            alignItems: 'center',
            margin: 100,
        },
        icon: {
            resizeMode: 'stretch',
            width: 140,
            height: 140,
            borderRadius: 5,
            marginTop: -170,
        },
        bioDetails: {
            marginTop: 50,
        },
        bioText: {
            fontSize: 25,
            fontWeight: 'bold',
        }
    });

    return(
        <SafeAreaView>
        <View style={ styles.profileBack }>
            <Pressable style = { styles.backButton } onPress = { navBack }>
            </Pressable>
        </View>
        <View style = { styles.bioAlign }>
            <Image source = { JSON.parse(artistName) == "Backstreet Boys" ? backstreet : barry }style = { styles.icon }>
            </Image>
            <Text style = { styles.bioText } > {JSON.parse(artistName)} </Text>
            <View style = { styles.bioDetails }>
                <Text style = { styles.bioText }>
                    {biography}
                </Text>
            </View>
            <Pressable style = { styles.followSpot } onPress = { urlSpot } >
                <Text style = { styles.bioText } >
                    Spotify
                </Text>
            </Pressable>
            <Pressable style = { styles.followYou } onPress = { urlYou } >
                <Text style = { styles.bioText } >
                    Youtube
                </Text>
            </Pressable>
        </View>
        </SafeAreaView>
    );
}

export default Artists;