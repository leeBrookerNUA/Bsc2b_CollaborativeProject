import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";

type HeaderIconName = React.ComponentProps<typeof FontAwesome5>["name"];

interface HeaderProps {
    title: string;
    leftIconName?: HeaderIconName;
    rightIconName?: HeaderIconName;
    onBackPress?: () => void;
    onSettingsPress?: () => void;
}

export default function Header({
    title,
    leftIconName,
    rightIconName,
    onBackPress,
    onSettingsPress,
}: HeaderProps) {
    const renderIconButton = (
        iconName?: HeaderIconName,
        onPress?: () => void
    ) => (
        <View style={styles.iconSlot}>
            {iconName && (
                <Pressable
                    onPress={onPress}
                    disabled={!onPress}
                    hitSlop={8}
                    style={({ pressed }) => [
                        styles.iconButton,
                        pressed && onPress && styles.iconButtonPressed,
                    ]}
                >
                    <FontAwesome5 name={iconName} size={28} color="#FFFFFF" />
                </Pressable>
            )}
        </View>
    );

    return (
        <View style={styles.header}>
            {renderIconButton(leftIconName, onBackPress)}

            <AppHeading style={styles.title} numberOfLines={1}>
                {title}
            </AppHeading>

            {renderIconButton(rightIconName, onSettingsPress)}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        paddingHorizontal: 4,
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center",
    },

    iconSlot: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },

    iconButton: {
        width: 38,
        height: 38,
        borderRadius: 19,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.12)",

        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.14)",
    },

    iconButtonPressed: {
        opacity: 0.9,
        transform: [{ scale: 0.95 }],
        backgroundColor: "rgba(58, 134, 255, 0.75)",
        borderColor: "rgba(255, 255, 255, 0.5)",
    },

    title: {
        flex: 1,
        fontSize: 32,
        textAlign: "center",
    },
});