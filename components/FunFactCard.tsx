import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppHeading from "./AppHeading";
import AppText from "./AppText";

interface FunFactCardProps {
    title: string;
    subtitle: string;
    button: string;
}

export default function FunFactCard(props: FunFactCardProps) {

    const { title, subtitle, button } = props;

    return (
        <LinearGradient style={styles.card} colors={["#FFF2A6", "#FFE066", "#E0C120"]}>
            <View style={styles.darkOverlay} />
            <View style={styles.lightOverlay} />

            <View style={styles.content}>
                <AppHeading style={styles.title}>{title}</AppHeading>
                <AppText style={styles.subtitle}>{subtitle}</AppText>

                <View style={styles.moreButton}>
                    <AppHeading style={styles.button}>{button}</AppHeading>
                </View>
            </View>
        </LinearGradient >
    )
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        borderRadius: 20,
        paddingVertical: 24,
        paddingHorizontal: 20,
        alignItems: "stretch",
        justifyContent: "center",
        minHeight: 175,

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 6,
    },
    darkOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 20,
    },
    lightOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: 20,
    },
    content: {
        width: "100%",
        justifyContent: "center",
        zIndex: 1,
    },

    title: {
        fontSize: 20,
        textAlign: "left",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 8,
    },
    button: {
        fontSize: 16,
        textAlign: "center",
    },
    moreButton: {
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        marginTop: 8,
    },
});