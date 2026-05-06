import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import TextBadge from "../../components/badges/TextBadge";
import Header from "../../components/base/Header";
import ScreenBackground from "../../components/base/ScreenBackground";
import ActionButton from "../../components/buttons/ActionButton";
import MainButton from "../../components/buttons/MainButton";

// This screen acts as the main menu for the facts, tips, and quiz section.
// It lets the user choose whether they want to view fun facts,
// read energy saving tips, or start the quiz.
export default function FactsTipsPageScreen() {
  // Gives access to Expo Router so the user can move between pages.
  const router = useRouter();

  return (
    <ScreenBackground>

      {/* Main page layout. The menu content is kept near the top, while the Back Home button stays near the bottom of the screen. */}
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

          {/* Container adds padding around the content so the buttons and badge do not touch the screen edges. */}
          <View style={styles.container}>

            {/* Adds space between the header and the instruction badge. */}
            <View style={styles.spacer16} />

            {/* Short instruction badge telling the user what to do on this page. */}
            <TextBadge title="Choose what you want to explore!" />

            
            <View style={styles.spacer16} />

            {/* Button that takes the user to the Fun Facts page */}
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

            {/*  Button that takes the user to the Energy Saving Tips page. */}
            <MainButton
              iconLibrary="MaterialIcons"
              iconName="energy-savings-leaf"
              title="Energy Saving Tips"
              gradientColors={["#8EF0B3", "#5EDE92", "#2ECC71"]}
              onMainButtonPress={() => {
                router.navigate("/pages/EnergySavingPage");
              }}
              
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
  // flexGrow helps the screen fill the available height, while space-between separates the menu content from the bottom button.
  page: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "space-between",
  },

  // Controls the spacing around the menu content.
  // The padding keeps the badge and buttons away from the screen edges.
  container: {
    width: "100%",
    marginTop: 8,
    padding: 16,
  },

  spacer16: {
    height: 16,
  },
});