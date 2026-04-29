import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import AppHeading from "../base/AppHeading";
import AppText from "../base/AppText";

interface InfoCardProps {
  // Main heading displayed on the card.
  title: string;

  // Supporting text displayed underneath the heading.
  subtitle: string;

  // Optional gradient colours for the card background.
  // This allows the card colour to match the theme of each page.
  gradientColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
}

// InfoCard is a reusable card component used to introduce a page or section.
// It displays a title, subtitle, and colourful gradient background.
export default function InfoCard({
  title,
  subtitle,
  gradientColors = ["#FFF2A6", "#FFE066", "#E0C120"],
}: InfoCardProps) {
  return (
    <LinearGradient colors={gradientColors} style={styles.card}>
      {/*
        Overlay adds a subtle dark layer on top of the gradient.
        This helps the white text stand out more clearly.
      */}
      <View pointerEvents="none" style={styles.overlay} />

      {/* Displays the main card heading using the reusable heading style. */}
      <AppHeading style={styles.title}>{title}</AppHeading>

      {/* Displays the supporting subtitle text. */}
      <AppText style={styles.subtitle}>{subtitle}</AppText>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  // Main information card container.
  // The gradient background, rounded corners, and border match the app's card style.
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

  // Adds a slight dark overlay over the gradient for better text contrast.
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },

  // Styles the main heading and keeps it centred.
  title: {
    fontSize: 24,
    marginBottom: 6,
    textAlign: "center",
  },

  // Styles the supporting text below the heading.
  // opacity makes it slightly softer than the main title.
  subtitle: {
    fontSize: 18,
    marginBottom: 6,
    opacity: 0.8,
    textAlign: "center",
  },
});