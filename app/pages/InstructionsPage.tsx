import ActionButton from "@/components/buttons/ActionButton";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/base/Header";
import ScreenBackground from "../../components/base/ScreenBackground";
import HelpTipCard from "../../components/cards/HelpTipCard";
import InfoCard from "../../components/cards/InfoCard";
import InstructionCard from "../../components/cards/InstructionCard";

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
              router.navigate("/pages/HomePage");
            }}
            onSettingsPress={() => {
              router.navigate("/pages/SettingsHubPage");
            }}
          />

          <View style={styles.container}>
            <View style={styles.spacer16} />

            <InfoCard
              title="How to use the toy!"
              subtitle="Follow these steps to start charging your toy battery!"
              gradientColors={["#D2A8FF", "#B97CFF", "#9B5DE5"]}
            />

            <View style={styles.spacer16} />

            <InstructionCard
              iconLibrary="MaterialIcons"
              iconName="bolt"
              title="Turn on the toy"
            />

            <View style={styles.spacer16} />

            <InstructionCard
              iconLibrary="Ionicons"
              iconName="wifi"
              title="Connect the toy to Wi-Fi"
            />

            <View style={styles.spacer16} />

            <InstructionCard
              iconLibrary="Feather"
              iconName="refresh-cw"
              title="Turn the hand crank or place it in sunlight"
            />

            <View style={styles.spacer16} />

            <InstructionCard
              iconLibrary="MaterialIcons"
              iconName="bolt"
              title="Watch the battery charge in the app"
            />

            <View style={styles.spacer16} />

            <HelpTipCard
              iconName="question"
              title="Ask an adult if you need help connecting the toy"
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