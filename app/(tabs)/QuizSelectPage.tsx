import BackHomeCard from "@/components/BackHomeCard";
import Header from "@/components/Header";
import NoIconBadgeCard from "@/components/NoIconBadgeCard";
import QuizSelectCard from "@/components/QuizSelectCard";
import ScreenBackground from "@/components/ScreenBackground";
import React from "react";
import { StyleSheet, View } from "react-native";


export default function QuizSelectPage() {


  return (
    <ScreenBackground>

      <View style={styles.page}>
        <View>

          <Header
            title="Fun Facts"
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

          <QuizSelectCard
            iconName="star"
            title="Easy"
            subTitle="Simple questions to get started!"
            gradientColors={["#8EF0B3", "#5EDE92", "#2ECC71"]}
            onQuizButtonPress={() => console.log("Easy Pressed")}
          />

          <View style={styles.spacer16} />

          <QuizSelectCard
            iconName="star"
            title="Hard"
            subTitle="Try a bigger challenge!"
            gradientColors={["#FFC27A", "#FFB14B", "#FF9F1C"]}
            onQuizButtonPress={() => console.log("Hard Pressed")}
          />

          <View style={styles.spacer16} />
        </View>

        <BackHomeCard
          title="Back Home"
          onBackHomePress={() => console.log("Back Home Pressed")}
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
  pillRow: {
    flexDirection: "row",
    gap: 8,
  },
  cardPage: {
    paddingHorizontal: 8,
  },
  spacer12: {
    height: 12,
  },
  spacer16: {
    height: 16,
  },
  spacer24: {
    height: 24,
  },
});