/*
  Name: user.js
  Description: Makes the user page be able to navigated to with button taps from the user
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/11/2022
  Date revised: 1/29/2023
  Preconditions: Importing react components 
  Postconditions: Creates the user page from the imported components provided by react native. Now prints out User's Spotify artist data on this page.
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/

//Import everything used for the page
import {React, useState,useEffect ,useContext} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable } from 'react-native';
import { TouchableHighlight, TouchableOpacity, Image, ScrollView } from 'react-native';
import { ColorSchemeContext, UserContext, LoginContext} from '../context';
import {useAuthRequest,ResponseType,makeRedirectUri} from 'expo-auth-session';
import axios from 'axios';
import userData from "../components/userData.js";
import {AsyncStorage} from 'react-native';
 
// IDs for our project
//const client_id = 'dc95aa564add4e22aca854acb29a5565';
//const secret_id = 'f8e7fcc6de7c4040b2ed7342a5da0db2';
//Eric ID for client sided testing
const client_id = '8865b29e5e404623a2e485a91ffb290d';
const secret_id = 'a8bcbef5733c435794cb5bb9b8ce34a5';
// scopes to get from the spotify API
const scopes_arr = ['user-follow-read','user-read-email','playlist-read-private'];
var accessToken;
var gotToken = false;
// websites to get spotify auth
const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

//Setup User
function User({navigation}){
    //Create necessary vars
    let darkGear = require ( '../img/gearIcon.png' );
    let lightGear = require ( '../img/gearIconWhite.png' );
    const [artists,setArtists] = useState([]);
    const [ShouldShow,setShow] = useState(true);
    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);
    const [user, setUser] = useContext(UserContext);
    const [loginInfo, setLogins] = useContext(LoginContext);
    //Send auth request to spotify
    const [request,response,promptAsync] = useAuthRequest({
        responseType: ResponseType.Token,
        clientId: client_id,
        clientSecret: secret_id,
        scopes: scopes_arr,
        usePKCE: false,
        redirectUri: makeRedirectUri({scheme:'EECS581-Tracker-Project'}),
    },discovery);

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
    function navSet(){
        navigation.navigate('settingsPage');
    }
    function navL(){
        navigation.navigate('loginPage');
    }
    function navUS(){
        navigation.navigate('UserSetupPage');
    }
    //Collect user spotify follow list
    const GetFollowers = () => {
        const [next,setNext] = useState("null");
        const [getNext,setGetNext] = useState(false);
        const handleGetFollowers = () => {
            axios.get("https://api.spotify.com/v1/me/following?type=artist&limit=50",{
                headers: {
                    Authorization: "Bearer " + accessToken,
                }
            }).then(response => {
                setNext(response.data.artists.next);
                for(var i=0; i < (response.data.artists.items).length; i++) {
                    setArtists(current => [...current, response.data.artists.items[i].name]);
                }
            }).catch((err) => {
                console.log(err);
            });
            console.log(artists);
        }
        return <View style={styles.screenButton}><Button title="Print data" color = {colorScheme.textColor} onPress={handleGetFollowers}/></View>;
    }
    //Prints who the user is following from spotify
    const PrintFollowers = () => {
        if(artists.length != 0){
            useEffect(() => {
                const saveFollowedArtists = async () => {
                  try {
                    
                    console.log(artists);
                  } catch (error) {
                    console.log(error);
                  }
                };
                saveFollowedArtists();
              }, [artists]);
               
               
            setShow(false);
            return (
                <>
                    <ScrollView style={styles.scroll}>
                        {artists.map((data,i) => (
                            <View key={i} style={styles.feed}>
                                <Text style={styles.textHeader}>Started Following:</Text>
                                <Text style={styles.textBody}>{artists[i]}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </>
            )
        }
        return ;
    }
    //Checks whether user is connected to spotify
    useEffect(() => {
        if(response?.type === 'success'){
            const{access_token} = response.params;
            accessToken = access_token;
            gotToken = true;
            console.log('access token:',accessToken);
        }
    },[response])
    //Buttons created to login/print spotify
    const ShowButtons = () => {
            if(ShouldShow){
                return(
                    <>
                        <View style={styles.spotifyButton}>
                            <Button disabled={!request} title="Login to Spotify" color = {colorScheme.textColor} onPress={() => promptAsync()}/>
                        </View>
                        <GetFollowers />
                    </>
                )
            }
            return null;
    }

    //CSS Styling for the page
    const styles = StyleSheet.create({
        parent:{
            flex: 1,
            backgroundColor: colorScheme.backgroundColor,
        }, 
        Spotifybutons:
        {
            height: '100%',
            width: '100%',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
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
            color: colorScheme.textColor,
        },
        email: {
            fontSize: 15,
            padding: 15,
            color: colorScheme.textColor,
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

    //Create the user page
    return(
        <View style = { styles.parent }>
            <ScrollView>
                <View style = { styles.profileBack } >
                <Pressable style = { styles.gear } onPress = { navSet } >
                        <Image source = {(['blue', 'light', 'dark'].includes(colorScheme.name) ? lightGear : darkGear)}
                            style = { styles.gearResize }>
                        </Image>
                </Pressable>
                </View>
                <View style = { styles.infoCont } >
                    <Pressable onPress={navUS}>
                        <Image source = { require ( '../img/temp.png' ) }
                            style = { styles.alignImg }>
                        </Image>
                    </Pressable>
                    <Text style = { styles.userName }> {user.first + " " + user.second} </Text>
                    <Text style = { styles.email }> { user.email } </Text>
                    <View style = { styles.infoBack } >
                    </View>
                </View>
                <View style = {styles.Spotifybutons}>
            <ShowButtons />
            <PrintFollowers />
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