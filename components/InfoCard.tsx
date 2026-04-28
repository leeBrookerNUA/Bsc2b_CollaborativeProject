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

export default function InfoCard(props: InfoCardProps) {
  const {
    title,
    subtitle,
    gradientColors = ["#FFF2A6", "#FFE066", "#E0C120"],
  } = props;

  return (
    <LinearGradient
      colors={gradientColors}
      style={styles.card}
    >
      <View pointerEvents="none" style={styles.darkOverlay} />
      <View pointerEvents="none" style={styles.lightOverlay} />

      <AppHeading style={styles.title}>{title}</AppHeading>
      <AppText style={styles.subtitle}>{subtitle}</AppText>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "relative",
    width: "100%",
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 160,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },

  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },

  lightOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },

  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 6,
  },

  subtitle: {
    opacity: 0.8,
    fontSize: 18,
    textAlign: "center",
    marginBottom: 6,
  },
});