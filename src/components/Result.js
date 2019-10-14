import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Result = ({ item }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: item.image_url }} />
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    width:250
  },
  image:{
      height:150,
      width:250,
      margin:10,
      borderRadius:4
  }
});

export default Result;
