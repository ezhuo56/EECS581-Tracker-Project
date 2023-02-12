/*
  Name: home.js
  Description: Makes the home page be able to navigated to with button taps from the user. Added feature to display the music from the user's artist list
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/10/2022
  Date revised: 2/12/2023
  Preconditions: Importing react components 
  Postconditions: Creates the homepage from the imported components, alongside artist music information
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/

//Import everything used for the page
import { React, useContext, useEffect, useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable, Image, ScrollView, TouchableOpacity, Linking} from 'react-native';
import { ColorSchemeContext } from '../context';
import {useAuthRequest,ResponseType,makeRedirectUri} from 'expo-auth-session';
import axios from 'axios';

//IDs for our project
const client_id = 'dc95aa564add4e22aca854acb29a5565';
const secret_id = 'f8e7fcc6de7c4040b2ed7342a5da0db2';
//Eric ID for client sided testing
//const client_id = '8865b29e5e404623a2e485a91ffb290d';
//const secret_id = 'a8bcbef5733c435794cb5bb9b8ce34a5';
//scopes to get from the spotify API
const scopes_arr = ['user-follow-read','user-read-email','playlist-read-private'];
var accessToken;
var gotToken = false;
const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

//Setup Home
function Home({navigation}){
    //Create all necessary vars
    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);

    let showModal = false;

    //Create all needed functions (Explanation given if necessary)
    function navU(){
        navigation.navigate('userPage');
    }
    function navH(){
        navigation.navigate('homePage');
    }
    function navS(){
        navigation.navigate('searchPage');
    }

    //CSS Styling for the page
    const styles = StyleSheet.create({
        parent: {
            height: '100%',
            width: '100%',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colorScheme.backgroundColor,
        },
        center: {
            alignItems: 'center'
        },
        butCont: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start',
        },
        button: {
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 0,
            elevation: 3,
            backgroundColor: 'darkred',
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
        spotifyButton: {
            marginTop: 6,
            marginBottom: 6,
            width: '60%',
            height: '5%',
            backgroundColor: '#1db954',
            alignItems: 'center',
            display: 'flex',
            color: 'white',
        },
        screenButton: {
            marginBottom: 60,
            marginTop: 10,
            width: '60%',
            height: '5%',
            backgroundColor: 'black',
            alignItems: 'center',
            display: 'flex',
            color: 'white',
        },
        feed: {
            marginBottom: 4,
            marginTop: 10,
            borderWidth: 2,
            height: '3%',
            width: '95%',
            borderRadius: 10,

        },
        textHeader: {
            fontSize: 24,
            padding: 5,
            textAlign: 'center',
        },
        textBody: {
            fontWeight: 'bold',
            fontSize: 24,
            padding: 5,
            textAlign: 'center',
        },
        scroll: {
            width: '90%',
        },
        musicFeed: {
            padding: 30,
        },
        musicFeedItem: {
            fontWeight: 'bold',
            fontSize: 24,
            padding: 5,
            textAlign: 'center',
            borderWidth: 2
        }
    });

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
            backgroundColor: colorScheme.navBar,
        },
        homeB: {
            height: '100%',
            width: '33.33%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colorScheme.selectColor,
        },
        searchB: {
            height: '100%',
            width: '33.33%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colorScheme.navBar,
        }
    });

    function displayInfo() {
        Linking.openURL("spotify:track:4cOdK2wGLETKBW3PvgPWqT")
    }

    /**
     * This function is meant to generate the users artist music list
     * WIP: Currently not able to gather data from spotify
     * 
     * @returns A series of react native elements showing new musical releases for the users followed artists, each one is pressable with the ability to open other apps such as spotify.
     */
    function getArtistMusic() {
        let items = [
            {
                display: "This is currently a work in progress",
                track: "4cOdK2wGLETKBW3PvgPWqT"
            },
            {
                display: "Artist One Released\nNew Music",
                track: "2xLMifQCjDGFmkHkpNLD9h"
            },
            {
                display: "Artist Two Released\nOther New Music",
                track: "3cfOd4CMv2snFaKAnMdnvK"
            },
            {
                display: "Artist Three Released\nAnother New Music",
                track: "10ecV5dPqa4XJOtVQRqYSX"
            },
            {
                display: "Artist One Released\nA New Album",
                track: "2bw4WgXyXP90hIex7ur58y"
            }
        ];

        return (
            <View style = {styles.musicFeed}>
                {items.map(function (item) {
                    return (<View>
                        <TouchableOpacity onPress = {() => {Linking.openURL("spotify:track:" + item["track"])}}>
                            <Text style={styles.musicFeedItem}>{item["display"]}
                            </Text>
                        </TouchableOpacity>
                        <View padding={10}>
                        </View>
                    </View>)
                })}
            </View>
        )
    }

    //Create the home page
    return(
        <View style = {styles.parent}>
            <ScrollView>
                {getArtistMusic()}
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

export default Home