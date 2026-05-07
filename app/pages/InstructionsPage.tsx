import ActionButton from "@/components/buttons/ActionButton";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Header from "../../components/base/Header";
import ScreenBackground from "../../components/base/ScreenBackground";
import HelpTipCard from "../../components/cards/HelpTipCard";
import InfoCard from "../../components/cards/InfoCard";
import InstructionCard from "../../components/cards/InstructionCard";

// Stores the instruction card content in one place.
// This keeps the screen code cleaner and makes the order easier to change later.
const instructionSteps = [
  {
    iconLibrary: "FontAwesome",
    iconName: "question-circle",
    title: "Learn & Explore",
    items: ["Read the facts and tips, then test your knowledge with the quiz."],
  },
  {
    iconLibrary: "MaterialIcons",
    iconName: "bolt",
    title: "Activate Wattson",
    items: ["Wake up Wattson by turning the hand crank."],
  },
  {
    iconLibrary: "Ionicons",
    iconName: "wifi",
    title: "Connect Wattson",
    items: [
      "Ask an adult if you need help.",
      "Open settings using the cog in the top right corner.",
      "Choose Wi-Fi or Bluetooth.",
      "Press the matching button on Wattson and wait for it to connect.",
    ],
  },
  {
    iconLibrary: "Feather",
    iconName: "refresh-cw",
    title: "Generate Power",
    items: [
      "Turn the hand crank, or place Wattson in bright sunlight to charge the battery.",
    ],
  },
  {
    iconLibrary: "MaterialIcons",
    iconName: "bolt",
    title: "Watch Wattson Charge",
    items: [
      "Go to the Play page to see the battery charging in real time.",
      "Check how long is left until Wattson is fully charged.",
    ],
  },
] as const;

// This screen explains how the user should use the toy.
// It presents the instructions as simple step cards so they are easy to follow.
export default function InstructionsPage() {
  // Gives access to Expo Router so the user can move between pages.
  const router = useRouter();

  return (
    <ScreenBackground>
      <View style={styles.page}>
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

        {/* ScrollView prevents the instruction cards from being cut off on smaller screens. */}
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <InfoCard
            title="How to use the toy!"
            subtitle="Follow these simple steps to start charging Wattson."
            gradientColors={["#8EF0B3", "#5EDC95", "#2ECC71"]}
          />

          <View style={styles.cardStack}>
            {instructionSteps.map((step, index) => (
              <InstructionCard
                key={step.title}
                stepNumber={index + 1}
                iconLibrary={step.iconLibrary}
                iconName={step.iconName}
                title={step.title}
                items={step.items}
              />
            ))}
          </View>

          <HelpTipCard
            iconName="question"
            title="Ask an adult if you need help connecting the toy."
          />
        </ScrollView>

        {/* Button used to return directly to the Home page. */}
        <View style={styles.buttonWrapper}>
          <ActionButton
            title="Back Home"
            backgroundColor="rgba(255, 255, 255, 0.22)"
            pressedBackgroundColor="rgba(255, 255, 255, 0.35)"
            onBackHomePress={() => {
              router.navigate("/pages/HomePage");
            }}
          />
        </View>
      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  // Main page container.
  page: {
    flex: 1,
    width: "100%",
  },

  scroll: {
    flex: 1,
  },

  // Controls the spacing around the instruction content.
  // Extra bottom padding stops the final card sitting too close to the button.
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 18,
  },

  // Keeps all instruction cards evenly spaced.
  cardStack: {
    marginTop: 16,
    marginBottom: 16,
    gap: 12,
  },

  buttonWrapper: {
    paddingHorizontal: 16,
    paddingBottom: 14,
  },
});