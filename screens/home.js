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
            <View style = {styles.mainView}>
                <Button
                    title = "User"
                    onPress={navU}
                />
                <Button
                    title = "Search"
                    onPress={navS}
                />
                <Text>Home</Text>
            </View>
        );
}

const styles = StyleSheet.create({
    mainView:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Home