import Header from "@/components/base/Header";
import ScreenBackground from "@/components/base/ScreenBackground";
import ActionButton from "@/components/buttons/ActionButton";
import QuizResultCard from "@/components/quiz/QuizResultCard";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function QuizPassPage() {
    const router = useRouter();

    return (
        <ScreenBackground>
            <View style={styles.page}>
                <View>
                    <Header
                        title="Quiz Complete"
                        leftIconName="arrow-circle-left"
                        rightIconName="cog"
                        onBackPress={() => {
                            router.navigate("/pages/QuizSelectPage");
                        }}
                        onSettingsPress={() => {
                            router.navigate("/pages/SettingsHubPage");
                        }}
                    />

                    <View style={styles.container}>
                        <View style={styles.spacer16} />

                        <QuizResultCard
                            iconLibrary="FontAwesome"
                            iconName1="trophy"
                            title="You did it!"
                            subTitle="Great job learning about energy!"
                            subText="You earned 3 stars!"
                            gradientColors={["#8EF0B3", "#5EDE92", "#2ECC71"]}
                            iconName2="star"
                            iconCount={3}
                        />

                        <View style={styles.spacer16} />

                        <ActionButton
                            title="Try Another Quiz"
                            backgroundColor="rgba(46, 204, 113, 0.75)"
                            pressedBackgroundColor="rgba(39, 174, 96, 0.85)"
                            onBackHomePress={() => {
                                router.navigate("/pages/QuizSelectPage");
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