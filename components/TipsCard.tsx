import { AntDesign, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

interface TipsCardProps {
    iconLibrary?: "AntDesign" | "MaterialIcons" | "MaterialCommunityIcons";
    iconName:
    | React.ComponentProps<typeof AntDesign>["name"]
    | React.ComponentProps<typeof MaterialIcons>["name"]
    | React.ComponentProps<typeof MaterialCommunityIcons>["name"];
    title: string;
};

export default function TipsCard(props: TipsCardProps) {
    const { iconLibrary = "AntDesign", iconName, title } = props;

    const Icon =
  iconLibrary === "MaterialIcons"
    ? MaterialIcons
    : iconLibrary === "MaterialCommunityIcons"
      ? MaterialCommunityIcons
      : AntDesign;

    return (
        <View style={styles.card}>
            <View style={styles.contentRow}>

                <View style={styles.iconContainer}>
                    <Icon
                        name={iconName as any}
                        size={20}
                        color="#FFFFFF"
                        style={styles.icon}
                    />
                </View>

                <AppText style={styles.title}>{title}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        minHeight: 42,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: 14,
        borderWidth: 1.5,
        borderColor: "rgba(255, 255, 255, 0.12)",
        paddingVertical: 8,
        paddingHorizontal: 14,
        overflow: "hidden",
    },

    contentRow: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },

    iconContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.18)",
        borderRadius: 99,
        width: 28,
        height: 28,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        flexShrink: 0,
    },

    icon: {
        width: 24,
        height: 24,
        lineHeight: 24,
        textAlign: "center",
        textAlignVertical: "center",
    },

    title: {
        fontSize: 16,
        lineHeight: 20,
        flex: 1,
        flexShrink: 1,
        textAlign: "left",
    },
});