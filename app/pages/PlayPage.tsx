import ActionButton from "@/components/ActionButton";
import BadgeCard from "@/components/BadgeCard";
import BatteryCard from "@/components/BatteryCard";
import FunFactCard from "@/components/FunFactCard";
import Header from "@/components/Header";
import ScreenBackground from "@/components/ScreenBackground";
import StatCard from "@/components/StatCard";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import HelpTipCard from "../../components/HelpTipCard";

export default function PlayPage() {
  const router = useRouter();

  return (
    <ScreenBackground>
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

          <View style={styles.container}>
            <View style={styles.spacer16} />

            <BatteryCard
              title="Hand Crank is Turning!"
              subtitle="Charging Battery..."
              chargeText="65% Charged!"
              remainingText="120 Cranks Remaining"
              fillPercent={65}
            />

            <View style={styles.spacer16} />

            <BadgeCard title="Hand Crank Active!" iconName="refresh-cw" />

            <View style={styles.spacer16} />

            <View style={styles.statsRow}>
              <StatCard
                iconLibrary="AntDesign"
                iconName="clock-circle"
                value="2"
                title="hours"
                iconColor="#FF9F1C"
                iconBgColor="rgba(255, 159, 28, 0.12)"
              />

              <StatCard
                iconLibrary="Feather"
                iconName="refresh-cw"
                value="120"
                title="cranks left"
                iconColor="#3A86FF"
                iconBgColor="rgba(58, 134, 255, 0.12)"
              />

              <StatCard
                iconLibrary="MaterialIcons"
                iconName="bolt"
                value="4.8W"
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

  statsRow: {
    flexDirection: "row",
    gap: 8,
  },

  spacer16: {
    height: 16,
  },
});