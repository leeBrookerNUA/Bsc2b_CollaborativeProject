import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

interface BadgeCardProps {
    title: string;
    icon: string;
}

export default function BadgeCard(props: BadgeCardProps) {
    const { title, icon } = props;

    return (
        < View style={styles.card}>
            <AppText style={styles.title}>{title}</AppText>

            <View style={styles.iconContainer}>
                <AppText style={styles.icon}>{icon}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: 16,
        paddingVertical: 14,
        paddingHorizontal: 16,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 6,
    },

    title: {
        fontSize: 16,
    },

    iconContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: 10,
        width: 36,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        fontSize: 24,
    },
});