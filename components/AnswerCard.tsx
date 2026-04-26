import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

interface AnswerCardProps {
    title: string;
};

export default function AnswerCard(props: AnswerCardProps) {
    const { title } = props;

    return (
        <View style={styles.card}>
            <View style={styles.contentRow}>

                <AppText style={styles.title}>{title}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        minHeight: 60,
        backgroundColor: "(rgba(46, 204, 113, 0.75)",
        borderRadius: 16,
        borderWidth: 3,
        borderColor: "rgba(255, 255, 255, 0.1)",
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
        fontSize: 16,
        flexShrink: 1,
        lineHeight: 18,
    },
});