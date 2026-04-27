import BackHomeCard from '@/components/BackHomeCard';
import { useRouter } from 'expo-router';
import React from "react";
import { StyleSheet, View } from "react-native";
import ButtonCard from "../../components/ButtonCard";
import Header from "../../components/Header";
import ScreenBackground from "../../components/ScreenBackground";

export default function SettingsHubPage() {
    const router = useRouter();

    return (
        <ScreenBackground>
            <View style={styles.page}>
                <View>

                    <Header
                        title="Settings"
                        leftIconName="arrow-circle-left"
                        rightIconName="cog"
                        onBackPress={() => {
                            router.navigate('/pages/HomePage')
                        }}
                        onSettingsPress={() => {
                            router.navigate('/pages/SettingsHubPage')
                        }}
                    />

                    <View style={styles.spacer16} />

                    <View style={styles.container}>
                        <ButtonCard
                            title="Audio Settings"
                            gradientColors={["#8FC4FF", "#5FA8FF", "#3A86FF"]}
                            iconLibrary="Ionicons"
                            iconName="volume-medium"
                            onMainButtonPress={() => {
                                router.navigate('/pages/AudioPage')
                            }}
                        />

                        <View style={styles.spacer16} />

                        <ButtonCard
                            title="Visual & Accessibility"
                            gradientColors={["#D2A8FF", "#B07BFF", "#9B5DE5"]}
                            iconLibrary="MaterialIcons"
                            iconName="settings-accessibility"
                            onMainButtonPress={() => {
                                router.navigate('/pages/AccessibilityPage')

                            }}
                        />

                        <View style={styles.spacer16} />

                        <ButtonCard
                            title="Connection Settings"
                            gradientColors={["#8EF0B3", "#5EDE92", "#2ECC71"]}
                            iconLibrary="MaterialIcons"
                            iconName="wifi"
                            onMainButtonPress={() => {
                                router.navigate('/pages/ConnectionPage')
                            }}
                        />

                    </View>
                </View>
                <BackHomeCard
                    title="Back Home"
                    onBackHomePress={() => {
                        router.navigate('/pages/HomePage')
                    }}
                />

            </View>
        </ScreenBackground>
    );
}


const styles = StyleSheet.create({
    page: {
        flex: 1,

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
