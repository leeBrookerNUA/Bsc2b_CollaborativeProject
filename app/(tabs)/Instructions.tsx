import BackHomeCard from "@/components/BackHomeCard";
import Header from "@/components/Header";
import ScreenBackground from "@/components/ScreenBackground";
import React from "react";
import { StyleSheet, View } from "react-native";


export default function InstructionsScreen() {
    return (
        <ScreenBackground>

            <Header
                title="Instructions"
                leftIconName="arrow-circle-left"
                rightIconName="cog"
                onBackPress={() => console.log("Back Pressed")}
                onSettingsPress={() => console.log("Settings Pressed")}
            />

            <View style={styles.spacer16} />



            <View style={styles.spacer16} />


            <View style={styles.spacer16} />




            <View style={styles.spacer16} />



            <View style={styles.spacer16} />

            <BackHomeCard
                title="Back Home"
            />

        </ScreenBackground>
    );
}

const styles = StyleSheet.create({
    spacer16: {
        height: 16,
    },
});