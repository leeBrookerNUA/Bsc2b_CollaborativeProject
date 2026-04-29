import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../base/AppText";

interface TextBadgeProps {
  // Text displayed inside the badge.
  title: string;
}

// TextBadge is a small reusable badge component.
// It is used to display short instruction or information text.
export default function TextBadge({ title }: TextBadgeProps) {
  return (
    <View style={styles.card}>
      {/* Displays the badge text passed in through the title prop. */}
      <AppText style={styles.title}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  // Main badge container.
  // The padding, rounded corners, border, and transparent background help it match the soft glass style used across the app.
  card: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.14)",
  },

  // Styles the badge text and keeps it centred.
  title: {
    fontSize: 16,
    textAlign: "center",
  },
});