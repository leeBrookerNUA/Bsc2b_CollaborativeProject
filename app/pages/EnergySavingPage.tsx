import Header from "@/components/base/Header";
import ScreenBackground from "@/components/base/ScreenBackground";
import ActionButton from "@/components/buttons/ActionButton";
import InfoCard from "@/components/cards/InfoCard";
import TipsCard from "@/components/cards/TipsCard";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

// This screen gives the user simple energy saving tips. It uses reusable card components to show advice in a clear, child-friendly way.
export default function EnergySavingPage() {

  // Gives access to Expo Router so the user can move between pages.
  const router = useRouter();

  return (
    <ScreenBackground>

      {/* Main page layout. The tips content is kept near the top, while the Back Home button stays near the bottom of the screen. */}
      <View style={styles.page}>
        <View>
          
          <Header
            title="Energy Saving Tips"
            leftIconName="arrow-circle-left"
            rightIconName="cog"
            onBackPress={() => {
              router.navigate("/pages/FactsTipsPage");
            }}
            onSettingsPress={() => {
              router.navigate("/pages/SettingsHubPage");
            }}
          />

          {/* Container adds padding around the page content so the cards do not touch the edges of the screen. */}
          <View style={styles.container}>

            {/* Adds space between the header and the first information card. */}
            <View style={styles.spacer16} />
            
            <InfoCard
              title="What YOU can do to help!"
              subtitle="Small actions can save energy every day!"
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
            
            <View style={styles.spacer16} />
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
  // flexGrow helps the screen fill the available height, while space-between separates the content from the bottom button.
  page: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "space-between",
  },

  // Controls the spacing around the tips content.
  // The padding keeps the cards away from the screen edges.
  container: {
    width: "100%",
    marginTop: 8,
    padding: 16,
  },

  spacer16: {
    height: 16,
  },
});