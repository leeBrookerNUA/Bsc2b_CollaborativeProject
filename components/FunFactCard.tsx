import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";
import AppText from "./AppText";

interface FunFactCardProps {
  title: string;
  subtitle: string;
  button: string;
  onMorePress?: () => void;
}

export default function FunFactCard({
  title,
  subtitle,
  button,
  onMorePress,
}: FunFactCardProps) {
  return (
    <LinearGradient
      colors={["#FFF2A6", "#FFE066", "#E0C120"]}
      style={styles.card}
    >
      <View pointerEvents="none" style={styles.overlay} />

      <View style={styles.content}>
        <AppHeading style={styles.title}>{title}</AppHeading>
        <AppText style={styles.subtitle}>{subtitle}</AppText>

        <Pressable
          onPress={onMorePress}
          disabled={!onMorePress}
          style={({ pressed }) => [
            styles.moreButton,
            pressed && onMorePress && styles.moreButtonPressed,
          ]}
        >
          <AppHeading style={styles.buttonText}>{button}</AppHeading>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.25)",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },

  content: {
    width: "100%",
  },

  title: {
    fontSize: 20,
    marginBottom: 6,
    textAlign: "left",
  },

  subtitle: {
    fontSize: 18,
    lineHeight: 23,
    marginBottom: 10,
    textAlign: "left",
  },

  moreButton: {
    width: "100%",
    paddingVertical: 8,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.18)",
  },

  moreButtonPressed: {
    transform: [{ scale: 0.98 }],
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    borderColor: "rgba(255, 255, 255, 0.5)",
  },

  buttonText: {
    fontSize: 16,
    textAlign: "center",
  },
});