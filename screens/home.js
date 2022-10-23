/*
  Name: home.js
  Description: Makes the home page be able to navigated to with button taps from the user
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/10/2022
  Date revised: 10/22/2022
  Preconditions: Importing react components 
  Postconditions: Creates the homepage from the imported components
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/
import { React, useContext } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable, Image } from 'react-native';
import { ColorSchemeContext } from '../context';
//allows the user to navigate to either the user page or the search page from the home page
function Home({navigation}){
    //Retrieves the current app color scheme
    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);

    function navU(){
        navigation.navigate('userPage');
    }
    function navH(){
        navigation.navigate('homePage');
    }
    function navS(){
        navigation.navigate('searchPage');
    }

    //CSS style for the page
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
        }
    })

//allows the user to click on either the userpage or searchpage to navigate to those pages
    return(
        <View style = {styles.parent}>
            <View style = {styles.center}>
                <Text style={styles.screenText}>Home</Text>
            </View>
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
        backgroundColor: 'white',
    },
    homeB: {
        height: '100%',
        width: '33.33%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    searchB: {
        height: '100%',
        width: '33.33%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    }
});

export default Home