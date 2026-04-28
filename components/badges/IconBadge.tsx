import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../base/AppText";

interface IconBadgeProps {
  title: string;
  iconName: React.ComponentProps<typeof Feather>["name"];
}

export default function IconBadge({ title, iconName }: IconBadgeProps) {
  return (
    <View style={styles.card}>
      <AppText style={styles.title}>{title}</AppText>

      <View style={styles.iconContainer}>
        <Feather name={iconName} size={16} color="#FFFFFF" />
      </View>
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
    flexDirection: "row",
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