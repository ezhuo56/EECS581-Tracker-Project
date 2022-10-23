/*
  Name: colorschemes.js
  Description: Creating a search bar component for the search screen
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/16/2022
  Date revised: 10/16/2022
  Preconditions: None
  Postconditions: None
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/
import {View, TextInput, Text, StyleSheet, Pressable } from "react-native";
import {React, useState} from "react"

//Creates a search bar that returns the value inside of it
//This value will probably be used later in an actual search engine
const SearchBar = ( props )  =>{
    const [textIn, setTextIn ] = useState( "" );

    function setStuff ( text ){
        setTextIn( text );
    }
    
    function clearOut (){
        setTextIn( '' );
    }

    return(
        <View style = { styles.container }>
            <TextInput
                placeholder="Search"
                style = { styles.input }
                value = { textIn }
                onChangeText = { setStuff }
            />
            <View style = {{ alignItems: 'flex-end'}} >
            <Pressable style = { styles.clear }  onPress = { clearOut } >
                <Text style = {{ color: 'Black', fontWeight: 'bold', }}> X </Text>
            </Pressable>
            </View>
            <Text> {textIn} </Text>
        </View>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    container:{
        margin: 10
    },
    input:{
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        color: "#000",
        borderWidth: 1,
    },
    clear: {
        marginTop: -40,
        marginRight: 5,
        width: 30,
        height: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
});