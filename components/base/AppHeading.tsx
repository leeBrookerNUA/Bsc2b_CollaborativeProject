import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

// AppHeadingProps allows this component to accept normal React Native Text props,
// while also allowing it to display children inside the component.
type AppHeadingProps = React.PropsWithChildren<TextProps>;

// AppHeading is a reusable text component for headings.
// It keeps heading styles consistent across the app by using the same font,
// colour, letter spacing, and text shadow wherever it is used.
export default function AppHeading({
  children,
  style,
  ...rest
}: AppHeadingProps) {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {/* Displays the text or elements placed between the AppHeading tags. */}
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  // Default heading text style.
  // Extra styles passed through the style prop are combined with this style.
  text: {
    fontFamily: "Fredoka_600SemiBold",
    color: "#FFFFFF",
    letterSpacing: 0.2,

    // Adds a soft shadow so headings stand out against the background.
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 6,
  },
});