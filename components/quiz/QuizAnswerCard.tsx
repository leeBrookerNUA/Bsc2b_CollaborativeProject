import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import AppHeading from "../base/AppHeading";

// Controls the visual state of an answer card.
// default is used before answering, correct is used for the right answer,
// and wrong is used for an incorrect selected answer.
type AnswerState = "default" | "correct" | "wrong";

interface QuizAnswerCardProps {
  // Answer text displayed inside the card.
  title: string;

  // Controls the card colour and result icon.
  state?: AnswerState;

  // Prevents the answer card from being pressed when needed.
  disabled?: boolean;

  // Function called when the answer card is pressed.
  onAnswerPress?: () => void;
}

// QuizAnswerCard is a reusable answer button used in quiz screens.
// It can show default, correct, or wrong styling depending on the user's answer.
export default function QuizAnswerCard({
  title,
  state = "default",
  disabled = false,
  onAnswerPress,
}: QuizAnswerCardProps) {
  // The card is disabled if disabled is true or if no press function is provided.
  const isDisabled = disabled || !onAnswerPress;

  // Checks whether the card is showing answer feedback.
  // This is used to adjust the text spacing when an icon is shown.
  const isAnswered = state !== "default";

  // Chooses which result icon to show.
  // A check icon is shown for correct answers and a times icon is shown for wrong answers.
  const resultIconName =
    state === "correct" ? "check" : state === "wrong" ? "times" : undefined;

  return (
    <Pressable
      // Runs the answer press function when the user taps the card.
      onPress={onAnswerPress}

      // Stops the user pressing the card when it is disabled.
      disabled={isDisabled}

      // Applies the default card style, then adds correct, wrong,
      // disabled, or pressed styles when needed.
      style={({ pressed }) => [
        styles.card,
        state === "correct" && styles.correctCard,
        state === "wrong" && styles.wrongCard,
        isDisabled && styles.cardDisabled,
        pressed && !isDisabled && styles.cardPressed,
      ]}
    >
      {/*
        Displays the answer text.
        numberOfLines and adjustsFontSizeToFit help longer answers fit on one line.
      */}
      <AppHeading
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[styles.title, isAnswered && styles.titleWithIcon]}
      >
        {title}
      </AppHeading>

      {/*
        Shows a feedback icon after the user has answered.
        No icon is shown while the card is still in its default state.
      */}
      {resultIconName && (
        <FontAwesome
          name={resultIconName}
          size={18}
          color="#FFFFFF"
          style={styles.resultIcon}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  // Main answer card style.
  // The rounded shape, purple background, and border make it look like a large button.
  card: {
    width: "100%",
    minHeight: 56,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 40,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "rgba(155, 93, 229, 0.75)",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.16)",
  },

  // Style used when this answer is correct.
  correctCard: {
    backgroundColor: "#2ECC71",
  },

  // Style used when this answer is wrong.
  wrongCard: {
    backgroundColor: "#FF5C5C",
  },

  // Style applied while the card is being pressed.
  // The scale effect makes the card feel interactive.
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },

  // Style applied when the card is disabled.
  // This shows that the user cannot select another answer.
  cardDisabled: {
    opacity: 0.85,
  },

  // Styles the answer text and keeps it centred inside the card.
  title: {
    width: "100%",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
  },

  // Adds extra right padding when a result icon is shown.
  // This helps keep the answer text visually centred.
  titleWithIcon: {
    paddingRight: 28,
  },

  // Positions the result icon on the right side of the answer card.
  resultIcon: {
    position: "absolute",
    right: 18,
  },
});