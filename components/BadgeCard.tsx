import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

interface BadgeCardProps {
    title: string;
    iconName: React.ComponentProps<typeof FontAwesome>["name"];
}

export default function BadgeCard(props: BadgeCardProps) {
    const { title, iconName } = props;

    return (
        <View style={styles.card}>
            <View style={styles.contentRow}>

                <AppText style={styles.title}>{title}</AppText>

                <View style={styles.iconContainer}>
                    <FontAwesome name={iconName} size={24} color="#FFFFFF" />
                </View>
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
        justifyContent: "center",

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 6,
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
        borderRadius: 10,
        width: 36,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 12,
    },
});