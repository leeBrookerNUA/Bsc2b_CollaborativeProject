import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";


interface StatCardProps {
    iconLibrary?: "AntDesign" | "MaterialIcons" | "Feather" | "FontAwesome5";
    iconName:
    | React.ComponentProps<typeof AntDesign>["name"]
    | React.ComponentProps<typeof MaterialIcons>["name"]
    | React.ComponentProps<typeof Feather>["name"];
    value: string,
    title: string,
    iconColor: string,
    iconBgColor?: string,
}



export default function StatCard(props: StatCardProps) {
    const { iconLibrary = "AntDesign", iconName, value, title, iconColor, iconBgColor = "rgba(255,255,255,0.55)" } = props;

    const Icon =
        iconLibrary === "MaterialIcons"
            ? MaterialIcons
            : iconLibrary === "Feather"
                ? Feather

                : AntDesign;

    return (
        <View style={styles.card}>

            <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
                <Icon name={iconName as any} size={24} color={iconColor} />
            </View>

            <AppText style={styles.value}>{value}</AppText>
            <AppText style={styles.title}>{title}</AppText>
        </View>

    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: "#EEF4FF",
        borderColor: "rgba(58, 134, 255, 0.5)",
        borderWidth: 4,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 8,
        alignItems: "center",
        justifyContent: "center",
        overflow: 'hidden',
    },

    iconContainer: {
        borderRadius: 99,
        width: 36,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 6,
    },

    value: {
        fontSize: 16,
        color: "#1F2A44",
        marginBottom: 2,
    },

    title: {
        fontSize: 14,
        color: "#5B6780",
        textAlign: "center",
    },
});
