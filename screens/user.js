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
import {React, useState,useEffect ,useContext} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable } from 'react-native';
import { TouchableHighlight, TouchableOpacity, Image, ScrollView } from 'react-native';
import { ColorSchemeContext, UserContext, LoginContext} from '../context';
import {useAuthRequest,ResponseType,makeRedirectUri} from 'expo-auth-session';
import axios from 'axios';
import NavBar from '../components/navBar.js';
import userData from "../components/userData.js";
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



//creates two functions to allow the user to navigate to either the home page or the login page
function User({navigation}){
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
    //collect the information of user's Spotify following list
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

        return <View style={styles.screenButton}><Button title="Print data" color = 'white' onPress={handleGetFollowers}/></View>;
    }
    //after pressing the print data button, it should print out a list of what the user has followed on Spotify, allowing scrolling to see every artist the user has followed
    const PrintFollowers = () => {
        if(artists.length != 0){
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


    //checks if Spotify account is connected
    useEffect(() => {
        if(response?.type === 'success'){
            const{access_token} = response.params;
            accessToken = access_token;
            gotToken = true;
            console.log('access token:',accessToken);
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
                        <GetFollowers />
                    </>
                )
            }
            return null;
    }
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