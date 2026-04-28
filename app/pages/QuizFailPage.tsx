import BackHomeCard from "@/components/BackHomeCard";
import FunFactCard from "@/components/FunFactCard";
import Header from "@/components/Header";
import QuizResultCard from "@/components/QuizResultCard";
import ScreenBackground from "@/components/ScreenBackground";
import { useRouter } from 'expo-router';
import React from "react";
import { StyleSheet, View } from "react-native";


export default function QuizFailPage() {

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
                            router.navigate('/pages/QuizSelectPage')
                        }}
                        onSettingsPress={() => {
                            router.navigate('/pages/SettingsHubPage')
                        }}
                    />

                    <View style={styles.spacer16} />

                    <QuizResultCard
                        iconLibrary="MaterialCommunityIcons"
                        iconName1="thought-bubble"
                        title="Good Try!"
                        subTitle="Lets learn more facts and try again!"
                        subText="You're getting better everytime!"
                        gradientColors={["#FFC27A", "#FFB14B", "#FF9F1C"]}
                    />
                    <View style={styles.spacer16} />

                       <FunFactCard
                            title="Live Fun Fact!"
                            subtitle="It takes around 200 cranks to fully  charge one battery!"
                            button="Learn More"
                            onMorePress={() => { router.navigate('/pages/FunFactsPage')}}
                          />


                    <View style={styles.spacer16} />
                    <BackHomeCard
                        title="Try Again"
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