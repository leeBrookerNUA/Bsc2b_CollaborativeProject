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
  onMainButtonPress?: () => void;
}

export default function FactCard(props: FactCardProps) {
  const { iconName, title, subText, gradientColors = ["#FFF2A6", "#FFE066", "#E0C120"], onMainButtonPress,} = props;

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
            <FontAwesome5 name={iconName} size={32} color="#FFFFFF" />
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
  subText: {
    fontSize: 18,
    textAlign: "center",
  }
});