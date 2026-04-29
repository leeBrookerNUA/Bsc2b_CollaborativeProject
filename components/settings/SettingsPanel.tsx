import React from "react";
import { StyleSheet, View } from "react-native";
import AppHeading from "../base/AppHeading";

interface SettingsPanelProps {
  // Title displayed at the top of the settings panel.
  title: string;

  // Settings rows or other components displayed inside the panel.
  children: React.ReactNode;
}

// SettingsPanel is a reusable container for grouping related settings.
// It displays a heading and then renders any setting rows passed in as children.
export default function SettingsPanel({ title, children }: SettingsPanelProps) {
  return (
    <View style={styles.card}>

      {/* Displays the panel heading using the reusable heading style. */}
      <AppHeading style={styles.title}>{title}</AppHeading>

      {/* Content area for the settings rows. The children prop allows different settings screens to reuse this same panel. */}
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({

  // Main panel container.
  // The transparent background, rounded corners, and border create the app's glass-card style.
  card: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.14)",
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 16,
    paddingHorizontal: 14,

    // Adds a very soft shadow to lift the panel slightly from the background.
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },

  // Styles the panel title and adds space underneath it.
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 12,
  },

  // Adds consistent spacing between each child setting row.
  content: {
    gap: 12,
  },
});