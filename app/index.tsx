import BatteryCard from "@/componenents/BatteryCard";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function PlayScreen() {
  return (
    <View style={styles.container}>
      <BatteryCard
        title="Hand Crank is Turning!"
        subtitle="Charging Battery..."
        chargeText="65% Charged!"
        remainingText="120 Cranks Remaining"
        fillPercent={65}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6fb1ff",
    padding: 16,
    justifyContent: "center",
  },
});
