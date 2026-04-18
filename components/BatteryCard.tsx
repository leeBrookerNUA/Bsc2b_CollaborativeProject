import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";
import AppText from "./AppText";

// Define the props for the BatteryCard component, including title, subtitle, charge text, remaining text, and fill percentage for the battery icon
interface BatteryCardProps {
  title: string;
  subtitle: string;
  chargeText: string;
  remainingText: string;
  fillPercent: number;
}

// BatteryCard component that displays a battery icon with dynamic fill based on the fillPercent prop, along with title, subtitle, charge status, and remaining cranks information
export default function BatteryCard(props: BatteryCardProps) {
  // Destructure props for easier access to individual properties
  const { title, subtitle, chargeText, remainingText, fillPercent } = props;

  // Determine battery color based on fill percentage, with thresholds for low, medium, and high charge levels
  let batteryColor = "#2ECC71";

  if (fillPercent < 20) {
    batteryColor = "#FF4D4F";
  } else if (fillPercent < 50) {
    batteryColor = "#FF9F1C";
  }

  return (
    // Card container that holds the battery icon and text information, styled with a background color and padding
    <LinearGradient style={styles.card} colors={["#8FC4FF", "#3A86FF"]}>
      <View style={styles.darkOverlay} />
      <View style={styles.lightOverlay} />
      {/* Battery icon wrapper */}
      <View style={styles.batteryWrapper}>

        <View style={styles.batteryBody}>
          {/* Uses fillPercent to determine battery fill width */}
          <View style={[styles.batteryFill, { width: `${fillPercent}%`, backgroundColor: batteryColor },]} />
        </View>
        <View style={styles.batteryTip} />
      </View>

      <AppHeading style={styles.title}>{title}</AppHeading>
      <AppText style={styles.subtitle}>{subtitle}</AppText>
      <AppHeading style={styles.chargeText}>{chargeText}</AppHeading>
      <AppText style={styles.remainingText}>{remainingText}</AppText>
    </LinearGradient>
  );
}

// Styles for the BatteryCard component, including card container, battery icon, and text styles
const styles = StyleSheet.create({
  // Card container with background and padding
  card: {
    width: "100%",
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 150,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },

  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 24,
  },
  lightOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 24,
  },

  // Battery icon wrapper with horizontal layout
  batteryWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  // Battery body with border and padding
  batteryBody: {
    width: 120,
    height: 60,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    borderRadius: 16,
    padding: 6,
    justifyContent: "center",
  },
  // Battery fill with dynamic width based on fillPercent prop
  batteryFill: {
    height: "100%",
    backgroundColor: "#2ECC71",
    borderRadius: 12,
  },
  // Battery tip to represent the positive terminal of the battery
  batteryTip: {
    width: 10,
    height: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    marginLeft: -4,
  },

  // Text styles for title, subtitle, charge text, and remaining text with appropriate colors and font sizes
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 6,
  },
  // Subtitle with slightly smaller font and reduced opacity for a softer look
  subtitle: {
    opacity: 0.8,
    fontSize: 18,
    textAlign: "center",
    marginBottom: 6,
  },
  // Charge text with bold font to emphasize the current charge status
  chargeText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 6,
  },
  // Remaining text with a lighter color to indicate the number of cranks left without overpowering the charge status
  remainingText: {
    opacity: 0.8,
    fontSize: 16,
    textAlign: "center",
  },

});
