import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface BatteryCardProps {
  title: string;
  subtitle: string;
  chargeText: string;
  remainingText: string;
  fillPercent: number;
}

export default function BatteryCard(props: BatteryCardProps) {
  const { title, subtitle, chargeText, remainingText, fillPercent } = props;

  return (
    <View style={styles.card}>
      <View style={styles.batteryWrapper}>
        <Text>Battery Goes Here</Text>
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.chargeText}>{chargeText}</Text>
      <Text style={styles.remainingText}>{remainingText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#3A86FF",
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    color: "#FFFFFF",
    opacity: 0.8,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 4,
  },
  chargeText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 4,
  },
  remainingText: {
    color: "#EAF2FF",
    fontSize: 14,
    textAlign: "center",
  },
  batteryWrapper: {
    marginBottom: 20,
  },
});
