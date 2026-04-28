import ActionButton from "@/components/ActionButton";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import ScreenBackground from "@/components/ScreenBackground";
import TipsCard from "@/components/TipsCard";
import { useRouter } from 'expo-router';
import React from "react";
import { StyleSheet, View } from "react-native";


export default function EnergySavingPage() {
  const router = useRouter();
  return (

    <ScreenBackground>
      <View style={styles.page}>
        <View>

          <Header
            title="Energy Saving Tips"
            leftIconName="arrow-circle-left"
            rightIconName="cog"
            onBackPress={() => {
              router.navigate('/pages/FactsTipsPage')
            }}
            onSettingsPress={() => {
              router.navigate('/pages/SettingsHubPage')
            }}
          />
          <View style={styles.padding16} >

            <View style={styles.spacer24} />

            <InfoCard
              title="What YOU can do to help!"
              subtitle="Small actions can gave energy everyday!"
              gradientColors={["#8EF0B3", "#5EDC95", "#2ECC71"]}
            />

            <View style={styles.spacer16} />

            <TipsCard
            iconLibrary="AntDesign"
              iconName="poweroff"
              title="Turn off toys when not in use"
            />
            <View style={styles.spacer16} />

            <TipsCard
            iconLibrary="AntDesign"
              iconName="sun"
              title="Use sunlight when possible"
            />

            <View style={styles.spacer16} />

            <TipsCard
            iconLibrary="MaterialIcons"
              iconName="bolt"
              title="Charge only when needed"
            />

            <View style={styles.spacer16} />

            <TipsCard
            iconLibrary="MaterialCommunityIcons"
              iconName="power-plug-outline"
              title="Ask an adult to unplug chargers"
            />

            <View style={styles.spacer20} />

          </View>
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
    flexGrow: 1,
    justifyContent: "space-between",
    
  },
  padding16: {
    padding: 16,
  },
  spacer16: {
    height: 12,
  },
  spacer20: {
    height: 20,
  },
  spacer24: {
    height: 24,
  },
});