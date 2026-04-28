import React from "react";
import { StyleSheet, View } from "react-native";

interface PaginationDotsProps {
  total: number;
  activeIndex: number;
}

export default function PaginationDots({
  total,
  activeIndex,
}: PaginationDotsProps) {
  const dots = Array.from({ length: Math.max(0, total) });

  return (
    <View style={styles.container}>
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
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },

  dotActive: {
    backgroundColor: "#FFFFFF",
  },
});