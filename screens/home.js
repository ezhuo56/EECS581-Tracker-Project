import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';

function Home({navigation}){
    function navU(){
        navigation.navigate('userPage');
    }
    function navS(){
        navigation.navigate('searchPage');
    }
    return(
        <View style = {styles.temp}>
            <Button
                title = "User"
                onPress={navU}
                style = {styles.temp}
            />
            <Button
                title = "Search"
                onPress={navS}
                style = {styles.temp}
            />
            <Text>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
    },
    temp: {
        width: '25%',
        margin: 10,
    }
})

export default Home