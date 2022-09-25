import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native';

 

const App = () => (
  <View style={styles.container}>
  
  
  <Button

       
      title="Add"
      onPress={() => Alert.alert(
          'Its GeeksforGeeks !')}
  />
</View>
);

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
  },
});

export default App;