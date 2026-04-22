import BackHomeCard from "@/components/BackHomeCard";
import FactCard from "@/components/FactCard";
import Header from "@/components/Header";
import PillButtonCard from "@/components/PillButtonCard";
import ScreenBackground from "@/components/ScreenBackground";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";


export default function InstructionsScreen() {
  const [selectedPill, setSelectedPill] = useState("Solar");
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

          <View style={styles.spacer24} />

          <View style={styles.pillRow}>

          <PillButtonCard
          title="Solar"
          selected={selectedPill === "Solar"}
          onPillPress={() => setSelectedPill("Solar")}

          />

          <PillButtonCard
          title="Wind"
          selected={selectedPill === "Wind"}
          onPillPress={() => setSelectedPill("Wind")}
          />

          <PillButtonCard
          title="Manual"
          selected={selectedPill === "Manual"}
          onPillPress={() => setSelectedPill("Manual")}
          />

          </View>

          <View style={styles.spacer24} />

          <FactCard 
          iconName="solar-panel"
          title="Did you know?"
          subText="Solar panels turn sunlight into electricity and work best in brigt sunlight."
          gradientColors={["#FFE98A", "#FFD84D", "#E0C120"]}

          />


          
          <View style={styles.spacer12} />

          

          <View style={styles.spacer12} />

          

          <View style={styles.spacer12} />

         

          <View style={styles.spacer20} />

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
  spacer12: {
    height: 12,
  },
  spacer20: {
    height: 20,
  },
   spacer24: {
    height: 24,
  },
});