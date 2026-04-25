import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

interface TipsCardProps {
    iconName: React.ComponentProps<typeof FontAwesome>["name"];
    title: string;
};

export default function TipsCard(props: TipsCardProps) {
    const { iconName, title } = props;

    return (
        <View style={styles.card}>
            <View style={styles.contentRow}>

                <View style={styles.iconContainer}>
                    <FontAwesome5 name={iconName} size={14} color="#FFFFFF" />
                </View>

                <AppText style={styles.title}>{title}</AppText>
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
        paddingHorizontal: 10,
        alignItems: "center",
        flexDirection: "row",
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

    iconContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: 99,
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 6,
    },
});