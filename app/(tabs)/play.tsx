import BadgeCard from "@/components/BadgeCard";
import BatteryCard from "@/components/BatteryCard";
import StatCard from "@/components/StatCard";
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
            iconName="refresh"
          />

          <View style={styles.statsRow}>
            <StatCard
              iconName="clock-o"
              value="2"
              title="hours"
              iconColor="#FF9F1C"
              iconBgColor="rgba(255, 159, 28, 0.12)"
            />

            <StatCard
              iconName="refresh"
              value="120"
              title="cranks left!"
              iconColor="#3A86FF"
              iconBgColor="rgba(58, 134, 255, 0.12)"
            />

            <StatCard
              iconName="bolt"
              value="4.8W"
              title="power"
              iconColor="#2ECC71"
              iconBgColor="rgba(46, 204, 113, 0.12)"
            />

          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
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
  statsRow: {
    flexDirection: "row",
    marginTop: 16,
    gap: 12,
  }
});
