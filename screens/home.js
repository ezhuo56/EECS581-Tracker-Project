/*
  Name: home.js
  Description: Makes the home page be able to navigated to with button taps from the user. Added feature to display the music from the user's artist list
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/10/2022
  Date revised: 3/6/2023
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
import { dataBase } from '../firebase';
import { doc, getDoc } from "firebase/firestore";
 

//Setup Home
function Home({navigation}){

    //IDs for our project
    const [client_id,setClient] = useState('');
    const [secret_id,setSecret] = useState('');
    const [data, setData] = useState([]);

    async function getId(){
        const docRef = doc(dataBase, "spotifyid", "VUWUOJoxafST6Syd474J");
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            const ids = docSnap.data();
            setClient( ids.clientid );
            setSecret( ids.secretid );
        } else {
            console.log("id not found");
        }
    }
    async function getEricId(){
        const docRef = doc(dataBase, "EricSpotifyID", "oxPGoByCBnAYgokgJ1J0");
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            const Ericids = docSnap.data();
            setEricClient( Ericids.client_id );
            setEricSecret( Ericids.secret_id );
        } else {
            console.log("id not found");
        }
    }
    
    useEffect( () => {
        getId();
    });

    const scopes_arr = ['user-top-read','user-read-private','user-read-email','playlist-modify-private', 'playlist-modify-public', 'playlist-read-private'];
    var accessToken;
    var gotToken = false;
    const discovery = {
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        tokenEndpoint: 'https://accounts.spotify.com/api/token',
    };
    //Create all necessary vars
    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);

  // send an authorization request to spotify servers
    const [request,response,promptAsync] = useAuthRequest({
        responseType: ResponseType.Token,
        clientId: client_id,
        clientSecret: secret_id,
        scopes: scopes_arr,
        usePKCE: false,
        redirectUri: makeRedirectUri({scheme:'EECS581-Tracker-Project'}),
    },discovery);

    const [artists,setArtists] = useState([]);
    
    const [ShouldShow,setShow] = useState(true);

    useEffect(() => {
        if(response?.type === 'success'){
            const{access_token} = response.params;
            accessToken = access_token;
            gotToken = true;
            console.log('access token:',accessToken);
            axios({
                method: "get",
                url: "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50",
                headers: {
                    Authorization: "Bearer " + accessToken,
                }
            }).then(response => {
                    setArtists(response.data);
            }).catch((err) => {
                console.log(err);
            });
            setShow(false);
        }
    },[response])
    //show the two buttons to link Spotify and print out Spotify data
    const ShowButtons = () => {
        if(ShouldShow){
            return(
                <>
                    <View style={styles.spotifyButton}>
                        <Button disabled={!request} title="Login to Spotify" color = 'white' onPress={() => promptAsync()}/>
                    </View>
                </>
            )
        }
        return null;
    }
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
            position: 'absolute',
            marginTop: 250,
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
            borderRadius: 10,
            padding: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

        },
        textHeader: {
            fontSize: 24,
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
            textAlign: 'left',
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

    /**
     * This function is meant to generate the users artist music list
     * WIP: Currently not able to gather data from spotify
     * 
     * @returns A series of react native elements showing new musical releases for the users followed artists, each one is pressable with the ability to open other apps such as spotify.
     */
    function getArtistMusic() {
        let items = [
            {
                name: "Artist One Released:",
                info: "Music Title",
                track: "2xLMifQCjDGFmkHkpNLD9h",
            },
            {
                name: "Artist Two Released:",
                info: "Music Title",
                track: "3cfOd4CMv2snFaKAnMdnvK",
            },
            {
                name: "Artist Three Released:",
                info: "Music Title",
                track: "10ecV5dPqa4XJOtVQRqYSX",
            },
            {
                name: "Artist Four Released:",
                info: "Music Title",
                track: "2bw4WgXyXP90hIex7ur58y",
            }
        ];

        return (
            <View style = {styles.musicFeed}>
                {artists?.items
                    ? artists.items.map((item) => (
                        <>
                          <View key={item}>
                                <TouchableOpacity onPress = {() => {Linking.openURL(item.uri)}}>   
                                    <View style={styles.feed}>
                                        <View style={{ textAlign: 'center', alignItems: 'center' }}>
                                        <Text style={styles.textHeader}>{item?.artists ? item.artists.map((names, j) => (
                                                <>
                                                    {names.name}
                                                    {Object.keys(item.artists).length > 1 && j < Object.keys(item.artists).length - 1 ? (', ') : null}
                                                </>
                                            ))
                                            : null} Released:
                                        </Text>
                                        
                                            <Text style={styles.textBody}>{item.name}</Text>
                                            
                                        </View>
                                        <Image source = {item.album.images[0]} style={{ width: 128, height: 128, flexBasis:40}}/>
                                    </View>
                                    
                                </TouchableOpacity>
                                <View padding={10}></View>
                            </View>
                        </>
                      ))
                    : null}
            </View>
        )
    }
    
    //Create the home page
    return(
        <View style = {styles.parent}>
            <ShowButtons />
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