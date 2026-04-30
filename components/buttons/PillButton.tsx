import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { playLoadedSound } from "../../audio/audio";
import AppHeading from "../base/AppHeading";

interface PillButtonProps {

  // Text displayed inside the pill button.
  title: string;

  // Controls whether this pill is currently selected.
  // The selected pill is styled differently so the user can see the active category.
  selected?: boolean;

  // Colour used when the pill is selected.
  // This allows different categories to have different theme colours.
  tintColor?: string;

  // Function called when the pill button is pressed.
  onPillPress?: () => void;
}

// PillButton is a reusable small rounded button.
// It is mainly used for switching between categories, such as Solar, Wind, and Manual facts.
export default function PillButton({
  title,
  selected = false,
  tintColor = "#EBC50A",
  onPillPress,
}: PillButtonProps) {
  return (
    <Pressable

      // Runs the press function and plays a sound effect when the user taps the pill.
      onPress={() => {
        playLoadedSound();
        onPillPress?.();
      }}

      android_disableSound={true} // Disables the default Android button sound as we have our own custom button sound effect.

      // Applies the default pill style, then adds selected and pressed styles when needed.
      style={({ pressed }) => [
        styles.card,
        selected && styles.cardSelected,
        selected && { backgroundColor: tintColor },
        pressed && styles.cardPressed,
      ]}
    >
      {/* Top highlight gives the pill a shiny button effect. The highlight becomes softer when the pill is selected. */}
      <View
        style={[
          styles.topHighlight,
          selected && styles.topHighlightSelected,
        ]}
      />

      {/* Displays the pill text using the reusable heading style. */}
      <AppHeading style={styles.title}>{title}</AppHeading>
    </Pressable>
  );
}

const styles = StyleSheet.create({

  // Main pill button container.
  // flex: 1 helps multiple pill buttons share the row space evenly.
  card: {
    flex: 1,
    minHeight: 36,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 99,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3CD11",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.22)",
  },

  // Style applied when this pill is the selected category.
  // The small translateY effect makes it look pressed into place.
  cardSelected: {
    transform: [{ translateY: 1 }],
    borderColor: "rgba(255, 255, 255, 0.12)",
  },

  // Style applied while the pill is being pressed.
  // The opacity and scale make the button feel interactive.
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },

  // Decorative highlight across the top of the pill.
  // This helps create a glossy, child-friendly button style.
  topHighlight: {
    position: "absolute",
    top: 0,
    left: 4,
    right: 4,
    height: "28%",
    borderRadius: 99,
    backgroundColor: "rgba(255, 255, 255, 0.28)",
  },

  // Softer highlight used when the pill is selected.
  topHighlightSelected: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },

  // Styles the pill label and keeps it above the highlight layer.
  title: {
    zIndex: 1,
    fontSize: 20,
    textAlign: "center",
  },
});