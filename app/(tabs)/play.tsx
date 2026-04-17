import BadgeCard from "@/components/BadgeCard";
import BatteryCard from "@/components/BatteryCard";
import FunFactCard from "@/components/FunFactCard";
import HelpTipCard from "@/components/HelpTipCard";
import StatCard from "@/components/StatCard";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function PlayScreen() {
  return (
    <LinearGradient colors={["#3A86FF", "#6fb1ff"]} style={styles.container}>

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

          <View style={styles.spacer10} />

          <BadgeCard
            title="Hand Crank Active!"
            iconName="refresh"
          />

          <View style={styles.spacer12} />

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

          <View style={styles.spacer14} />

          <FunFactCard
            title="Live Fun Fact!"
            subtitle="It takes around 200 cranks to fully  charge one battery"
            button="Learn More"
          />

          <View style={styles.spacer10} />

          <HelpTipCard
            title="Keep turning! steadily to charge faster!"
            iconName="question"
          />

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
    paddingHorizontal: 16,
    paddingTop: 90,
  },
  statsRow: {
    flexDirection: "row",
    gap: 10,
  },
  spacer10: {
    height: 10,
  },
  spacer12: {
    height: 12,
  },
  spacer14: {
    height: 14,
  },
});
