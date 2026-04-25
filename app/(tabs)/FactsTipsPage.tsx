import React from "react";
import { StyleSheet, View } from "react-native";
import BackHomeCard from "../../components/BackHomeCard";
import ButtonCard from "../../components/ButtonCard";
import Header from "../../components/Header";
import NoIconBadgeCard from "../../components/NoIconBadgeCard";
import ScreenBackground from "../../components/ScreenBackground";


export default function FactsTipsPageScreen() {
  return (
    <ScreenBackground>
      <View style={styles.page}>
        <View>

          <Header
            title="Facts & Tips"
            leftIconName="arrow-circle-left"
            rightIconName="cog"
            onBackPress={() => console.log("Back Pressed")}
            onSettingsPress={() => console.log("Settings Pressed")}
          />

          <View style={styles.spacer16} />

          <NoIconBadgeCard 
            title="Choose what you want to explore!"
          />

          <View style={styles.spacer16} />

          <ButtonCard
            iconName="lightbulb"
            title="Fun Facts"
            gradientColors={["#FFE98A", "#FFD84D", "#E0C120"]}
            onMainButtonPress={() => console.log("Facts Button Pressed")}
          />
          <View style={styles.spacer16} />

          <ButtonCard
            iconName="leaf"
            title="Energy Saving Tips"
            gradientColors={["#8ef0b3", "#5EDE92", "#2ecc71"]}
            onMainButtonPress={() => console.log("Tips Button Pressed")}
          />

          <View style={styles.spacer16} />

          <ButtonCard
            iconName="question"
            title="Quiz"
            gradientColors={["#D2A8FF", "#B782F2", "#9B5DE5"]}
            onMainButtonPress={() => console.log("Quiz Button Pressed")}
          />

          <View style={styles.spacer16} />
        </View>

        <BackHomeCard
          title="Back Home"
          onBackHomePress={() => console.log("Back Home Pressed")}
        />
      </View >



    </ScreenBackground >
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "space-between",
  },
  spacer16: {
    height: 16,
  },
});