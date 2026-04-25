import React from "react";
import { StyleSheet, View } from "react-native";
import ButtonCard from "../../components/ButtonCard";
import Header from "../../components/Header";
import ScreenBackground from "../../components/ScreenBackground";

export default function HomePage() {
  return (
    <ScreenBackground>
      <View style={styles.page}>
        <Header
          title="Home"
          onBackPress={() => { }}
          onSettingsPress={() => { }}
        />

        <View style={styles.spacer20} />

        <View style={styles.container}>
          <ButtonCard
            title="Play"
            gradientColors={["#8FC4FF", "#5FA8FF", "#3A86FF"]}
            iconLibrary="Ionicons"
            iconName="play"
            onMainButtonPress={() => {
              console.log("Play");
            }}
          />

          <View style={styles.spacer16} />

          <ButtonCard
            title="Facts & Tips"
            gradientColors={["#FFF2A6", "#FFE066", "#E0C120"]}
            iconLibrary="MaterialIcons"
            iconName="lightbulb"
            onMainButtonPress={() => {
              console.log("Instructions");
            }}
          />

          <View style={styles.spacer16} />

          <ButtonCard
            title="Instructions"
            gradientColors={["#D2A8FF", "#B07BFF", "#9B5DE5"]}
            iconLibrary="Ionicons"
            iconName="book"
            onMainButtonPress={() => {
              console.log("Facts and Tips");
            }}
          />

          <View style={styles.spacer16} />

          <ButtonCard
            title="Settings"
            gradientColors={["#8EF0B3", "#5EDC95", "#2ECC71"]}
            iconLibrary="FontAwesome"
            iconName="cog"
            onMainButtonPress={() => {
              console.log("Settings");
            }}
          />
        </View>
      </View>
    </ScreenBackground>
  );
}


const styles = StyleSheet.create({
  page: {
    flex: 1,
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
  spacer20: {
    height: 20,
  },
});
