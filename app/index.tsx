import BackHomeCard from "@/components/BackHomeCard";
import Header from "@/components/Header";
import HelpTipCard from "@/components/HelpTipCard";
import InfoCard from "@/components/InfoCard";
import InstructionCard from "@/components/InstructionCard";
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

            <InfoCard
                title="How to use the toy!"
                subtitle="Folllow these steps to start charging your toy battery!"
            />

            <View style={styles.spacer16} />

            <InstructionCard 
                iconName="bolt"
                title="Turn on the toy"
            />
            <View style={styles.spacer16} />

            <InstructionCard 
                iconName="wifi"
                title="Connect the toy to Wi-Fi"
            />

            <View style={styles.spacer16} />

            <InstructionCard 
                iconName="refresh"
                title="Turn the hand crank or place the toy in sunlight"
            />

            <View style={styles.spacer16} />

            <InstructionCard 
                iconName="bolt"
                title="Watch the battery charge in the app"
            />

            <View style={styles.spacer16} />

            <HelpTipCard
                iconName="question-circle"
                title="Ask an adult if you need help connecting the toy!"
            />

            <View style={styles.spacer32} />

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
    spacer32: {
        height: 32,
    },
});