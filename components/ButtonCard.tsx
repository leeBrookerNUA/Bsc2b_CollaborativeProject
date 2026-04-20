import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import React from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import AppHeading from './AppHeading';

interface ButtonCardProps {
    iconName: React.ComponentProps<typeof FontAwesome5>["name"];
    title: string
    gradientColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
}

export default function ButtonCard(props: ButtonCardProps) {
    const { iconName, title, gradientColors = ["#FFF2A6", "#FFE066", "#E0C120"]} = props;

    return (
        <View style={styles.card}>
            <LinearGradient
                style={styles.gradient}
                colors={gradientColors}
            />

            <View style={styles.darkOverlay} />
            <View style={styles.lightOverlay} />

            <View style={styles.content}>
                <View style={[styles.iconContainer]}>
                    <FontAwesome5 name={iconName} size={32} color="#FFFFFF" />
                </View>

                <AppHeading style={styles.title}>{title}</AppHeading>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        borderRadius: 24,
        minHeight: 140,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 24,
    },
    darkOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 24,
    },
    lightOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: 24,
    },
    content: {
        width: "100%",
        minHeight: 140,
        paddingVertical: 12,
        paddingHorizontal: 14,
        alignItems: "center",
        justifyContent: "center",
    },
    iconContainer: {
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: 99,
        width: 52,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 6,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
});