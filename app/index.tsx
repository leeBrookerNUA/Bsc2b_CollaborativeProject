import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style ={styles.mainview}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.container}>
        


      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Fredoka One",
  },

  mainview: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#3abecfff",
    borderWidth: 8,
    borderColor: "#3abecfff",
  },

    container: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 8,
    borderColor: "#3abecfff",
    backgroundColor: "#3abecfff",
  },
});


