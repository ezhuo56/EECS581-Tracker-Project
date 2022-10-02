import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';

function User({navigation}){
    function navH(){
        navigation.navigate('homePage');
    }

    return(
        <View style = {styles.temp}>
            <Button
                title = "Home"
                onPress={navH}
                style = {styles.temp}
            />
            <Text>User</Text>
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

export default User