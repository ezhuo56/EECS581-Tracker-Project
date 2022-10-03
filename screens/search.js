import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable } from 'react-native';

function Search({navigation}){
    function navH(){
        navigation.navigate('homePage');
    }

    return(
        <View style = {styles.parent}>
            <View style = {styles.butCont}>
                <Pressable style={styles.button} onPress={navH}>
                    <Text style={styles.text}> Home </Text>
                </Pressable>
            </View>
            <View style = {styles.center}>
                <Text>Search</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    parent: {
        height: '100%',
        width: '100%',
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
        width: '100%',
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

export default Search