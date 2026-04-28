import TextBadge from "@/components/badges/TextBadge";
import Header from "@/components/base/Header";
import ScreenBackground from "@/components/base/ScreenBackground";
import ActionButton from "@/components/buttons/ActionButton";
import QuizSelectCard from "@/components/quiz/QuizSelectCard";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function QuizSelectPage() {
  const router = useRouter();

  return (
    <ScreenBackground>
      <View style={styles.page}>
        <View>
          <Header
            title="Quiz"
            leftIconName="arrow-circle-left"
            rightIconName="cog"
            onBackPress={() => {
              router.navigate("/pages/FactsTipsPage");
            }}
            onSettingsPress={() => {
              router.navigate("/pages/SettingsHubPage");
            }}
          />

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
  page: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "space-between",
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