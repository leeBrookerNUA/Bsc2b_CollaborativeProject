import BackHomeCard from "@/components/BackHomeCard";
import Header from "@/components/Header";
import QuizResultCard from "@/components/QuizResultCard";
import ScreenBackground from "@/components/ScreenBackground";
import { useRouter } from 'expo-router';
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
                            router.navigate('/pages/HomePage')
                        }}
                        onSettingsPress={() => {
                            router.navigate('/pages/SettingsHubPage')
                        }}
                    />

                    <View style={styles.spacer16} />

                    <QuizResultCard
                        iconLibrary="FontAwesome"
                        iconName1="trophy"
                        title="You did it!"
                        subTitle="Great job learning about energy!"
                        subText="You earned 3 stars!"
                        gradientColors={["#8EF0B3", "#5EDE92", "#2ECC71"]}
                        iconName2="star"
                    />
                    <View style={styles.spacer16} />

                    <BackHomeCard
                        title="Try Another Quiz"
                        onBackHomePress={() => {
                            router.navigate('/pages/QuizSelectPage')
                        }}
                    />

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
    pillRow: {
        flexDirection: "row",
        gap: 8,
    },
    cardPage: {
        paddingHorizontal: 8,
    },
    spacer16: {
        height: 16,
    },
});