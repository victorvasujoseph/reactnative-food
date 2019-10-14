import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Result = () => {
  return (
    <View>
      <Text style={styles.title}>Results Show</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    width: 250
  },
  image: {
    height: 150,
    width: 250,
    margin: 10,
    borderRadius: 4
  }
});

export default Result;
