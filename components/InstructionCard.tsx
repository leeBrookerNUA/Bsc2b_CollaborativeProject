import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

interface InstructionCardProps {
    iconLibrary?: "Feather" | "MaterialIcons" | "Ionicons" | "FontAwesome5";
    iconName:
    | React.ComponentProps<typeof Feather>["name"]
    | React.ComponentProps<typeof MaterialIcons>["name"]
    | React.ComponentProps<typeof Ionicons>["name"];
    title: string;
};

export default function InstructionCard(props: InstructionCardProps) {
    const { iconLibrary = "FontAwesome", iconName, title } = props;


    const Icon =
        iconLibrary === "MaterialIcons"
            ? MaterialIcons
            : iconLibrary === "Ionicons"
                ? Ionicons

                : Feather;

    return (
        <View style={styles.card}>
            <View style={styles.contentRow}>

                <View style={styles.iconContainer}>
                    <Icon name={iconName as any} size={24} color="#FFFFFF" />
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