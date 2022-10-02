import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';

function User(){
        return(
            <View style = {styles.mainView}>
                <Text>User</Text>
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

export default User