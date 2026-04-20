import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

interface InstructionCardProps {
    iconName: React.ComponentProps<typeof FontAwesome>["name"];
    title: string;
};

export default function InstructionCard(props: InstructionCardProps) {
    const { iconName, title } = props;

    return (
        <View style={styles.card}>
            <View style={styles.contentRow}>

                <View style={styles.iconContainer}>
                    <FontAwesome name={iconName} size={24} color="#FFFFFF" />
                </View>

                <AppText style={styles.title}>{title}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        minHeight: 52,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: 16,
        borderWidth: 1.5,
        borderColor: "rgba(255, 255, 255, 0.12)",
        paddingVertical: 8,
        paddingHorizontal: 12,
        justifyContent: "center",
        overflow: 'hidden',

    },
    contentRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    title: {
        fontSize: 14,
        flexShrink: 1,
        lineHeight: 18,
    },

    iconContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: 99,
        width: 32,
        height: 32,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 6,
    },
});