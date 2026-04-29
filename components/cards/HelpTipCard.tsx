import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../base/AppText";

interface HelpTipCardProps {
  // Name of the FontAwesome6 icon displayed inside the help tip.
  // This is typed to only allow valid FontAwesome6 icon names.
  iconName: React.ComponentProps<typeof FontAwesome6>["name"];

  // Help message displayed next to the icon.
  title: string;
}

// HelpTipCard is a reusable card used to show helpful advice or reminders.
// It displays a small icon beside a short text tip.
export default function HelpTipCard({ iconName, title }: HelpTipCardProps) {
  return (
    <View style={styles.card}>
      {/*
        Row container keeps the icon and help text together
        and centres them inside the card.
      */}
      <View style={styles.contentRow}>
        {/*
          Circular icon container.
          It gives the icon a soft background so it stands out from the card.
        */}
        <View style={styles.iconContainer}>
          <FontAwesome6 name={iconName} size={16} color="#FFFFFF" />
        </View>

        {/* Displays the help tip text passed in through the title prop. */}
        <AppText style={styles.title}>{title}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Main help tip card container.
  // The rounded corners, border, and transparent background
  // match the soft glass style used throughout the app.
  card: {
    width: "100%",
    minHeight: 50,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(46, 46, 46, 0.15)",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.14)",
  },

  // Places the icon and text side by side.
  // maxWidth prevents the row from stretching outside the card.
  contentRow: {
    maxWidth: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  // Circular background behind the icon.
  // flexShrink: 0 keeps the icon from shrinking when the text is long.
  iconContainer: {
    width: 24,
    height: 24,
    marginRight: 8,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },

  // Styles the help tip text.
  // flexShrink allows the text to wrap neatly instead of pushing outside the card.
  title: {
    flexShrink: 1,
    fontSize: 14,
    lineHeight: 18,
    textAlign: "center",
  },
});