import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ text, txtChange, onSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather name="search" style={styles.feather} />
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        value={text}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={txtChange}
        onEndEditing ={onSubmit}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderColor: 'blue',
    backgroundColor: "#F0EEEE",
    // borderWidth:1,
    height: 50,
    borderRadius: 5,
    margin: 10,
    flexDirection: "row",
    // alignItems: "center"
  },
  textInput: {
    //borderWidth:1,
    flex: 1,
    fontSize:18
  },
  feather: {
    fontSize:35,
    alignSelf:'center',
    margin:5
  }
});

export default SearchBar;
