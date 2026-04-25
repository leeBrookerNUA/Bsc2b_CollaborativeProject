import React from "react";
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from "react-native";

interface AppTextProps extends TextProps {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
}

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
        textShadowColor: "rgba(0, 0, 0, 0.2)",
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 6,
        letterSpacing: 0.2,
    },
});