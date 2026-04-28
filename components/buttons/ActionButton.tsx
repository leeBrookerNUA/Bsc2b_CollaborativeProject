import React from "react";
import { ColorValue, Pressable, StyleSheet } from "react-native";
import AppHeading from "../base/AppHeading";

interface BackHomeCardProps {
  title: string;
  backgroundColor?: ColorValue;
  pressedBackgroundColor?: ColorValue;
  onBackHomePress?: () => void;
}

export default function BackHomeCard({
  title,
  backgroundColor = "rgba(255, 255, 255, 0.15)",
  pressedBackgroundColor = "rgba(58, 134, 255, 0.75)",
  onBackHomePress,
}: BackHomeCardProps) {
  return (
    <Pressable
      onPress={onBackHomePress}
      disabled={!onBackHomePress}
      style={({ pressed }) => [
        styles.card,
        { backgroundColor },
        pressed &&
          onBackHomePress && [
            styles.cardPressed,
            { backgroundColor: pressedBackgroundColor },
          ],
      ]}
    >
      <AppHeading style={styles.title}>{title}</AppHeading>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 44,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.14)",
  },

  cardPressed: {
    transform: [{ scale: 0.95 }],
    borderColor: "rgba(255, 255, 255, 0.5)",
  },

  title: {
    fontSize: 18,
    textAlign: "center",
  },
});