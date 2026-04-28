import { useRouter } from 'expo-router';
import React from "react";
import { StyleSheet, View } from "react-native";
import ActionButton from "../../components/ActionButton";
import ButtonCard from "../../components/ButtonCard";
import Header from "../../components/Header";
import NoIconBadgeCard from "../../components/NoIconBadgeCard";
import ScreenBackground from "../../components/ScreenBackground";


export default function FactsTipsPageScreen() {
  const router = useRouter();

 return (
  <ScreenBackground>
    <View style={styles.page}>

      <View>
        <Header
          title="Facts & Tips"
          leftIconName="arrow-circle-left"
          rightIconName="cog"
          onBackPress={() => { router.navigate('/pages/HomePage') }}
          onSettingsPress={() => { router.navigate('/pages/SettingsHubPage') }}
        />

        <View style={styles.spacer16} />

        <View style={styles.container}>
          <NoIconBadgeCard title="Choose what you want to explore!" />

          <View style={styles.spacer16} />

          <ButtonCard
            iconLibrary="MaterialIcons"
            iconName="lightbulb"
            title="Fun Facts"
            gradientColors={["#FFE98A", "#FFD84D", "#E0C120"]}
            onMainButtonPress={() => {
              router.navigate('/pages/FunFactsPage')
            }}
          />

          <View style={styles.spacer16} />

          <ButtonCard
            iconLibrary="MaterialIcons"
            iconName="energy-savings-leaf"
            title="Energy Saving Tips"
            gradientColors={["#8ef0b3", "#5EDE92", "#2ecc71"]}
            onMainButtonPress={() => {
              router.navigate('/pages/EnergySavingPage')
            }}
          />

          <View style={styles.spacer16} />

          <ButtonCard
            iconLibrary="FontAwesome"
            iconName="question-circle"
            title="Quiz"
            gradientColors={["#D2A8FF", "#B782F2", "#9B5DE5"]}
            onMainButtonPress={() => {
              router.navigate('/pages/QuizSelectPage')
            }}
          />
        </View>
      </View>

      <ActionButton
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