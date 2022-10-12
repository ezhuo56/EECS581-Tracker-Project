import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable } from 'react-native';

function Home({navigation}){
    function navU(){
        navigation.navigate('userPage');
    }
    function navS(){
        navigation.navigate('searchPage');
    }
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