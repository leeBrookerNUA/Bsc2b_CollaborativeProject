import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppSwitch from "./AppSwitch";
import AppText from "./AppText";

interface ConnectionSettingRowProps {
    iconName: React.ComponentProps<typeof FontAwesome>["name"];
    title: string;
    type: "status" | "switch";
    statusText?: string;
    switchValue?: boolean;
    onSwitchChange?: (value: boolean) => void;
}

export default function ConnectionSettingRow(props: ConnectionSettingRowProps) {
    const {
        iconName,
        title,
        type,
        statusText = "Searching",
        switchValue = false,
        onSwitchChange,
    } = props;

    return (
        <View style={styles.row}>
            <View style={styles.leftSide}>
                <FontAwesome name={iconName} size={22} color="#FFFFFF" />
                <AppText style={styles.title}>{title}</AppText>
            </View>

            {type === "status" && (
                <View style={styles.statusBadge}>
                    <AppText style={styles.statusText}>{statusText}</AppText>
                </View>
            )}

            {type === "switch" && (
                <AppSwitch
                    value={switchValue}
                    onValueChange={onSwitchChange}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        minHeight: 54,
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.16)",
        borderRadius: 16,
        paddingHorizontal: 12,
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    leftSide: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        flexShrink: 1,
    },

    title: {
        fontSize: 16,
    },

    statusBadge: {
        backgroundColor: "#FF9F1C",
        borderRadius: 99,
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    switch: {
        transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }],
        marginRight: 4,
    },

    statusText: {
        fontSize: 11,
    },
});