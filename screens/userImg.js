/*
  Name: userImg.js
  Description: this page handles the user wanting to change their profile picture
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 4/23/2023
  Date revised: 4/23/2023
  Preconditions: Importing react components, the connected device has a camera and is ios or android
  Postconditions: changes the user's profile picture
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

import { Camera, CameraType } from 'expo-camera';
 

//Setup User
function UserImg({navigation}){
    //variables
    const [startCamera,setStartCamera] = React.useState(false)
    const [capturedImage, setCapturedImage] = useState<any>(null)

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


  
    const __startCamera = async () => {
        const {status} = await Camera.requestCameraPermissionsAsync()
        if (status === 'granted') {
          // start the camera
          setStartCamera(true)
        } else {
          Alert.alert('Access denied')
        }
      }

      const __takePicture = async () => {
        if (!camera) return
        const photo = await camera.takePictureAsync()
        console.log(photo)
        setCapturedImage(photo)
      }

    //PICTURE TAKER
    return(
        startCamera ? (
            <Camera
              style={{flex: 1,width:"100%"}}
              ref={(r) => {
                camera = r
              }}
            >

            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    flexDirection: 'row',
                    flex: 1,
                    width: '100%',
                    padding: 20,
                    justifyContent: 'space-between'
                }}
            >
            <View
                style={{
                alignSelf: 'center',
                flex: 1,
                alignItems: 'center'
                }}
            >
            <TouchableOpacity
                onPress={__takePicture}                  //TODO: we have the photo, now sent it somewhere else
                style={{
                    width: 70,
                    height: 70,
                    bottom: 0,
                    borderRadius: 50,
                    backgroundColor: '#fff'
                }}
            />
            </View>
            </View>
            </Camera>
          ) : (
            <View
              style={{
                flex: 1,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <TouchableOpacity
                onPress={__startCamera}
                style={{
                  width: 130,
                  borderRadius: 4,
                  backgroundColor: '#14274e',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}
                >
                  Take picture
                </Text>
              </TouchableOpacity>
            </View>
          )
    );
}

export default UserImg