import React from "react";
import { Pressable, StyleSheet } from "react-native";
import AppHeading from "./AppHeading";

interface BackHomeCardProps {
    title: string;
    onBackHomePress?: () => void;

}

export default function BackHomeCard(props: BackHomeCardProps) {
    const { title, onBackHomePress } = props;

    return (

        <Pressable
            onPress={onBackHomePress}
            style={({ pressed }) => [styles.card, pressed && styles.cardPressed,
            ]}>
            <AppHeading style={styles.title}>{title}</AppHeading>
        </Pressable>

    );
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        height: 44,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: "rgba(255, 255, 255, 0.12)",
        paddingVertical: 6,
        paddingHorizontal: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        overflow: 'hidden',

    },
    cardPressed: {
        transform: [{ scale: 0.95 }],
        backgroundColor: "rgba(58, 134, 255, 0.75)",
        borderWidth: 2,
        borderColor: "rgba(255, 255, 255, 0.5)",
    },

    title: {
        fontSize: 18,
    },
});