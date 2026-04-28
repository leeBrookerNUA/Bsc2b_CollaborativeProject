import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";
import AppText from "./AppText";

interface BatteryCardProps {
  title: string;
  subtitle: string;
  chargeText: string;
  remainingText: string;
  fillPercent: number;
}

function getBatteryColor(fillPercent: number) {
  if (fillPercent < 20) return "#FF4D4F";
  if (fillPercent < 50) return "#FF9F1C";

  return "#2ECC71";
}

export default function BatteryCard({
  title,
  subtitle,
  chargeText,
  remainingText,
  fillPercent,
}: BatteryCardProps) {
  const safeFillPercent = Math.min(Math.max(fillPercent, 0), 100);
  const batteryColor = getBatteryColor(safeFillPercent);

  return (
    <LinearGradient colors={["#8FC4FF", "#3A86FF"]} style={styles.card}>
      <View pointerEvents="none" style={styles.overlay} />

      <View style={styles.batteryWrapper}>
        <View style={styles.batteryBody}>
          <View
            style={[
              styles.batteryFill,
              {
                width: `${safeFillPercent}%`,
                backgroundColor: batteryColor,
              },
            ]}
          />
        </View>

        <View style={styles.batteryTip} />
      </View>

      <AppHeading style={styles.title}>{title}</AppHeading>
      <AppText style={styles.subtitle}>{subtitle}</AppText>
      <AppHeading style={styles.chargeText}>{chargeText}</AppHeading>
      <AppText style={styles.remainingText}>{remainingText}</AppText>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: 150,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 24,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.25)",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },

  batteryWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  batteryBody: {
    width: 120,
    height: 60,
    padding: 6,
    borderWidth: 4,
    borderRadius: 16,
    borderColor: "#FFFFFF",
    justifyContent: "center",
  },

  batteryFill: {
    height: "100%",
    borderRadius: 10,
  },

  batteryTip: {
    width: 10,
    height: 20,
    marginLeft: -4,
    borderRadius: 2,
    backgroundColor: "#FFFFFF",
  },

  title: {
    fontSize: 24,
    marginBottom: 6,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 18,
    marginBottom: 6,
    opacity: 0.8,
    textAlign: "center",
  },

  chargeText: {
    fontSize: 18,
    marginBottom: 6,
    textAlign: "center",
  },

  remainingText: {
    fontSize: 16,
    opacity: 0.8,
    textAlign: "center",
  },
});