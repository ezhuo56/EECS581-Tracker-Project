/*
  Name: home.js
  Description: Makes the home page be able to navigated to with button taps from the user
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/10/2022
  Date revised: 10/12/2022
  Preconditions: Importing react components 
  Postconditions: Creates the homepage from the imported components
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable } from 'react-native';
//allows the user to navigate to either the user page or the search page from the home page
function Home({navigation}){
    function navU(){
        navigation.navigate('userPage');
    }
    function navS(){
        navigation.navigate('searchPage');
    }
//allows the user to click on either the userpage or searchpage to navigate to those pages
    return(
        <View style = {styles.parent}>
            <View style = {styles.butCont}>
                <Pressable style={styles.button} onPress={navU}>
                    <Text style={styles.text}> User </Text>
                </Pressable>
                <Pressable style={styles.button} onPress={navS}>
                    <Text style={styles.text}> Search </Text>
                </Pressable>
            </View>
            <View style = {styles.center}>
                <Text>Home</Text>
            </View>
        </View>
    );
}
//CSS style for the page
const styles = StyleSheet.create({
    parent: {
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        flex: 1,
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
})

export default Home