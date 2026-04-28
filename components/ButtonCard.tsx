import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, Pressable, StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";


interface ButtonCardProps {
  iconLibrary?: "FontAwesome" | "MaterialIcons" | "Ionicons";
  iconName:
  | React.ComponentProps<typeof FontAwesome>["name"]
  | React.ComponentProps<typeof MaterialIcons>["name"]
  | React.ComponentProps<typeof Ionicons>["name"];
  title: string;
  gradientColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
  onMainButtonPress?: () => void;
}

export default function ButtonCard(props: ButtonCardProps) {

  const {
    iconLibrary = "FontAwesome",
    iconName,
    title,
    gradientColors = ["#FFF2A6", "#FFE066", "#E0C120"],
    onMainButtonPress,
  } = props;

  const Icon =
    iconLibrary === "MaterialIcons"
      ? MaterialIcons
      : iconLibrary === "Ionicons"
        ? Ionicons

        : FontAwesome;


  return (
    <View style={styles.shadowWrapper}>
      <Pressable
        onPress={onMainButtonPress}
        style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      >
        <LinearGradient colors={gradientColors} style={styles.gradient} />

        <View pointerEvents="none" style={styles.darkOverlay} />
        <View pointerEvents="none" style={styles.lightOverlay} />

        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Icon name={iconName as any} size={40} color="#FFFFFF" />
          </View>

          <AppHeading style={styles.title}>{title}</AppHeading>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowWrapper: {
    width: "100%",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },

  card: {
    position: "relative",
    width: "100%",
    height: 140,
    borderRadius: 24,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },

  cardPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.95,
  },

  gradient: {
    ...StyleSheet.absoluteFillObject,
  },

  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },

  lightOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },

  content: {
    zIndex: 1,
    width: "100%",
    height: "100%",
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  iconContainer: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 99,
    width: 58,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },

  title: {
    fontSize: 32,
    textAlign: "center",
  },
});