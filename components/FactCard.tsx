import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";
import AppText from "./AppText";

interface FactCardProps {
  iconName: React.ComponentProps<typeof FontAwesome5>["name"];
  title: string;
  subText: string;
  gradientColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
}

export default function FactCard(props: FactCardProps) {
  const {
    iconName,
    title,
    subText,
    gradientColors = ["#FFF2A6", "#FFE066", "#E0C120"],
  } = props;

  return (
    <View style={styles.shadowWrapper}>
      <View style={styles.card}>
        <LinearGradient
          colors={gradientColors}
          style={styles.gradient}
        />

        <View pointerEvents="none" style={styles.darkOverlay} />
        <View pointerEvents="none" style={styles.lightOverlay} />

        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <FontAwesome5 name={iconName} size={36} color="#FFFFFF" />
          </View>

          <AppHeading style={styles.title}>{title}</AppHeading>
          <AppText style={styles.subText}>{subText}</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowWrapper: {
    width: "100%",
    borderRadius: 30,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },

  card: {
    position: "relative",
    width: "100%",
    minHeight: 220,
    borderRadius: 24,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },

  gradient: {
    ...StyleSheet.absoluteFill,
  },

  darkOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },

  lightOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },

 content: {
  zIndex: 1,
  width: "100%",
  paddingTop: 10,
  paddingBottom: 22,
  paddingHorizontal: 20,
  alignItems: "center",
  justifyContent: "center",
},

  iconContainer: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 99,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },

  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },

  subText: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 20,
  },
});