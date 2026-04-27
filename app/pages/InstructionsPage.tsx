import { useRouter } from 'expo-router';
import React from "react";
import { StyleSheet, View } from "react-native";
import BackHomeCard from "../../components/BackHomeCard";
import Header from "../../components/Header";
import HelpTipCard from "../../components/HelpTipCard";
import InfoCard from "../../components/InfoCard";
import InstructionCard from "../../components/InstructionCard";
import ScreenBackground from "../../components/ScreenBackground";


export default function InstructionsPage() {

  const router = useRouter();

  return (


    <ScreenBackground>
      <View style={styles.page}>
        <View>

          <Header
            title="Instructions"
            leftIconName="arrow-circle-left"
            rightIconName="cog"
            onBackPress={() => {
              router.navigate('/pages/HomePage')
            }}
            onSettingsPress={() => {
              router.navigate('/pages/SettingsHubPage')
            }}
          />
          <View style={styles.container} >
            <View style={styles.spacer12} />

            <InfoCard
              title="How to use the toy!"
              subtitle="Follow these steps to start charging your toy battery!"
            />

            <View style={styles.spacer12} />

            <InstructionCard
              iconName="bolt"
              title="Turn on the toy"
            />
            <View style={styles.spacer12} />

            <InstructionCard
              iconName="wifi"
              title="Connect the toy to Wi-Fi"
            />

            <View style={styles.spacer12} />

            <InstructionCard
              iconName="refresh"
              title="Turn the hand crank or place it in sunlight"
            />

            <View style={styles.spacer12} />

            <InstructionCard
              iconName="bolt"
              title="Watch the battery charge in the app"
            />

            <View style={styles.spacer20} />

            <HelpTipCard
              iconName="question-circle"
              title="Ask an adult if you need help connecting the toy"
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
  spacer12: {
    height: 12,
  },
  spacer20: {
    height: 20,
  },
});