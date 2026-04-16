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
  const { title, subtitle, chargeText, remainingText, fillPercent} = props;

  // Determine battery color based on fill percentage, with thresholds for low, medium, and high charge levels
  let batteryColor = "#2ECC71"; 

  if (fillPercent < 20) {
    batteryColor = "#FF4D4F"; 
  } else if (fillPercent < 50) {
    batteryColor = "#FF9F1C";
  }

  return (
    // Card container that holds the battery icon and text information, styled with a background color and padding
    <View style={styles.card}>
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
    </View>
  );
}

// Styles for the BatteryCard component, including card container, battery icon, and text styles
const styles = StyleSheet.create({
  // Card container with background and padding
  card: {
    backgroundColor: "#3A86FF",
    borderRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 220,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 6,
  },

// Battery icon wrapper with horizontal layout
  batteryWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
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
    marginLeft: -2,
  },
  
// Text styles for title, subtitle, charge text, and remaining text with appropriate colors and font sizes
  title: {
    fontSize: 20,
    letterSpacing: 0.5,
    textAlign: "center",
    marginBottom: 8,
  },
  // Subtitle with slightly smaller font and reduced opacity for a softer look
  subtitle: {
    opacity: 0.8,
    fontSize: 16,
    letterSpacing: 0.5,
    textAlign: "center",
    marginBottom: 10,
  },
  // Charge text with bold font to emphasize the current charge status
  chargeText: {
    fontSize: 16,
    letterSpacing: 0.5,
    textAlign: "center",
    marginBottom: 6,
  },
  // Remaining text with a lighter color to indicate the number of cranks left without overpowering the charge status
  remainingText: {
    opacity: 0.8,
    fontSize: 14,
    letterSpacing: 0.5,
    textAlign: "center",
  },
  
});
