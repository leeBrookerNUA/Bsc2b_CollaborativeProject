import ActionButton from "@/components/ActionButton";
import Header from "@/components/Header";
import NoIconBadgeCard from "@/components/NoIconBadgeCard";
import QuizSelectCard from "@/components/QuizSelectCard";
import ScreenBackground from "@/components/ScreenBackground";
import { useRouter } from 'expo-router';
import React from "react";
import { StyleSheet, View } from "react-native";


export default function QuizSelectPage() {
  const router = useRouter();

  return (
    <ScreenBackground>

      <View style={styles.page}>
        <View>

          <Header
            title="Fun Facts"
            leftIconName="arrow-circle-left"
            rightIconName="cog"
            onBackPress={() => {
              router.navigate('/pages/FactsTipsPage')
            }}
            onSettingsPress={() => {
              router.navigate('/pages/SettingsHubPage')
            }}
          />

          <View style={styles.spacer16} />

          <NoIconBadgeCard
            title="Choose what you want to explore!"
          />

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

          <View style={styles.spacer16} />
        </View>

        <ActionButton
          title="Back Home"
          onBackHomePress={() => {
            router.navigate('/pages/HomePage')
          }}
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