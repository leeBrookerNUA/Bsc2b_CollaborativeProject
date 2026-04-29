import React from "react";
import { ColorValue, Pressable, StyleSheet } from "react-native";
import AppHeading from "../base/AppHeading";

interface BackHomeCardProps {
  // Text displayed inside the button.
  title: string;

  // Optional background colour for the normal button state.
  // If no colour is passed in, the default glass-style colour is used.
  backgroundColor?: ColorValue;

  // Optional background colour used while the button is being pressed.
  pressedBackgroundColor?: ColorValue;

  // Function called when the button is pressed.
  // This is usually used to navigate back to the Home page.
  onBackHomePress?: () => void;
}

// BackHomeCard is a reusable button-style component.
// It is used for navigation actions such as returning to the Home page.
export default function BackHomeCard({
  title,
  backgroundColor = "rgba(255, 255, 255, 0.15)",
  pressedBackgroundColor = "rgba(58, 134, 255, 0.75)",
  onBackHomePress,
}: BackHomeCardProps) {
  return (
    <Pressable
      // Runs the press function when the user taps the button.
      onPress={onBackHomePress}

      // Disables the button if no press function has been provided.
      disabled={!onBackHomePress}

      // Applies the default button style, custom background colour,
      // and pressed style when the user taps the button.
      style={({ pressed }) => [
        styles.card,
        { backgroundColor },
        pressed &&
          onBackHomePress && [
            styles.cardPressed,
            { backgroundColor: pressedBackgroundColor },
          ],
      ]}
    >
      {/* Displays the button text using the reusable heading style. */}
      <AppHeading style={styles.title}>{title}</AppHeading>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  // Main button container.
  // The rounded corners, border, and background colour match the app's soft card style.
  card: {
    width: "100%",
    height: 44,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.14)",
  },

  // Style applied while the button is being pressed.
  // The scale makes the button feel interactive when tapped.
  cardPressed: {
    transform: [{ scale: 0.95 }],
    borderColor: "rgba(255, 255, 255, 0.5)",
  },

  // Styles the button label text and keeps it centred.
  title: {
    fontSize: 18,
    textAlign: "center",
  },
});