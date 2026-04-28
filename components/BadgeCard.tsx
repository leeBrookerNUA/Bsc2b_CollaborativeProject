import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

interface BadgeCardProps {
    title: string;
    iconName: React.ComponentProps<typeof Feather>["name"];
}

export default function BadgeCard(props: BadgeCardProps) {
    const { title, iconName } = props;

    return (
        <View style={styles.card}>

            <View style={styles.contentRow}>

                <AppText style={styles.title}>{title}</AppText>

                <View style={styles.iconContainer}>
                    <Feather name={iconName} size={16} color="#FFFFFF" />
                </View>
            </View>
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
    contentRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    title: {
        fontSize: 16,
    },

    iconContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: 99,
        width: 24,
        height: 24,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 6,
    },
});