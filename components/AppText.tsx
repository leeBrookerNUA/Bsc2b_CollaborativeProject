import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

type AppTextProps = React.PropsWithChildren<TextProps>;

export default function AppText({ children, style, ...rest }: AppTextProps) {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Quicksand_500Medium",
    color: "#FFFFFF",
    letterSpacing: 0.2,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
});