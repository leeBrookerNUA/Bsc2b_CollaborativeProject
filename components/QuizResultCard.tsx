import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";
import AppText from "./AppText";

type IconLibrary = "FontAwesome" | "AntDesign" | "MaterialCommunityIcons";

interface QuizResultCardProps {
  iconLibrary?: IconLibrary;
  iconName1:
    | React.ComponentProps<typeof FontAwesome>["name"]
    | React.ComponentProps<typeof AntDesign>["name"]
    | React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  iconName2?:
    | React.ComponentProps<typeof FontAwesome>["name"]
    | React.ComponentProps<typeof AntDesign>["name"]
    | React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  iconCount?: number;
  title: string;
  subTitle: string;
  subText: string;
  gradientColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
}

const iconLibraries = {
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
};

export default function QuizResultCard({
  iconLibrary = "FontAwesome",
  iconName1,
  iconName2,
  iconCount = 1,
  title,
  subTitle,
  subText,
  gradientColors = ["#FFF2A6", "#FFE066", "#E0C120"],
}: QuizResultCardProps) {
  const Icon = iconLibraries[iconLibrary];
  const extraIcons = Array.from({ length: Math.max(0, iconCount) });

  return (
    <View style={styles.card}>
      <LinearGradient colors={gradientColors} style={styles.gradient} />

      <View pointerEvents="none" style={styles.overlay} />

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Icon name={iconName1 as any} size={32} color="#FFFFFF" />
        </View>

        <AppHeading style={styles.title}>{title}</AppHeading>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
        <AppText style={styles.subText}>{subText}</AppText>

        {iconName2 && extraIcons.length > 0 && (
          <View style={styles.iconRow}>
            {extraIcons.map((_, index) => (
              <Icon
                key={`${iconName2}-${index}`}
                name={iconName2 as any}
                size={28}
                color="#FFFFFF"
              />
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: 210,
    borderRadius: 24,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.25)",
  },

  gradient: {
    ...StyleSheet.absoluteFillObject,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  },

  content: {
    width: "100%",
    paddingHorizontal: 22,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  iconContainer: {
    width: 58,
    height: 58,
    marginBottom: 10,
    borderRadius: 29,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.16)",
  },

  title: {
    fontSize: 25,
    marginBottom: 6,
    textAlign: "center",
  },

  subTitle: {
    fontSize: 16,
    lineHeight: 21,
    marginBottom: 2,
    textAlign: "center",
  },

  subText: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.95,
    textAlign: "center",
  },

  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: 10,
  },
});