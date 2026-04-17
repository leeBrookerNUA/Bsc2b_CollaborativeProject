import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";


interface StatCardProps {
    iconName: React.ComponentProps<typeof FontAwesome>["name"];
    value: string,
    title: string,
    iconColor: string,
    iconBgColor: string,
}

export default function StatCard(props: StatCardProps) {
    const { iconName, value, title, iconColor, iconBgColor = "rgba(255,255,255,0.4)" } = props;

    return (
        <View style={styles.card}>

            <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
                <FontAwesome name={iconName} size={24} color={iconColor} />
            </View>

            <AppText style={styles.value}>{value}</AppText>
            <AppText style={styles.title}>{title}</AppText>
        </View>

    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderColor: "rgba(58, 134, 255, 0.25)",
        borderWidth: 2,
        borderRadius: 20,
        paddingVertical: 16,
        paddingHorizontal: 12,
        alignItems: "center",
        justifyContent: "center",

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 6,
    },

    iconContainer: {
        borderRadius: 99,
        width: 36,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },

    value: {
        fontSize: 16,
        color: "#1F2A44",
        marginBottom: 4,
    },

    title: {
        fontSize: 16,
        color: "#5B6780",
        textAlign: "center",
    },
});
