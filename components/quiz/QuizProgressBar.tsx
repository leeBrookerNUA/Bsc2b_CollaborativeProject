import React from "react";
import { StyleSheet, View } from "react-native";

interface QuizProgressBarProps {
  // Index of the question the user is currently on.
  // This starts at 0, so 1 is added when calculating progress.
  currentQuestion: number;

  // Total number of questions in the quiz.
  totalQuestions: number;
}

// QuizProgressBar is a reusable component used on quiz screens.
// It visually shows how far through the quiz the user currently is.
export default function QuizProgressBar({
  currentQuestion,
  totalQuestions,
}: QuizProgressBarProps) {
  /*
    Calculates the quiz progress as a value between 0 and 1.
    If totalQuestions is 0, progress is set to 0 to avoid dividing by zero.
  */
  const progress =
    totalQuestions > 0 ? (currentQuestion + 1) / totalQuestions : 0;

  /*
    Converts the progress value into a percentage for the fill width.
    Math.min and Math.max keep the percentage within a safe range.
  */
  const progressPercent = Math.min(Math.max(progress, 0), 1) * 100;

  return (
    <View style={styles.track}>
      {/*
        Fill bar shows the current quiz progress.
        Its width changes depending on the current question number.
      */}
      <View style={[styles.fill, { width: `${progressPercent}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  // Background track of the progress bar.
  // The rounded shape gives it a soft pill-style appearance.
  track: {
    width: "100%",
    height: 8,
    borderRadius: 99,
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },

  // Filled part of the progress bar.
  // This grows wider as the user moves through the quiz.
  fill: {
    height: "100%",
    borderRadius: 99,
    backgroundColor: "#FFD60A",
  },
});