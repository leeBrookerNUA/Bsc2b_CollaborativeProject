import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppHeading from "../base/AppHeading";
import AppText from "../base/AppText";

interface BatteryCardProps {

  // Main title displayed on the battery card.
  title: string;

  // Smaller text shown underneath the title.
  subtitle: string;

  // Text showing the current battery charge amount.
  chargeText: string;

  // Text showing extra charging information, such as remaining cranks.
  remainingText: string;

  // Percentage used to control how full the battery bar appears.
  fillPercent: number;
}

// Chooses the battery fill colour based on the charge percentage.
// Red is used for low battery, orange for medium battery, and green for higher battery.
function getBatteryColor(fillPercent: number) {
  if (fillPercent < 20) return "#FF4D4F";
  if (fillPercent < 50) return "#FF9F1C";

  return "#2ECC71";
}

// BatteryCard is a reusable card that displays the toy's charging progress.
// It shows a battery graphic, charge percentage text, and extra charging information.
export default function BatteryCard({
  title,
  subtitle,
  chargeText,
  remainingText,
  fillPercent,
}: BatteryCardProps) {

  /* Keeps the battery percentage between 0 and 100. This prevents the fill bar from becoming too small or overflowing the battery shape.*/
  const safeFillPercent = Math.min(Math.max(fillPercent, 0), 100);

  // Gets the correct battery colour for the current charge level.
  const batteryColor = getBatteryColor(safeFillPercent);

  return (
    <LinearGradient colors={["#8FC4FF", "#3A86FF"]} style={styles.card}>

      {/* Overlay adds a slight dark layer on top of the gradient. This helps the white text and battery outline stand out clearly. */}
      <View pointerEvents="none" style={styles.overlay} />

      {/* Battery wrapper holds the main battery body and the small battery tip. The row direction places them side by side. */}
      <View style={styles.batteryWrapper}>

        {/* Battery body creates the outline of the battery The fill view inside it changes width based on the charge percentage. */}
        <View style={styles.batteryBody}>
          <View
            style={[
              styles.batteryFill,
              {
                width: `${safeFillPercent}%`,
                backgroundColor: batteryColor,
              },
            ]}
          />
        </View>

        {/* Small battery tip shown on the right side of the battery icon. */}
        <View style={styles.batteryTip} />
      </View>

      {/* Displays the main battery status title. */}
      <AppHeading style={styles.title}>{title}</AppHeading>

      {/* Displays a short subtitle explaining what is happening. */}
      <AppText style={styles.subtitle}>{subtitle}</AppText>

      {/* Displays the current charge percentage text. */}
      <AppHeading style={styles.chargeText}>{chargeText}</AppHeading>

      {/* Displays extra information .*/}
      <AppText style={styles.remainingText}>{remainingText}</AppText>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  // Main battery card container.
  // The gradient background, rounded corners, and border match the app's card style.
  card: {
    width: "100%",
    minHeight: 150,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 24,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.25)",
  },

  // Adds a subtle dark layer over the gradient for better contrast.
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },

  // Places the battery body and tip next to each other.
  batteryWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  // Creates the main battery outline.
  batteryBody: {
    width: 120,
    height: 60,
    padding: 6,
    borderWidth: 4,
    borderRadius: 16,
    borderColor: "#FFFFFF",
    justifyContent: "center",
  },

  // Shows the filled part of the battery.
  // Its width and colour are set dynamically in the component.
  batteryFill: {
    height: "100%",
    borderRadius: 10,
  },

  // Creates the small battery tip on the right side.
  batteryTip: {
    width: 10,
    height: 20,
    marginLeft: -4,
    borderRadius: 2,
    backgroundColor: "#FFFFFF",
  },

  // Styles the main title text.
  title: {
    fontSize: 24,
    marginBottom: 6,
    textAlign: "center",
  },

  // Styles the subtitle text underneath the title.
  subtitle: {
    fontSize: 18,
    marginBottom: 6,
    opacity: 0.8,
    textAlign: "center",
  },

  // Styles the charge percentage text.
  chargeText: {
    fontSize: 18,
    marginBottom: 6,
    textAlign: "center",
  },

  // Styles the smaller remaining information text.
  remainingText: {
    fontSize: 16,
    opacity: 0.8,
    textAlign: "center",
  },
});