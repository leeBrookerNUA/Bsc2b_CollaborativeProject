import BadgeCard from "@/components/BadgeCard";
import BatteryCard from "@/components/BatteryCard";
import FunFactCard from "@/components/FunFactCard";
import HelpTipCard from "@/components/HelpTipCard";
import StatCard from "@/components/StatCard";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function PlayScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={["rgba(58, 134, 255, 0.75)", "rgba(111, 177, 255, 0.75)"]} style={styles.container}>

        <ImageBackground
          source={require("../assets/stars-bg.png")}
          style={styles.starsBackground}
          imageStyle={styles.starsImage}
        >
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

            <BatteryCard
              title="Hand Crank is Turning!"
              subtitle="Charging Battery..."
              chargeText="65% Charged!"
              remainingText="120 Cranks Remaining"
              fillPercent={65}
            />

            <View style={styles.spacer16} />

            <BadgeCard
              title="Hand Crank Active!"
              iconName="refresh"
            />

            <View style={styles.spacer16} />

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
                title="cranks left"
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

            <View style={styles.spacer16} />

            <FunFactCard
              title="Live Fun Fact!"
              subtitle="It takes around 200 cranks to fully  charge one battery!"
              button="Learn More"
            />

            <View style={styles.spacer16} />

            <HelpTipCard
              title="Keep turning steadily to charge faster!"
              iconName="question"
            />

          </ScrollView>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  starsBackground: {
    flex: 1,
  },
  starsImage: {
    resizeMode: "cover",
    opacity: 0.9,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 28,
  },
  statsRow: {
    flexDirection: "row",
    gap: 8,
  },
  spacer16: {
    height: 16,
  },
});
