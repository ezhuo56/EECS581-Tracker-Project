/*
  Name: searchBar.js
  Description: Creating a search bar component for the search screen
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/16/2022
  Date revised: 1/23/2023
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

//create a temporary list of artist to search from
const data = [
    { id: '1', title: 'Unfinished Spotify search page, need data from Spotify to continue working' }
];

//Setup SearchBar
const SearchBar = ( props )  =>{
    //Create necessary vars
    const [textIn, setTextIn ] = useState( "" );

    //Create all needed functions (Explanation given if necessary)
    function setStuff ( text ){
        setTextIn( text );
    }
    function clearOut (){
        setTextIn( '' );
    }
    const handleSearch = text =>
    {
        const formattedQuery = text.toLowerCase();
        const filteredData = filter(fullData, user => {
            return contains(user, formattedQuery);
        });
        setData(filteredData);
        setQuery(text);
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
                onChangeText = { setStuff }
            />
            <View style = {{ alignItems: 'flex-end'}} >
            <Pressable style = { styles.clear }  onPress = { clearOut } >
                <Text style = {{ color: 'Black', fontWeight: 'bold', }}> X </Text>
            </Pressable>
            </View>
            <Text> {textIn} </Text>
            <FlatList
        data={data}
        keyExtractor={item => item.id}
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