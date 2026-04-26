import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, Pressable, StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";
import AppText from "./AppText";

interface QuizSelectCardProps {
  iconName: React.ComponentProps<typeof AntDesign>["name"];
  title: string;
  subTitle: string,
  gradientColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
  onQuizButtonPress?: () => void;
}

export default function QuizSelectCard(props: QuizSelectCardProps) {
  const {
    iconName, title, subTitle, gradientColors = ["#FFF2A6", "#FFE066", "#E0C120"], onQuizButtonPress, } = props;

  return (
    <View style={styles.shadowWrapper}>
      <Pressable
        onPress={onQuizButtonPress}
        style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      >
        <LinearGradient
          colors={gradientColors}
          style={styles.gradient}
        />

        <View pointerEvents="none" style={styles.darkOverlay} />
        <View pointerEvents="none" style={styles.lightOverlay} />

        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <AntDesign name={iconName} size={32} color="#FFFFFF" />
          </View>

          <AppHeading style={styles.title}>{title}</AppHeading>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
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
});