import React from "react";
import { StyleSheet, View } from "react-native";

interface PaginationDotsProps {
  // Total number of dots to display.
  // This should match the number of items in the carousel.
  total: number;

  // Index of the currently active item.
  // This controls which dot is highlighted.
  activeIndex: number;
}

// PaginationDots is a reusable component used under swipeable content.
// It shows the user how many items there are and which one they are currently viewing.
export default function PaginationDots({
  total,
  activeIndex,
}: PaginationDotsProps) {
  /*
    Creates an array with the same length as the total number of items.
    Math.max prevents a negative number from being used if total is ever below 0.
  */
  const dots = Array.from({ length: Math.max(0, total) });

  return (
    <View style={styles.container}>
      {/*
        Loops through the dots array and renders one dot for each item.
        The active dot gets an extra style so it appears highlighted.
      */}
      {dots.map((_, index) => (
        <View
          key={index}
          style={[styles.dot, index === activeIndex && styles.dotActive]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  // Main container for the dots.
  // The row layout places all dots horizontally and centres them.
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  // Default dot style.
  // Equal width and height with borderRadius creates a circle.
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },

  // Highlighted style for the active dot.
  // The white colour shows which carousel item is currently selected.
  dotActive: {
    backgroundColor: "#FFFFFF",
  },
});