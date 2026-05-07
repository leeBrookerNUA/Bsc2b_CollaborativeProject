import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/base/Header";
import ScreenBackground from "../../components/base/ScreenBackground";
import MainButton from "../../components/buttons/MainButton";
import WelcomeModal from "../../components/popUp/WelcomeModal";

// Stores whether the welcome modal has already been shown.
// This is outside the component so it does not reset every time the Home page reloads.
let hasSeenWelcomeModal = false;

// This is the main home screen of the app.
// It gives the user quick access to the main sections: Play, Facts & Tips, Instructions, and Settings.
export default function HomePage() {

  // Gives access to Expo Router so the user can move between pages.
  const router = useRouter();

  // Shows the welcome modal only if it has not already been shown.
  const [welcomeVisible, setWelcomeVisible] = React.useState(
    !hasSeenWelcomeModal
  );

  // Closes the welcome modal and remembers that it has already been shown.
  function closeWelcomeModal() {
    hasSeenWelcomeModal = true;
    setWelcomeVisible(false);
  }

  return (
    <ScreenBackground>

      {/* Main page layout. This holds the header, welcome modal, and main navigation buttons for the app. */}
      <View style={styles.page}>
        <Header
          title="Home"
          onBackPress={() => {}}
          onSettingsPress={() => {
            router.navigate("/pages/SettingsHubPage");
          }}
        />

        <View style={styles.spacer16} />

        {/* Container adds padding around the menu buttons so they do not touch the edges of the screen. */}
        <View style={styles.container}>
          <MainButton
            title="Instructions"
            gradientColors={["#8EF0B3", "#5EDC95", "#2ECC71"]}
            iconLibrary="Ionicons"
            iconName="book"
            onMainButtonPress={() => {
              router.navigate("/pages/InstructionsPage");
            }}
          />

          <View style={styles.spacer16} />

          <MainButton
            title="Facts & Tips"
            gradientColors={["#FFF2A6", "#FFE066", "#E0C120"]}
            iconLibrary="MaterialIcons"
            iconName="lightbulb"
            onMainButtonPress={() => {
              router.navigate("/pages/FactsTipsPage");
            }}
          />

          <View style={styles.spacer16} />

          <MainButton
            title="Quiz"
            gradientColors={["#D2A8FF", "#B07BFF", "#9B5DE5"]}
            iconLibrary="FontAwesome"
            iconName="question-circle"
            onMainButtonPress={() => {
              router.navigate("/pages/QuizSelectPage");
            }}
          />

          <View style={styles.spacer16} />

          <MainButton
            title="Start"
            gradientColors={["#8FC4FF", "#5FA8FF", "#3A86FF"]}
            iconLibrary="Ionicons"
            iconName="play"
            onMainButtonPress={() => {
              router.navigate("/pages/StartPage");
            }}
          />
        </View>

        {/* Welcome pop-up shown only once while the app is open. */}
        <WelcomeModal visible={welcomeVisible} onClose={closeWelcomeModal} />
      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({

  // Main page container.
  // flexGrow helps the screen content fill the available height.
  page: {
    flexGrow: 1,
    width: "100%",
  },

  // Controls the spacing around the main menu buttons.
  // The padding keeps the buttons away from the screen edges.
  container: {
    width: "100%",
    marginTop: 8,
    padding: 16,
  },

  spacer16: {
    height: 16,
  },
});