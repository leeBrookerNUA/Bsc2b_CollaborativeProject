import ButtonCard from "@/components/ButtonCard";
import Header from "@/components/Header";
import ScreenBackground from "@/components/ScreenBackground";
import React from "react";
import { StyleSheet, View } from "react-native";


export default function PlayScreen() {
  return (
    <ScreenBackground>

      <Header
        title="Play"
        leftIconName="arrow-circle-left"
        rightIconName="cog"
        onBackPress={() => console.log("Back Pressed")}
        onSettingsPress={() => console.log("Settings Pressed")}
      />

      <View style={styles.spacer16} />

      <ButtonCard
        iconName="lightbulb"
        title="Fun Facts"
      />


      <View style={styles.spacer16} />



      <View style={styles.spacer16} />


      <View style={styles.spacer16} />



      <View style={styles.spacer16} />



    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  spacer16: {
    height: 16,
  },
});