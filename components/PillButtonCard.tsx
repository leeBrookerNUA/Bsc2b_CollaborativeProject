import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import AppHeading from './AppHeading';

interface PillButtonCardProps {
    title: string;
    selected?: boolean;
    onPillPress?: () => void;
    tintColor?: string;
}

export default function PillButtonCard(props: PillButtonCardProps) {
    const { title, selected = false, onPillPress, tintColor } = props;

    return (
        <Pressable
            onPress={onPillPress}
            style={[
                styles.card,
                selected && styles.cardSelected,
                selected && { backgroundColor: tintColor || "#EBC50A" },
            ]}
        >
            <View style={[styles.topHighlight, selected && styles.topHighlightSelected]} />
            <View style={[selected && styles.innerShadowBandSelected]} />

            <AppHeading style={styles.title}>{title}</AppHeading>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: "#F3CD11",
        borderRadius: 99,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.18)",
        paddingVertical: 6,
        paddingHorizontal: 12,
        minHeight: 36,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },

    cardSelected: {
        backgroundColor: "#EBC50A",
        shadowOpacity: 0.04,
        shadowRadius: 3,
        elevation: 5,
        transform: [{ translateY: 1 }],
    },

    innerShadowBandSelected: {
        position: "absolute",
        left: 3,
        right: 3,
        bottom: 32,
        height: "30%",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 99,
    },

    topHighlight: {
        position: "absolute",
        top: -1,
        left: 3,
        right: 3,
        height: "25%",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: 14,
    },

    topHighlightSelected: {
        backgroundColor: "rgba(255, 255, 255, 0.04)",
    },

    title: {
        fontSize: 20,
        textAlign: "center",
        zIndex: 2,
    },
});