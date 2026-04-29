import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppHeading from "../base/AppHeading";
import AppText from "../base/AppText";

interface QuizQuestionCardProps {
  // Main quiz question displayed on the card.
  title: string;

  // Supporting instruction text shown underneath the question.
  subtitle: string;
}

// QuizQuestionCard is a reusable card component used on quiz screens.
// It displays the current question and a short instruction for the user.
export default function QuizQuestionCard({
  title,
  subtitle,
}: QuizQuestionCardProps) {
  return (
    <LinearGradient
      colors={["#D2A8FF", "#B07BFF", "#9B5DE5"]}
      style={styles.card}
    >
      {/*
        Overlay adds a subtle dark layer on top of the gradient.
        This improves contrast so the white text is easier to read.
      */}
      <View pointerEvents="none" style={styles.overlay} />

      {/* Displays the main quiz question using the reusable heading style. */}
      <AppHeading style={styles.title}>{title}</AppHeading>

      {/* Displays the supporting instruction text below the question. */}
      <AppText style={styles.subtitle}>{subtitle}</AppText>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  // Main quiz question card container.
  // The gradient background, rounded corners, and border match the app's card style.
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

  // Adds a soft dark overlay over the gradient for better text contrast.
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  },

  // Styles the main question text and keeps it centred.
  title: {
    fontSize: 20,
    marginBottom: 12,
    textAlign: "center",
  },

  // Styles the smaller instruction text underneath the question.
  subtitle: {
    fontSize: 16,
    opacity: 0.85,
    textAlign: "center",
  },
});