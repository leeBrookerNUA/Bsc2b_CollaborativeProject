import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppHeading from "../base/AppHeading";
import AppText from "../base/AppText";

interface QuizQuestionCardProps {
  title: string;
  subtitle: string;
}

export default function QuizQuestionCard({ title, subtitle }: QuizQuestionCardProps) {
  return (
    <LinearGradient
      colors={["#D2A8FF", "#B07BFF", "#9B5DE5"]}
      style={styles.card}
    >
      <View pointerEvents="none" style={styles.overlay} />

      <AppHeading style={styles.title}>{title}</AppHeading>
      <AppText style={styles.subtitle}>{subtitle}</AppText>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: 130,
    paddingHorizontal: 18,
    paddingVertical: 20,
    borderRadius: 24,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.25)",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  },

  title: {
    fontSize: 20,
    marginBottom: 12,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    opacity: 0.85,
    textAlign: "center",
  },
});