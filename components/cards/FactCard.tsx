import {
    AntDesign,
    Feather,
    FontAwesome5,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import AppHeading from "../base/AppHeading";
import AppText from "../base/AppText";

type IconLibrary =
  | "FontAwesome5"
  | "AntDesign"
  | "MaterialIcons"
  | "MaterialCommunityIcons"
  | "Feather";

interface FactCardProps {
  iconLibrary?: IconLibrary;
  iconName:
    | React.ComponentProps<typeof FontAwesome5>["name"]
    | React.ComponentProps<typeof AntDesign>["name"]
    | React.ComponentProps<typeof MaterialIcons>["name"]
    | React.ComponentProps<typeof MaterialCommunityIcons>["name"]
    | React.ComponentProps<typeof Feather>["name"];
  title: string;
  subText: string;
  gradientColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
}

const iconLibraries = {
  FontAwesome5,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
};

export default function FactCard({
  iconLibrary = "FontAwesome5",
  iconName,
  title,
  subText,
  gradientColors = ["#FFF2A6", "#FFE066", "#E0C120"],
}: FactCardProps) {

  const Icon = iconLibraries[iconLibrary];

  return (
    <LinearGradient colors={gradientColors} style={styles.card}>
      <View pointerEvents="none" style={styles.overlay} />

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Icon name={iconName as any} size={34} color="#FFFFFF" />
        </View>

        <AppHeading style={styles.title}>{title}</AppHeading>
        <AppText style={styles.subText}>{subText}</AppText>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: 220,
    paddingHorizontal: 20,
    paddingVertical: 22,
    borderRadius: 24,
    overflow: "hidden",
    alignItems: "center",
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
    alignItems: "center",
    justifyContent: "center",
  },

  iconContainer: {
    width: 60,
    height: 60,
    marginBottom: 8,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.12)",
  },

  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },

  subText: {
    fontSize: 20,
    lineHeight: 25,
    textAlign: "center",
  },
});