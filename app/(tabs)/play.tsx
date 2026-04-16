import BadgeCard from "@/components/BadgeCard";
import BatteryCard from "@/components/BatteryCard";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";


export default function PlayScreen() {
  return (
    <LinearGradient colors={["#6fb1ff", "#3A86FF"]} style={styles.container}>

      <ImageBackground
        source={require("../../assets/stars-bg.png")}
        style={styles.starsBackground}
        imageStyle={styles.starsImage}
      >
        <View style={styles.content}>

          <BatteryCard
            title="Hand Crank is Turning!"
            subtitle="Charging Battery..."
            chargeText="65% Charged!"
            remainingText="120 Cranks Remaining"
            fillPercent={65}
          />

          <BadgeCard
            title="Hand Crank Active!"
            icon="🔄"
          />

        </View>
      </ImageBackground>
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  starsBackground: {
    flex: 1,
  },
  starsImage: {
    resizeMode: "cover",
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
});
