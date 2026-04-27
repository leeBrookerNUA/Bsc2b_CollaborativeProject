import { useRouter } from 'expo-router';
import React from "react";
import { StyleSheet, View } from "react-native";
import BackHomeCard from "../../components/BackHomeCard";
import Header from "../../components/Header";
import ScreenBackground from "../../components/ScreenBackground";


export default function FactsTipsPageScreen() {
    const router = useRouter();

    return (
        <ScreenBackground>
            <View style={styles.page}>
                <View>

                    <Header
                        title="Accessibility"
                        leftIconName="arrow-circle-left"
                        rightIconName="cog"
                        onBackPress={() => {
                            router.navigate('/pages/SettingsHubPage')
                        }}
                        onSettingsPress={() => {
                            router.navigate('/pages/SettingsHubPage')
                        }}
                    />

                    <View style={styles.spacer16} />
                    <View style={styles.container} >
                        
                    </View>

                    <BackHomeCard
                        title="Back Home"
                        onBackHomePress={() => {
                            router.navigate('/pages/HomePage')
                        }}
                    />
                </View >

            </View>

        </ScreenBackground >
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