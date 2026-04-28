import React from "react";
import { StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";

interface SettingsPanelProps {
  title: string;
  children: React.ReactNode;
}

export default function SettingsPanel({ title, children }: SettingsPanelProps) {
  return (
    <View style={styles.card}>
      <AppHeading style={styles.title}>{title}</AppHeading>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.14)",
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 16,
    paddingHorizontal: 14,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },

  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 12,
  },

  content: {
    gap: 12,
  },
});