import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";
import AppText from "./AppText";

interface InfoCardProps {
  title: string;
  subtitle: string;
  gradientColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
}

export default function InfoCard({
  title,
  subtitle,
  gradientColors = ["#FFF2A6", "#FFE066", "#E0C120"],
}: InfoCardProps) {
  return (
    <LinearGradient colors={gradientColors} style={styles.card}>
      <View pointerEvents="none" style={styles.overlay} />

      <AppHeading style={styles.title}>{title}</AppHeading>
      <AppText style={styles.subtitle}>{subtitle}</AppText>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: 160,
    paddingHorizontal: 16,
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
});