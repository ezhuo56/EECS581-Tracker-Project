/*
  Name: searchBar.js
  Description: Creating a search bar component for the search screen
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/16/2022
  Date revised: 2/6/2023
  Preconditions: None
  Postconditions: Allow the usage of the search bar to be utilized by the user to search Spotify's database from the app
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/

//Import everything used for the page
import {View, TextInput, Text, StyleSheet, Pressable,FlatList } from "react-native";
import {React, useState} from "react"
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

//create a temporary list of artist to search from
const data = [
    { id: '1', title: 'Bob' },
    { id: '2', title: 'Jones' },
    { id: '3', title: 'Billy' },
    { id: '4', title: '420' },
    { id: '5', title: 'Huh' },
];

//Setup SearchBar
const SearchBar = ( props )  =>{
    //Create necessary vars
    const [textIn, setTextIn ] = useState( '' );
    const [filteredData, setFiltered] = useState(data);
    const [masterData, setMaster] = useState(data);


    //Create all needed functions (Explanation given if necessary)
    function setStuff (given){
        searchFilter();
        setTextIn( given );
    }
    function clearOut (){
        setTextIn( '' );
    }
    const searchFilter = () => {
        if ( textIn ) {
        const newData = masterData.filter((item) => {
            const itemData = item.title ? item.title.toUpperCase() 
                : ''.toUpperCase();
            const textData = textIn.toUpperCase;
            return itemData.indexOf(textIn) > -1;
        });
        setFiltered(newData);
        } else {
            setFiltered(masterData);
        }
    }
    const contains = ({ musicTitle }, query) => {
        const { title } = name;
        if (title.includes(query)) {
            return true;
        }
        
        return false;
    };

    //CSS Styling for the searchBar
    const styles = StyleSheet.create({
        container:{
            margin: 15,
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

    //Create the searchbar
    return(
        <View style = { styles.container }>
            <TextInput
                placeholder="Search"
                style = { styles.input }
                value = { textIn }
                onChangeText = { ( text ) => setStuff( text ) }
            />
            <View style = {{ alignItems: 'flex-end'}} >
            <Pressable style = { styles.clear }  onPress = { clearOut } >
                <Text style = {{ color: 'Black', fontWeight: 'bold', }}> X </Text>
            </Pressable>
            </View>
            <Text> {textIn} </Text>
            <FlatList
                data={filteredData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                <View style={styles.listItem}>
                    <Text style={styles.listItemText}>{item.title}</Text>
                </View>
                )}
            />
    </View>
    );
}

export default SearchBar;