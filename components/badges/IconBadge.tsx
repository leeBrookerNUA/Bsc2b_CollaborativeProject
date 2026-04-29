import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../base/AppText";

interface IconBadgeProps {
  // Text displayed inside the badge.
  title: string;

  // Name of the Feather icon shown beside the text.
  // This is typed using Feather's icon names to help prevent invalid icon names.
  iconName: React.ComponentProps<typeof Feather>["name"];
}

// IconBadge is a small reusable badge component.
// It displays a short text label with a circular icon beside it.
export default function IconBadge({ title, iconName }: IconBadgeProps) {
  return (
    <View style={styles.card}>
      {/* Displays the badge text passed in through the title prop. */}
      <AppText style={styles.title}>{title}</AppText>

      {/*
        Circular icon container.
        This keeps the icon visually separated from the text.
      */}
      <View style={styles.iconContainer}>
        <Feather name={iconName} size={16} color="#FFFFFF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Main badge container.
  // The row layout places the text and icon next to each other.
  card: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.14)",
  },

  // Styles the badge label text.
  title: {
    fontSize: 16,
    textAlign: "center",
  },

  // Styles the circular background behind the icon.
  // The equal width and height, plus borderRadius, create the circle shape.
  iconContainer: {
    width: 24,
    height: 24,
    marginLeft: 6,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
});