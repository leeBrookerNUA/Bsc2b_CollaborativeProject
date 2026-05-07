import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

// Stores the background lightning bolts.
// Each bolt has its own size, colour and position.
const energyBolts = [
  {
    size: 60,
    color: "rgba(255, 224, 102, 0.22)",
    style: { top: 22, left: 24, transform: [{ rotate: "-16deg" }] },
  },
  {
    size: 42,
    color: "rgba(255, 255, 255, 0.18)",
    style: { top: 30, right: 26, transform: [{ rotate: "14deg" }] },
  },
  {
    size: 34,
    color: "rgba(255, 224, 102, 0.26)",
    style: { top: 116, left: 34, transform: [{ rotate: "12deg" }] },
  },
  {
    size: 52,
    color: "rgba(224, 193, 32, 0.22)",
    style: { top: 138, right: 24, transform: [{ rotate: "20deg" }] },
  },
  {
    size: 28,
    color: "rgba(255, 255, 255, 0.18)",
    style: { top: 216, left: 24, transform: [{ rotate: "-10deg" }] },
  },
  {
    size: 44,
    color: "rgba(255, 224, 102, 0.18)",
    style: { top: 270, right: 26, transform: [{ rotate: "-18deg" }] },
  },
  {
    size: 22,
    color: "rgba(255, 255, 255, 0.2)",
    style: { bottom: 106, left: 52, transform: [{ rotate: "18deg" }] },
  },
  {
    size: 36,
    color: "rgba(224, 193, 32, 0.2)",
    style: { bottom: 60, right: 24, transform: [{ rotate: "12deg" }] },
  },
  {
    size: 26,
    color: "rgba(255, 224, 102, 0.2)",
    style: { bottom: 34, left: 28, transform: [{ rotate: "-18deg" }] },
  },
];

// EnergyBoltBackground creates a decorative full-card lightning pattern.
// pointerEvents is disabled so the background never blocks button presses.
export default function EnergyBoltBackground() {
  return (
    <View style={styles.boltBackground} pointerEvents="none">
      {energyBolts.map((bolt, index) => (
        <MaterialIcons
          key={index}
          name="bolt"
          size={bolt.size}
          color={bolt.color}
          style={[styles.bolt, bolt.style]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  // Full background layer that sits behind the modal content.
  boltBackground: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },

  // Base style for every bolt.
  bolt: {
    position: "absolute",
  },
});