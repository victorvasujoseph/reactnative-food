import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar"

const Search = () => {
  const [term, setTerm] = useState("");

  return (
    <View style={styles.container}>
      <SearchBar text={term} txtChange={newTerm => setTerm(newTerm)} onSubmit ={}/>
      <Text>{term}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center"
    // justifyContent: "center"
  }
});

export default Search;
