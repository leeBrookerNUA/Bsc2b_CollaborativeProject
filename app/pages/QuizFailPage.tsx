import Header from "@/components/base/Header";
import ScreenBackground from "@/components/base/ScreenBackground";
import ActionButton from "@/components/buttons/ActionButton";
import FunFactCard from "@/components/cards/FunFactCard";
import QuizResultCard from "@/components/quiz/QuizResultCard";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

// This screen is shown when the user does not pass the quiz. It gives encouragement, lets the user try again, and shows a fun fact to help them keep learning.
export default function QuizFailPage() {

  // Gives access to Expo Router so the user can move between pages.
  const router = useRouter();

  return (
    <ScreenBackground>

      {/* Main page layout. The menu content is kept near the top, while the Back Home button stays near the bottom of the screen. */}
      <View style={styles.page}>
        <View>
      
          <Header
            title="Quiz Complete"
            leftIconName="arrow-circle-left"
            rightIconName="cog"
            onBackPress={() => {
              router.navigate("/pages/QuizSelectPage");
            }}
            onSettingsPress={() => {
              router.navigate("/pages/SettingsHubPage");
            }}
          />

          {/* Container adds padding around the result content so the cards and buttons do not touch the screen edges.*/}
          <View style={styles.container}>

            <View style={styles.spacer16} />

            <QuizResultCard
              iconLibrary="MaterialCommunityIcons"
              iconName1="thought-bubble"
              title="Good Try!"
              subTitle="Let's learn more facts and try again!"
              subText="You're getting better every time!"
              gradientColors={["#FFC27A", "#FFB14B", "#FF9F1C"]}
            />

            <View style={styles.spacer16} />

            <ActionButton
              title="Try Again"
              backgroundColor="rgba(255, 159, 28, 0.75)"
              pressedBackgroundColor="rgba(230, 120, 0, 0.85)"
              onBackHomePress={() => {
                router.navigate("/pages/QuizSelectPage");
              }}
            />

            <View style={styles.spacer16} />

            <FunFactCard
              title="Live Fun Fact!"
              subtitle="It takes around 200 cranks to fully charge one battery!"
              button="Learn More"
              onMorePress={() => {
                router.navigate("/pages/FunFactsPage");
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
  // flexGrow helps the screen fill the available height, while space-between separates the result content from the bottom button.
  page: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "space-between",
  },

  // Controls the spacing around the result content.
  // The padding keeps the cards and button away from the screen edges.
  container: {
    width: "100%",
    marginTop: 8,
    padding: 16,
  },

  spacer16: {
    height: 16,
  },
});