import React from "react";
import { StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";

interface SettingsPanelProps {
  title: string;
  children: React.ReactNode;
}

export default function SettingsPanel(props: SettingsPanelProps) {
  const { title, children } = props;

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
  backgroundColor: "rgba(255, 255, 255, 0.18)",
  borderRadius: 24,
  paddingVertical: 16,
  paddingHorizontal: 14,
  borderWidth: 1,
  borderColor: "rgba(255, 255, 255, 0.15)",

  shadowColor: "#000",
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.12,
  shadowRadius: 12,

  // no elevation
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