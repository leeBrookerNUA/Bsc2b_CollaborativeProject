import ActionButton from "@/components/buttons/ActionButton";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/base/Header";
import ScreenBackground from "../../components/base/ScreenBackground";
import HelpTipCard from "../../components/cards/HelpTipCard";
import InfoCard from "../../components/cards/InfoCard";
import InstructionCard from "../../components/cards/InstructionCard";

// This screen explains how the user should use the toy. It presents the instructions as simple step cards so they are easy to follow.
export default function InstructionsPage() {

  // Gives access to Expo Router so the user can move between pages.
  const router = useRouter();

  return (
    <ScreenBackground>

      {/* Main page layout. The menu content is kept near the top, while the Back Home button stays near the bottom of the screen. */}
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

          {/* Container adds padding around the instruction cards so the content does not touch the screen edges. */}
          <View style={styles.container}>

            <View style={styles.spacer16} />

            <InfoCard
              title="How to use the toy!"
              subtitle="Follow these steps to start charging Wattson!"
              gradientColors={["#D2A8FF", "#B97CFF", "#9B5DE5"]}
            />

            <View style={styles.spacer16} />

            <InstructionCard
              iconLibrary="FontAwesome"
              iconName="question-circle"
              title="Learn & Explore!"
              subTitle="• Explore the facts and tips to learn, and then test your knowledge with the quiz"
            />
            <View style={styles.spacer16} />

            <InstructionCard
              iconLibrary="MaterialIcons"
              iconName="bolt"
              title="Activate Wattson"
              subTitle="• Wake up Wattson by turning the hand crank"
            />

            <View style={styles.spacer16} />

            <InstructionCard
              iconLibrary="Ionicons"
              iconName="wifi"
              title="Connect Wattson"
              subTitle={
                "• Ask an adult if you need help!\n" +
                "• Go to the settings by clicking the cog in the top right corner\n." +
                "• Choose either Wi-Fi or Bluetooth\n" +
                "• Click the matching button on Wattson\n" +
                "• Wait for it to connect"}
            />

            <View style={styles.spacer16} />

            <InstructionCard
              iconLibrary="Feather"
              iconName="refresh-cw"
              title="Generate Power"
              subTitle={
                "• Turn the hand crank to charge the battery\n" +
                "OR\n" +
                "• Place Wattson in bright sunlight to charge the battery\n"}
            />

            <View style={styles.spacer16} />

            <InstructionCard
              iconLibrary="MaterialIcons"
              iconName="bolt"
              title="Watch Wattson charge"
              subTitle="• Go to the start page to see the battery charging in real time, and how long is left until Wattson is fully charged"
            />

            <View style={styles.spacer16} />

            <HelpTipCard
              iconName="question"
              title="Ask an adult if you need help connecting the toy"
            />

          </View>
        </View>

        {/* Button used to return directly to the Home page. */}
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

  // Main page container.
  // flexGrow helps the screen fill the available height, while space-between separates the instructions from the bottom button.
  page: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "space-between",
  },

  // Controls the spacing around the instruction content.
  // The padding keeps the cards away from the screen edges.
  container: {
    width: "100%",
    marginTop: 8,
    padding: 16,
  },

  spacer16: {
    height: 16,
  },
});