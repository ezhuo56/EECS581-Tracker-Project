import { React, useContext } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable } from 'react-native';
import { ColorSchemeContext } from '../context';

const NavBar = () =>{
    return(
        <View style = { styles.container } >
            <View>
                <Image source = { require( '../img/userIcon.png') } />
            </View>
            <View>
                <Image source = { require( '../img/homeIcon.png') } />
            </View>
            <View>
                <Image source = { require( '../img/serachIcon.png' ) } />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: '25%',
        width: '100%',
    },
    user: {
        height: '100%',
        width: '33.33%',
        backgroundColor: 'blue',
    },
    home: {
        height: '100%',
        width: '33.33%',
        backgroundColor: 'red',
    },
    search: {
        height: '100%',
        width: '33.33%',
        backgroundColor: 'black',
    }
});

export default NavBar;