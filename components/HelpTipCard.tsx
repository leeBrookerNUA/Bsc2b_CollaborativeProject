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
                    <FontAwesome5 name={iconName} size={24} color="#FFFFFF" />
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
        borderRadius: 99,
        width: 36,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 12,
    },
});