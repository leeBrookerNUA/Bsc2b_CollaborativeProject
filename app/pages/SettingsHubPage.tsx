import ActionButton from "@/components/buttons/ActionButton";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/base/Header";
import ScreenBackground from "../../components/base/ScreenBackground";
import MainButton from "../../components/buttons/MainButton";

export default function SettingsHubPage() {
    const router = useRouter();

    return (
        <ScreenBackground>
            <View style={styles.page}>
                <View>
                    <Header
                        title="Settings"
                        leftIconName="arrow-circle-left"
                        onBackPress={() => {
                            router.navigate("/pages/HomePage");
                        }}
                        onSettingsPress={() => { }}
                    />

                    <View style={styles.container}>
                        <View style={styles.spacer16} />

                        <MainButton
                            title="Audio Settings"
                            gradientColors={["#8FC4FF", "#5FA8FF", "#3A86FF"]}
                            iconLibrary="Ionicons"
                            iconName="volume-medium"
                            onMainButtonPress={() => {
                                router.navigate("/pages/AudioPage");
                            }}
                        />

                        <View style={styles.spacer16} />

                        <MainButton
                            title="Visual & Accessibility"
                            gradientColors={["#D2A8FF", "#B07BFF", "#9B5DE5"]}
                            iconLibrary="MaterialIcons"
                            iconName="settings-accessibility"
                            onMainButtonPress={() => {
                                router.navigate("/pages/AccessibilityPage");
                            }}
                        />

                        <View style={styles.spacer16} />

                        <MainButton
                            title="Connection Settings"
                            gradientColors={["#8EF0B3", "#5EDE92", "#2ECC71"]}
                            iconLibrary="MaterialIcons"
                            iconName="wifi"
                            onMainButtonPress={() => {
                                router.navigate("/pages/ConnectionPage");
                            }}
                        />
                    </View>
                </View>

                <ActionButton
                    title="Back Home"
                    backgroundColor="rgba(255, 255, 255, 0.22)"
                    pressedBackgroundColor="rgba(255, 255, 255, 0.35)"
                    onBackHomePress={() => {
                        router.navigate("/pages/HomePage");
                    }}
                />
            </View>
        </ScreenBackground>
    );
}

const styles = StyleSheet.create({
    page: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "space-between",
    },

    container: {
        width: "100%",
        marginTop: 8,
        padding: 16,
    },

    spacer16: {
        height: 16,
    },
});