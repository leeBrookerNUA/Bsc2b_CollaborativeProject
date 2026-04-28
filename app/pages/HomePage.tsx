import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/base/Header";
import ScreenBackground from "../../components/base/ScreenBackground";
import MainButton from "../../components/buttons/MainButton";

export default function HomePage() {
  const router = useRouter();

  return (
    <ScreenBackground>
      <View style={styles.page}>
        <Header
          title="Home"
          onBackPress={() => { }}
          onSettingsPress={() => { }}
        />

        <View style={styles.spacer16} />

        <View style={styles.container}>
          <MainButton
            title="Play"
            gradientColors={["#8FC4FF", "#5FA8FF", "#3A86FF"]}
            iconLibrary="Ionicons"
            iconName="play"
            onMainButtonPress={() => {
              router.navigate("/pages/PlayPage");
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
            title="Instructions"
            gradientColors={["#D2A8FF", "#B07BFF", "#9B5DE5"]}
            iconLibrary="Ionicons"
            iconName="book"
            onMainButtonPress={() => {
              router.navigate("/pages/InstructionsPage");
            }}
          />

          <View style={styles.spacer16} />

          <MainButton
            title="Settings"
            gradientColors={["#8EF0B3", "#5EDC95", "#2ECC71"]}
            iconLibrary="FontAwesome"
            iconName="cog"
            onMainButtonPress={() => {
              router.navigate("/pages/SettingsHubPage");
            }}
          />
        </View>
      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    width: "100%",
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