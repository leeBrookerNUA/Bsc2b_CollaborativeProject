import BackHomeCard from "@/components/BackHomeCard";
import Header from "@/components/Header";

import ScreenBackground from "@/components/ScreenBackground";
import React from "react";
import { StyleSheet, View } from "react-native";


export default function InstructionsScreen() {
  return (

    <ScreenBackground>
      <View style={styles.page}>
        <View>

          <Header
            title="Fun Facts"
            leftIconName="arrow-circle-left"
            rightIconName="cog"
            onBackPress={() => console.log("Back Pressed")}
            onSettingsPress={() => console.log("Settings Pressed")}
          />

          <View style={styles.spacer12} />

          

          <View style={styles.spacer12} />

          
          <View style={styles.spacer12} />

          

          <View style={styles.spacer12} />

          

          <View style={styles.spacer12} />

         =

          <View style={styles.spacer20} />

        </View>

        <BackHomeCard
          title="Back Home"
          onBackHomePress={() => console.log("Back Home Pressed")}
        />
      </View>

    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "space-between",
  },
  spacer12: {
    height: 12,
  },
  spacer20: {
    height: 20,
  },
});