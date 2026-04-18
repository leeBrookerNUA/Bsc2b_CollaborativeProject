import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

interface HelpTipCardProps {
    iconName: React.ComponentProps<typeof FontAwesome5>["name"];
    title: string;

}

export default function HelpTipCard(props: HelpTipCardProps) {
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
        paddingVertical: 8,
        paddingHorizontal: 12,
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
        fontSize: 14,
    },

    iconContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: 99,
        width: 24,
        height: 24,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 8,
    },
});