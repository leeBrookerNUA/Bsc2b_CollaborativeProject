import BackHomeCard from "@/components/BackHomeCard";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import ScreenBackground from "@/components/ScreenBackground";
import TipsCard from "@/components/TipsCard";
import React from "react";
import { StyleSheet, View } from "react-native";


export default function EnergySavingPage() {
  return (

    <ScreenBackground>
      <View style={styles.page}>
        <View>

          <Header
            title="Instructions"
            leftIconName="arrow-circle-left"
            rightIconName="cog"
            onBackPress={() => console.log("Back Pressed")}
            onSettingsPress={() => console.log("Settings Pressed")}
          />
          <View style={styles.padding16} >

            <View style={styles.spacer24} />

            <InfoCard
              title="What YOU can do to help!"
              subtitle="Small actions can gave energy everyday!"
            />

            <View style={styles.spacer16} />

            <TipsCard
              iconName="power-off"
              title="Turn off toys when not in use"
            />
            <View style={styles.spacer16} />

            <TipsCard
              iconName="sun-o"
              title="Use sunlight when possible"
            />

            <View style={styles.spacer16} />

            <TipsCard
              iconName="bolt"
              title="Charge only when needed"
            />

            <View style={styles.spacer16} />

            <TipsCard
              iconName="plug"
              title="Ask an adult to unplug chargers"
            />

            <View style={styles.spacer20} />

          </View>
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