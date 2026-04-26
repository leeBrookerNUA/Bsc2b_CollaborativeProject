import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";

type AnswerState = "default" | "correct" | "wrong";

interface AnswerCardProps {
  title: string;
  state?: AnswerState;
  disabled?: boolean;
  onAnswerPress?: () => void;
}

export default function AnswerCard(props: AnswerCardProps) {
  const { title, state = "default", disabled = false, onAnswerPress } = props;

  return (
    <View style={styles.shadowWrapper}>
    <Pressable
      onPress={onAnswerPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.card,
        state === "correct" && styles.correctCard,
        state === "wrong" && styles.wrongCard,
        pressed && !disabled && styles.cardPressed,
      ]}
    >
      <AppHeading style={styles.title}>{title}</AppHeading>

      {state === "correct" && (
  <FontAwesome style={styles.resultIcon} name="check" size={18} color="#FFFFFF" />
)}

{state === "wrong" && (
  <FontAwesome style={styles.resultIcon} name="times" size={18} color="#FFFFFF" />
)}
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
shadowWrapper: {
  width: "100%",
  borderRadius: 40,

  shadowColor: "#000",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.14,
  shadowRadius: 6,
  elevation: 3,
},

card: {
  width: "100%",
  minHeight: 52,
  backgroundColor: "rgba(155, 93, 229, 0.75)",
  borderRadius: 40,
  paddingVertical: 10,
  paddingHorizontal: 18,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  overflow: "hidden",
},
  correctCard: {
    backgroundColor: "#2ECC71",
  },
  wrongCard: {
    backgroundColor: "#FF5C5C",
  },
  resultIcon: {
  position: "absolute",
  right: 18,
},
  cardPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  title: {
    
    fontSize: 16,
    textAlign: "center",
  },
});