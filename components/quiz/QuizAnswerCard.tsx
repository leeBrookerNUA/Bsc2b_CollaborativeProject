import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import AppHeading from "../base/AppHeading";

type AnswerState = "default" | "correct" | "wrong";

interface QuizAnswerCardProps {
  title: string;
  state?: AnswerState;
  disabled?: boolean;
  onAnswerPress?: () => void;
}

export default function QuizAnswerCard({
  title,
  state = "default",
  disabled = false,
  onAnswerPress,
}: QuizAnswerCardProps) {
  const isDisabled = disabled || !onAnswerPress;
  const isAnswered = state !== "default";

  const resultIconName =
    state === "correct" ? "check" : state === "wrong" ? "times" : undefined;

  return (
    <Pressable
      onPress={onAnswerPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.card,
        state === "correct" && styles.correctCard,
        state === "wrong" && styles.wrongCard,
        isDisabled && styles.cardDisabled,
        pressed && !isDisabled && styles.cardPressed,
      ]}
    >
      <AppHeading
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[styles.title, isAnswered && styles.titleWithIcon]}
      >
        {title}
      </AppHeading>

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

  correctCard: {
    backgroundColor: "#2ECC71",
  },

  wrongCard: {
    backgroundColor: "#FF5C5C",
  },

  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },

  cardDisabled: {
    opacity: 0.85,
  },

  title: {
    width: "100%",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
  },

  titleWithIcon: {
    paddingRight: 28,
  },

  resultIcon: {
    position: "absolute",
    right: 18,
  },
});