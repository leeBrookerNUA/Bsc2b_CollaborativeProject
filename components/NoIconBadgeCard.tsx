
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

interface BadgeCardProps {
    title: string;

}

export default function NoIconBadgeCard(props: BadgeCardProps) {
    const { title } = props;

    return (
        <View style={styles.card}>
            <AppText style={styles.title}>{title}</AppText>
        </View>

    );
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: 14,
        borderWidth: 1.5,
        borderColor: "rgba(255, 255, 255, 0.12)",
        paddingVertical: 6,
        paddingHorizontal: 12,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        overflow: "hidden",
    },


    title: {
        fontSize: 16,
    },


});