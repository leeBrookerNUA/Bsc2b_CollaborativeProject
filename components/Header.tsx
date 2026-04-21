import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";

interface HeaderProps {
    title: string;
    leftIconName?: React.ComponentProps<typeof FontAwesome5>["name"];
    rightIconName?: React.ComponentProps<typeof FontAwesome5>["name"];
    onBackPress: () => void;
    onSettingsPress: () => void;
}

export default function Header(props: HeaderProps) {

    const { title, leftIconName, rightIconName, onBackPress, onSettingsPress } = props;

    return (
        <View style={styles.header}>

            <View style={styles.iconSlot}>
                {leftIconName ? (
                    <Pressable
                    onPress={onBackPress}
                    style={({ pressed }) => [styles.iconButton, pressed && styles.iconButtonPressed,]}>
                        <FontAwesome5 name={leftIconName} size={32} color="#FFFFFF" />
                    </Pressable>
                ) : null}
            </View>

            <AppHeading style={styles.title}>{title}</AppHeading>

            <View style={styles.iconSlot}>
                {rightIconName ? (
                    <Pressable
                        onPress={onSettingsPress}
                        style={({ pressed }) => [styles.iconButton, pressed && styles.iconButtonPressed,]}>
                        <FontAwesome5 name={rightIconName} size={32} color="#FFFFFF" />
                    </Pressable>
                ) : null}
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 4,
        paddingVertical: 8,
    },
    iconSlot: {
        width: 38,
        height: 38,
        alignItems: "center",
        justifyContent: "center",
    },

    iconButton: {
        width: 38,
        height: 38,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.12)",
        borderRadius: 18,
    },
     iconButtonPressed: {
        transform: [{ scale: 0.98 }],
        backgroundColor: "rgba(58, 134, 255, 0.75)",
        borderWidth: 2,
        borderColor: "rgba(255, 255, 255, 0.5)",
    },
    
    title: {
        fontSize: 32,
        textAlign: "center",
    }
});