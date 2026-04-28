import React from "react";
import { StyleSheet, View } from "react-native";

interface QuizProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

export default function QuizProgressBar({
  currentQuestion,
  totalQuestions,
}: QuizProgressBarProps) {
  const progress = totalQuestions > 0 ? (currentQuestion + 1) / totalQuestions : 0;
  const progressPercent = Math.min(Math.max(progress, 0), 1) * 100;

  return (
    <View style={styles.track}>
      <View style={[styles.fill, { width: `${progressPercent}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: "100%",
    height: 8,
    borderRadius: 99,
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },

  fill: {
    height: "100%",
    borderRadius: 99,
    backgroundColor: "#FFD60A",
  },
});