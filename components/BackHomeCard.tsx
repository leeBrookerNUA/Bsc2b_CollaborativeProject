import React from "react";
import { Pressable, StyleSheet } from "react-native";
import AppHeading from "./AppHeading";

interface BackHomeCardProps {
    button: string;
    onBackPress?: () => void;

}

export default function BackHomeCard(props: BackHomeCardProps) {
    const {button, onBackPress } = props;

    return (
        <Pressable style={styles.backButton} onPress={onBackPress}> 

            <AppHeading style={styles.button}>{button}</AppHeading>

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

    title: {
        fontSize: 18,
    },
});