/*
  Name: searchBar.js
  Description: Create an artist bio
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 2/12/2023
  Date revised: 3/27/2023
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
    function urlRedirect(){
        Linking.openURL( url );
    }
    const bee = `
    According to all known laws
    of aviation,
    
      
    there is no way a bee
    should be able to fly.
    
      
    Its wings are too small to get
    its fat little body off the ground.
    
      
    The bee, of course, flies anyway
    
      
    because bees don't care
    what humans think is impossible.
    
      
    Yellow, black. Yellow, black.
    Yellow, black. Yellow, black.`;

    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);
    const [artistName, setName ] = useState( JSON.stringify(route.params) );
    const [biography, setBio ] = useState( bee );
    const [url, setUrl] = useState( '' );

    useEffect( () => {
        const docRef = doc( dataBase, "Artists", JSON.parse(artistName) );
        onSnapshot( docRef, ( doc ) => {
            console.log( doc.data() );
            setBio( doc.get( "Bio" ) );
            setUrl( doc.get( "url" ) );
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
        followButton: {
            width: 100,
            height: 100,
            backgroundColor: 'red',
        },  
        bioAlign: {
            alignItems: 'center',
        },
        icon: {
            width: 140,
            height: 140,
            borderRadius: 0,
            marginTop: -70,
        },
        bioDetails: {
            marginTop: 50,
        }
    });

    return(
        <SafeAreaView>
        <View style={ styles.profileBack }>
            <Pressable style = { styles.backButton } onPress = { navBack }>
            </Pressable>
        </View>
        <View style = { styles.bioAlign }>
            <Image source = { require ( '../img/temp.png' ) } style = { styles.icon }>
            </Image>
            <Text> {JSON.parse(artistName)} </Text>
            <Pressable style = { styles.followButton } onPress = { urlRedirect } >
            </Pressable>
            <View style = { styles.bioDetails }>
                <Text>
                    {biography}
                </Text>
            </View>
        </View>
        </SafeAreaView>
    );
}

export default Artists;