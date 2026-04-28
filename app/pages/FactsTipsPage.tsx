import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import TextBadge from "../../components/badges/TextBadge";
import Header from "../../components/base/Header";
import ScreenBackground from "../../components/base/ScreenBackground";
import ActionButton from "../../components/buttons/ActionButton";
import MainButton from "../../components/buttons/MainButton";

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
            onBackPress={() => {
              router.navigate("/pages/HomePage");
            }}
            onSettingsPress={() => {
              router.navigate("/pages/SettingsHubPage");
            }}
          />

          <View style={styles.container}>
            <View style={styles.spacer16} />

            <TextBadge title="Choose what you want to explore!" />

            <View style={styles.spacer16} />

            <MainButton
              iconLibrary="MaterialIcons"
              iconName="lightbulb"
              title="Fun Facts"
              gradientColors={["#FFE98A", "#FFD84D", "#E0C120"]}
              onMainButtonPress={() => {
                router.navigate("/pages/FunFactsPage");
              }}
            />

            <View style={styles.spacer16} />

            <MainButton
              iconLibrary="MaterialIcons"
              iconName="energy-savings-leaf"
              title="Energy Saving Tips"
              gradientColors={["#8EF0B3", "#5EDE92", "#2ECC71"]}
              onMainButtonPress={() => {
                router.navigate("/pages/EnergySavingPage");
              }}
            />

            <View style={styles.spacer16} />

            <MainButton
              iconLibrary="FontAwesome"
              iconName="question-circle"
              title="Quiz"
              gradientColors={["#D2A8FF", "#B782F2", "#9B5DE5"]}
              onMainButtonPress={() => {
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