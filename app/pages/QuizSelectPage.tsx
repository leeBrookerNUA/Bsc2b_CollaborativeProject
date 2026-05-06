import TextBadge from "@/components/badges/TextBadge";
import Header from "@/components/base/Header";
import ScreenBackground from "@/components/base/ScreenBackground";
import ActionButton from "@/components/buttons/ActionButton";
import QuizSelectCard from "@/components/quiz/QuizSelectCard";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

// This screen lets the user choose which quiz difficulty they want to play. It gives them an easy option for simple questions and a hard option for a bigger challenge.
export default function QuizSelectPage() {

  // Gives access to Expo Router so the user can move between pages.
  const router = useRouter();

  return (
    <ScreenBackground>

      {/* Main page layout. The menu content is kept near the top, while the Back Home button stays near the bottom of the screen. */}
      <View style={styles.page}>
        <View>
      
          <Header
            title="Quiz"
            leftIconName="arrow-circle-left"
            rightIconName="cog"
            onBackPress={() => {
              router.navigate("/pages/HomePage");
            }}
            onSettingsPress={() => {
              router.navigate("/pages/SettingsHubPage");
            }}
          />

          {/* Container adds padding around the quiz selection content so the badge and cards do not touch the screen edges. */}
          <View style={styles.container}>
    
            <View style={styles.spacer16} />

            <TextBadge title="Choose what you want to explore!" />

            <View style={styles.spacer16} />

            <QuizSelectCard
              iconName="star"
              iconCount={1}
              title="Easy"
              subTitle="Simple questions to get started!"
              gradientColors={["#8EF0B3", "#5EDE92", "#2ECC71"]}
              onQuizButtonPress={() => {
                router.navigate("/pages/EasyQuizPage");
              }}
            />

            <View style={styles.spacer16} />

            <QuizSelectCard
              iconName="star"
              iconCount={3}
              title="Hard"
              subTitle="Try a bigger challenge!"
              gradientColors={["#FFC27A", "#FFB14B", "#FF9F1C"]}
              onQuizButtonPress={() => {
                router.navigate("/pages/HardQuizPage");
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
  // flexGrow helps the screen fill the available height, while space-between separates the quiz cards from the bottom button.
  page: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "space-between",
  },

  // Controls the spacing around the quiz selection content.
  // The padding keeps the badge and cards away from the screen edges.
  container: {
    width: "100%",
    marginTop: 8,
    padding: 16,
  },

  spacer16: {
    height: 16,
  },
});