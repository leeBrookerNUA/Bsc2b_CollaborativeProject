import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, Pressable, StyleSheet, View } from "react-native";
import AppHeading from "../base/AppHeading";
import AppText from "../base/AppText";

interface QuizSelectCardProps {
  iconName: React.ComponentProps<typeof AntDesign>["name"];
  iconCount?: number;
  title: string;
  subTitle: string;
  gradientColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
  onQuizButtonPress?: () => void;
}

export default function QuizSelectCard({
  iconName,
  iconCount = 1,
  title,
  subTitle,
  gradientColors = ["#FFF2A6", "#FFE066", "#E0C120"],
  onQuizButtonPress,
}: QuizSelectCardProps) {
  const icons = Array.from({ length: Math.max(0, iconCount) });

  return (
    <Pressable
      onPress={onQuizButtonPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <LinearGradient colors={gradientColors} style={styles.gradient} />

      <View pointerEvents="none" style={styles.overlay} />

      <View style={styles.content}>
        <View style={styles.iconRow}>
          {icons.map((_, index) => (
            <AntDesign
              key={`${iconName}-${index}`}
              name={iconName}
              size={32}
              color="#FFFFFF"
            />
          ))}
        </View>

        <AppHeading style={styles.title}>{title}</AppHeading>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    marginBottom: 6,
  },

  title: {
    fontSize: 24,
    textAlign: "center",
  },

  subTitle: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
  },
});