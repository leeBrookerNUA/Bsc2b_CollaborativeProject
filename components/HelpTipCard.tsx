import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

interface HelpTipCardProps {
  iconName: React.ComponentProps<typeof FontAwesome6>["name"];
  title: string;
}

export default function HelpTipCard({ iconName, title }: HelpTipCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.contentRow}>
        <View style={styles.iconContainer}>
          <FontAwesome6 name={iconName} size={16} color="#FFFFFF" />
        </View>

        <AppText style={styles.title}>{title}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

  contentRow: {
    maxWidth: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

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

  title: {
    flexShrink: 1,
    fontSize: 14,
    lineHeight: 18,
    textAlign: "center",
  },
});