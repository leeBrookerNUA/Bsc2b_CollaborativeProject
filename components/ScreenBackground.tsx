import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenBackgroundProps {
    children: React.ReactNode;
}

export default function ScreenBackground(props: ScreenBackgroundProps) {
    const { children } = props;

    return (
        <SafeAreaView style={styles.safeArea}>

            <LinearGradient colors={["rgba(58, 134, 255, 0.75)", "rgba(111, 177, 255, 0.75)"]} style={styles.container}>

                <ImageBackground
                    source={require("../assets/stars-bg.png")}
                    style={styles.starsBackground}
                    imageStyle={styles.starsImage}
                >
                    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                        {children}
                    </ScrollView>

                </ImageBackground>

            </LinearGradient>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    starsBackground: {
        flex: 1,
    },
    starsImage: {
        resizeMode: "cover",
        opacity: 0.7,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 16,
        paddingTop: 18,
        paddingBottom: 28,
    },
});