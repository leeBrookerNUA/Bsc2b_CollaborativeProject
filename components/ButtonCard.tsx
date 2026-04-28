import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, Pressable, StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";

type IconLibrary = "FontAwesome" | "MaterialIcons" | "Ionicons";

interface ButtonCardProps {
  iconLibrary?: IconLibrary;
  iconName:
    | React.ComponentProps<typeof FontAwesome>["name"]
    | React.ComponentProps<typeof MaterialIcons>["name"]
    | React.ComponentProps<typeof Ionicons>["name"];
  title: string;
  gradientColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
  onMainButtonPress?: () => void;
}

const iconLibraries = {
  FontAwesome,
  MaterialIcons,
  Ionicons,
};

export default function ButtonCard({
  iconLibrary = "FontAwesome",
  iconName,
  title,
  gradientColors = ["#FFF2A6", "#FFE066", "#E0C120"],
  onMainButtonPress,
}: ButtonCardProps) {
  const Icon = iconLibraries[iconLibrary];

  return (
    <Pressable
      onPress={onMainButtonPress}
      disabled={!onMainButtonPress}
      style={({ pressed }) => [
        styles.card,
        pressed && onMainButtonPress && styles.cardPressed,
      ]}
    >
      <LinearGradient colors={gradientColors} style={styles.gradient} />

      <View pointerEvents="none" style={styles.overlay} />

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Icon name={iconName as any} size={38} color="#FFFFFF" />
        </View>

        <AppHeading style={styles.title}>{title}</AppHeading>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 140,
    borderRadius: 24,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.25)",
  },

  cardPressed: {
    opacity: 0.95,
    transform: [{ scale: 0.98 }],
  },

  gradient: {
    ...StyleSheet.absoluteFillObject,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },

  content: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 14,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  iconContainer: {
    width: 58,
    height: 58,
    marginBottom: 8,
    borderRadius: 29,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.12)",
  },

  title: {
    fontSize: 32,
    textAlign: "center",
  },
});