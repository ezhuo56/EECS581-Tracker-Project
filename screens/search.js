import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';

function Search(){
        return(
            <View style = {styles.mainView}>
                <Text>Search</Text>
            </View>
        );
}

const styles = StyleSheet.create({
    mainView:{
        marginTop: 40,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Search