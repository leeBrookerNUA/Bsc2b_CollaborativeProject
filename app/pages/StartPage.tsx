import IconBadge from "@/components/badges/IconBadge";
import Header from "@/components/base/Header";
import ScreenBackground from "@/components/base/ScreenBackground";
import ActionButton from "@/components/buttons/ActionButton";
import BatteryCard from "@/components/cards/BatteryCard";
import FunFactCard from "@/components/cards/FunFactCard";
import StatCard from "@/components/cards/StatCard";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import HelpTipCard from "../../components/cards/HelpTipCard";

// This screen shows the main play area of the app. It displays the toy battery status, charging activity, useful stats, a live fun fact, and a helpful charging tip.
export default function StartPage() {

  // Placeholder battery charge state
  const [batteryCharge, _setBatteryCharge] = useState<number>(65);

  // Placeholder power recieved state
  const [powerRecieved, _setPowerRecieved] = useState<number>(4.5);

  // Placeholder cranks remaining state
  const [cranksRemaining, _setCranksRemaining] = useState<number>(125);

  // Placeholder time left state
  const [timeLeft, _setTimeLeft] = useState<number>(2.5);

  // Gives access to Expo Router so the user can move between pages.
  const router = useRouter();

  return (
    <ScreenBackground>

      {/* Main page layout. The menu content is kept near the top, while the Back Home button stays near the bottom of the screen. */}
      <View style={styles.page}>
        <View>

          <Header
            title="Play"
            leftIconName="arrow-circle-left"
            rightIconName="cog"
            onBackPress={() => {
              router.navigate("/pages/HomePage");
            }}
            onSettingsPress={() => {
              router.navigate("/pages/SettingsHubPage");
            }}
          />

          {/* Container adds padding around the play screen content so the cards do not touch the edges of the screen. */}
          <View style={styles.container}>

            <View style={styles.spacer16} />

            {/* Battery card shows the current charging status. It displays the activity, battery percentage, and remaining cranks.*/}
            <BatteryCard
              title="Hand Crank is Turning!"
              subtitle="Charging Battery..."
              chargeText={`${batteryCharge}% Charged!`}
              remainingText={`${cranksRemaining} Cranks Left`}
              fillPercent={batteryCharge}
            />

            <View style={styles.spacer16} />

            {/* Status badge highlights the current charging method. In this case, it shows that the hand crank is active. */}
            <IconBadge title="Hand Crank Active!" iconName="refresh-cw" />

            <View style={styles.spacer16} />

            {/* Stats row displays key charging information side by side. Each StatCard shows one small piece of data with its own icon. */}
            <View style={styles.statsRow}>

              <StatCard
                iconLibrary="AntDesign"
                iconName="clock-circle"
                value={`${timeLeft}`}
                title="hours"
                iconColor="#FF9F1C"
                iconBgColor="rgba(255, 159, 28, 0.12)"
              />

              <StatCard
                iconLibrary="Feather"
                iconName="refresh-cw"
                value={`${cranksRemaining}`}
                title="cranks left"
                iconColor="#3A86FF"
                iconBgColor="rgba(58, 134, 255, 0.12)"
              />

              <StatCard
                iconLibrary="MaterialIcons"
                iconName="bolt"
                value={`${powerRecieved}W`}
                title="power"
                iconColor="#2ECC71"
                iconBgColor="rgba(46, 204, 113, 0.12)"
              />
            </View>

            <View style={styles.spacer16} />


            <FunFactCard
              title="Live Fun Fact!"
              subtitle="It takes around 200 cranks to fully charge one battery!"
              button="Learn More"
              onMorePress={() => {
                router.navigate("/pages/FunFactsPage");
              }}
            />

            <View style={styles.spacer16} />

            <HelpTipCard
              title="Keep turning steadily to charge faster!"
              iconName="question"
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
  // flexGrow helps the screen fill the available height, while space-between separates the play content from the bottom button.
  page: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "space-between",
  },

  // Controls the spacing around the play content.
  // The padding keeps the cards away from the screen edges.
  container: {
    width: "100%",
    marginTop: 8,
    padding: 16,
  },

  // Places the stat cards in a horizontal row.
  // The gap keeps equal spacing between each stat card.
  statsRow: {
    flexDirection: "row",
    gap: 8,
  },

  spacer16: {
    height: 16,
  },
});