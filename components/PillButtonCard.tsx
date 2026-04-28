import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";

interface PillButtonCardProps {
  title: string;
  selected?: boolean;
  tintColor?: string;
  onPillPress?: () => void;
}

export default function PillButtonCard({
  title,
  selected = false,
  tintColor = "#EBC50A",
  onPillPress,
}: PillButtonCardProps) {
  return (
    <Pressable
      onPress={onPillPress}
      style={({ pressed }) => [
        styles.card,
        selected && styles.cardSelected,
        selected && { backgroundColor: tintColor },
        pressed && styles.cardPressed,
      ]}
    >
      <View style={[styles.topHighlight, selected && styles.topHighlightSelected]} />

      <AppHeading style={styles.title}>{title}</AppHeading>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 36,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 99,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3CD11",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.22)",
  },

  cardSelected: {
    transform: [{ translateY: 1 }],
    borderColor: "rgba(255, 255, 255, 0.12)",
  },

  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },

  topHighlight: {
    position: "absolute",
    top: 0,
    left: 4,
    right: 4,
    height: "28%",
    borderRadius: 99,
    backgroundColor: "rgba(255, 255, 255, 0.28)",
  },

  topHighlightSelected: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },

  title: {
    zIndex: 1,
    fontSize: 20,
    textAlign: "center",
  },
});