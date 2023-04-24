/*
  Name: userImg.js
  Description: this page handles the user wanting to change their profile picture
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
function UserImg({navigation}){

}

export default UserImg