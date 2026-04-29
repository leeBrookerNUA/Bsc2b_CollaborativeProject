import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

// AppTextProps allows this component to accept normal React Native Text props,
// while also allowing text or elements to be placed inside the component.
type AppTextProps = React.PropsWithChildren<TextProps>;

// AppText is a reusable text component for standard body text.
// It keeps text styling consistent across the app by applying the same font,
// colour, letter spacing, and text shadow wherever it is used.
export default function AppText({ children, style, ...rest }: AppTextProps) {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {/* Displays the text or elements placed between the AppText tags. */}
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  // Default body text style.
  // Any extra styles passed through the style prop are combined with this style.
  text: {
    fontFamily: "Quicksand_500Medium",
    color: "#FFFFFF",
    letterSpacing: 0.2,

    // Adds a soft shadow so text is easier to read on the background.
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
});