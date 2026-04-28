import React from "react";
import { ColorValue, Pressable, StyleSheet } from "react-native";
import AppHeading from "./AppHeading";

interface BackHomeCardProps {
  title: string;
  onBackHomePress?: () => void;
  backgroundColor?: ColorValue;
  pressedBackgroundColor?: ColorValue;
}

export default function BackHomeCard(props: BackHomeCardProps) {
  const {
    title,
    onBackHomePress,
    backgroundColor = "rgba(255, 255, 255, 0.15)",
    pressedBackgroundColor = "rgba(58, 134, 255, 0.75)",
  } = props;

  return (
    <Pressable
      onPress={onBackHomePress}
      style={({ pressed }) => [
        styles.card,
        { backgroundColor },
        pressed && [
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
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.12)",
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
  },

  cardPressed: {
    transform: [{ scale: 0.95 }],
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.5)",
  },

  title: {
    fontSize: 18,
  },
});