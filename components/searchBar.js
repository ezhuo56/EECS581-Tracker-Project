/*
  Name: searchBar.js
  Description: Creating a search bar component for the search screen
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/16/2022
  Date revised: 2/26/2023
  Preconditions: data retrieved
  Postconditions: Allow the usage of the search bar to be utilized by the user to search Spotify's database from the app
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/

//Import everything used for the page
import {View, TextInput, Text, StyleSheet, Pressable,FlatList,SafeAreaView } from "react-native";
import {React, useState, useEffect} from "react"
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';
import { auth, dataBase } from '../firebase';
import {collection, addDoc, doc, setDoc, getDocs, onSnapshot } from "firebase/firestore";

//create a temporary list of artist to search from
/*const data = [
    { id: '1', title: 'Bob' },
    { id: '2', title: 'Jones' },
    { id: '3', title: 'Billy' },
    { id: '4', title: '420' },
    { id: '5', title: 'Huh' },
];*/

//Setup SearchBar
function SearchBar(){
    //Create necessary vars
    const [data, setData] = useState([]);
    const [textIn, setTextIn ] = useState( '' );
    const [filteredData, setFiltered] = useState([]);
    const [masterData, setMaster] = useState(data);
    const navigation = useNavigation();

    useEffect( () => {
        const ref = collection( dataBase, "Artists" );
        onSnapshot( ref, (artists) => 
            setData( artists.docs.map( (artist ) => ({
            title: artist.id,
            data: artist.data(),
            })))
        );
        setMaster( data );
    })

    function navArt( given ){
        navigation.navigate('artists', given);
    }

    const searchFilter = ( text ) => {
        if ( text ) {
            const newData = masterData.filter( function ( item ) {
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf( textData ) > -1;
            });
            setFiltered( newData );
            setTextIn( text );
        } else {
            setFiltered( [] );
            setTextIn( text );
        }
    }
    const ItemSeparatorView = () => {
        return (
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8',
            }}
          />
        );
    }
    const ItemView = ({ item }) => {
        return (
          // Flat List Item
          <Text style={styles.itemStyle} onPress={() => navArt( item.title )}>
            {item.title}
          </Text>
        );
    }

    //Create all needed functions (Explanation given if necessary)

    //CSS Styling for the searchBar
    const styles = StyleSheet.create({
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
        },
        container: {
            backgroundColor: 'white',
          },
          itemStyle: {
            padding: 10,
          },
          textInputStyle: {
            height: 40,
            borderWidth: 1,
            paddingLeft: 20,
            margin: 5,
            borderColor: '#009688',
            backgroundColor: '#FFFFFF',
          },
    });

    //Create the searchbar
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={ (text) => searchFilter(text)}
                    value={textIn}
                    placeholder="Search"
                />
                <FlatList
                    data={filteredData}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />
            </View>
        </SafeAreaView>
    );
}

export default SearchBar;