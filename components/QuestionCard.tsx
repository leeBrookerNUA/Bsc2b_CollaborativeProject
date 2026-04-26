import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";
import AppText from "./AppText";

interface QuestionCardProps {
  title: string;
  subtitle: string;
}

export default function QuestionCard(props: QuestionCardProps) {
  const { title, subtitle } = props;

  return (
    <LinearGradient style={styles.card} colors={["#D2A8FF", "#B07BFF", "#9B5DE5"]}>
      <View pointerEvents="none" style={styles.darkOverlay} />
      <View pointerEvents="none" style={styles.lightOverlay} />

      <AppHeading style={styles.title}>{title}</AppHeading>
      <AppText style={styles.subtitle}>{subtitle}</AppText>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 24,
    paddingVertical: 20,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 130,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 3,
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    borderRadius: 24,
  },
  lightOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 24,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    opacity: 0.85,
    fontSize: 16,
    textAlign: "center",
  },
});