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
        fontFamily: "quicksand_600SemiBold",
        color: "#FFFFFF",
        textShadowColor: "rgba(0, 0, 0, 0.25)",
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
    },
});