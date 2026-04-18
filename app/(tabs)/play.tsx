import BadgeCard from "@/components/BadgeCard";
import BatteryCard from "@/components/BatteryCard";
import FunFactCard from "@/components/FunFactCard";
import Header from "@/components/Header";
import HelpTipCard from "@/components/HelpTipCard";
import ScreenBackground from "@/components/ScreenBackground";
import StatCard from "@/components/StatCard";
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
        onMorePress={() => console.log("Learn More Pressed")}
      />

      <View style={styles.spacer16} />

      <HelpTipCard
        title="Keep turning steadily to charge faster!"
        iconName="question"
      />

    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  statsRow: {
    flexDirection: "row",
    gap: 8,
  },
  spacer16: {
    height: 16,
  },
});
