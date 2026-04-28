import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

type AppHeadingProps = React.PropsWithChildren<TextProps>;

export default function AppHeading({
  children,
  style,
  ...rest
}: AppHeadingProps) {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Fredoka_600SemiBold",
    color: "#FFFFFF",
    letterSpacing: 0.2,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 6,
  },
});