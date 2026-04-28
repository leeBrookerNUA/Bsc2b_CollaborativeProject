import { AntDesign, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";
import AppText from "./AppText";

interface QuizResultCardProps {
  iconLibrary?: "FontAwesome" | "AntDesign" | "MaterialCommunityIcons";
  iconName1:
  | React.ComponentProps<typeof FontAwesome>["name"]
  | React.ComponentProps<typeof AntDesign>["name"]
  | React.ComponentProps<typeof MaterialCommunityIcons>["name"]
  iconName2?:
  | React.ComponentProps<typeof FontAwesome>["name"]
  | React.ComponentProps<typeof AntDesign>["name"]
  | React.ComponentProps<typeof MaterialCommunityIcons>["name"]
  iconCount?: number;
  title: string;
  subTitle: string,
  subText: string,
  gradientColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
}

export default function QuizResultCard(props: QuizResultCardProps) {
  const {
    iconLibrary = "FontAwesome", iconName1, iconName2, iconCount = 1, title, subTitle, subText, gradientColors = ["#FFF2A6", "#FFE066", "#E0C120"] } = props;

  const Icon =
    iconLibrary === "AntDesign"
      ? AntDesign
      : iconLibrary === "MaterialCommunityIcons"
        ? MaterialCommunityIcons
        : FontAwesome;

  return (
    <View style={styles.shadowWrapper}>

      <View style={styles.card} >

        <LinearGradient
          colors={gradientColors}
          style={styles.gradient}
        />

        <View pointerEvents="none" style={styles.darkOverlay} />
        <View pointerEvents="none" style={styles.lightOverlay} />

        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Icon name={iconName1 as any} size={32} color="#FFFFFF" />
          </View>

          <AppHeading style={styles.title}>{title}</AppHeading>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
          <AppText style={styles.subText}>{subText}</AppText>

          <View style={styles.iconRow}>
            {Array.from({ length: iconCount }).map((_, index) => (
              <Icon key={index} name={iconName2 as any} size={32} color="#FFFFFF" />
            ))}
          </View>

        </View>
      </View>
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
    height: 240,
    borderRadius: 24,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
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
  iconRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 8,
  },

  iconContainer: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 99,
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },

  title: {
    fontSize: 24,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 20,
  },

  subText: {
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
});