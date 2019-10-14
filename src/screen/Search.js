import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResults";
import ResultList from "../components/ResultList";

const Search = ({navigation}) => {
  const [term, setTerm] = useState("");
  const [searchAPI, result, errorMessage] = useResult();

  const filterResultsByPrice = price => {
    return result.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        text={term}
        txtChange={setTerm}
        onSubmit={() => searchAPI(term)}
      />
      <ScrollView>
        <ResultList
          navigation={navigation}
          result={filterResultsByPrice("$")}
          header="Cost Effective"
        ></ResultList>
        <ResultList
          navigation={navigation}
          result={filterResultsByPrice("$$")}
          header="Bit Expernsive"
        ></ResultList>
        <ResultList
          navigation={navigation}
          result={filterResultsByPrice("$$$")}
          header="Big Spender"
        ></ResultList>
      </ScrollView>
      {errorMessage ? <Text>errorMessage</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center"
    // justifyContent: "center"
  }
});

export default Search;
