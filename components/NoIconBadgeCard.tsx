import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

interface NoIconBadgeCardProps {
  title: string;
}

export default function NoIconBadgeCard({ title }: NoIconBadgeCardProps) {
  return (
    <View style={styles.card}>
      <AppText style={styles.title}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
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

  title: {
    fontSize: 16,
    textAlign: "center",
  },
});