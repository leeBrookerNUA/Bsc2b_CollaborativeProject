import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import AppHeading from "../base/AppHeading";
import AppText from "../base/AppText";

interface FunFactCardProps {

  // Main heading displayed at the top of the card.
  title: string;

  // Extra text shown underneath the title.
  subtitle: string;

  // Text displayed inside the button.
  button: string;

  // Function called when the button is pressed.
  onMorePress?: () => void;
}

// FunFactCard is a reusable card component used to show a short learning fact.
// It includes a title, supporting text, and a button for learning more.
export default function FunFactCard({
  title,
  subtitle,
  button,
  onMorePress,
}: FunFactCardProps) {
  return (
    <LinearGradient
      colors={["#FFF2A6", "#FFE066", "#E0C120"]}
      style={styles.card}
    >
      {/* Overlay adds a subtle dark layer on top of the gradient. This helps the white text stand out more clearly. */}
      <View pointerEvents="none" style={styles.overlay} />

      {/* Content container holds the title, subtitle, and button above the gradient and overlay layers. */}
      <View style={styles.content}>

        {/* Displays the main fun fact title. */}
        <AppHeading style={styles.title}>{title}</AppHeading>

        {/* Displays the fun fact description text. */}
        <AppText style={styles.subtitle}>{subtitle}</AppText>

        {/* Learn More button. It is disabled if no onMorePress function is provided.*/}
        <Pressable
          onPress={onMorePress}
          disabled={!onMorePress}
          style={({ pressed }) => [
            styles.moreButton,
            pressed && onMorePress && styles.moreButtonPressed,
          ]}
        >

          {/* Displays the button label using the reusable heading style. */}
          <AppHeading style={styles.buttonText}>{button}</AppHeading>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  // Main fun fact card container.
  // The gradient background, rounded corners, and border match the app's card style.
  card: {
    width: "100%",
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.25)",
  },

  // Adds a subtle dark overlay over the gradient for better text contrast.
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },

  // Holds all visible card content.
  content: {
    width: "100%",
  },

  // Styles the main fun fact heading.
  title: {
    fontSize: 20,
    marginBottom: 6,
    textAlign: "left",
  },

  // Styles the supporting fun fact text.
  // lineHeight improves readability when the text wraps.
  subtitle: {
    fontSize: 18,
    lineHeight: 23,
    marginBottom: 10,
    textAlign: "left",
  },

  // Styles the Learn More button.
  // The transparent background and border match the soft glass style of the app.
  moreButton: {
    width: "100%",
    paddingVertical: 8,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.18)",
  },

  // Style applied while the button is being pressed.
  // The scale effect makes the button feel interactive.
  moreButtonPressed: {
    transform: [{ scale: 0.98 }],
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    borderColor: "rgba(255, 255, 255, 0.5)",
  },

  // Styles the Learn More button text.
  buttonText: {
    fontSize: 16,
    textAlign: "center",
  },
});