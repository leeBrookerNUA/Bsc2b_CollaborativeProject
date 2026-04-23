import BackHomeCard from "@/components/BackHomeCard";
import FactCard from "@/components/FactCard";
import Header from "@/components/Header";
import PaginationDots from "@/components/PaginationDots";
import PillButtonCard from "@/components/PillButtonCard";
import ScreenBackground from "@/components/ScreenBackground";
import React, { useRef, useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";

const factData = {
  Solar: [
    {
      iconName: "solar-panel" as const,
      title: "Did you know?",
      subText: "Solar panels turn sunlight into electricity and work best in bright sunlight.",
      gradientColors: ["#FFE98A", "#FFD84D", "#E0C120"] as const,
    },
    {
      iconName: "sun" as const,
      title: "Solar fact",
      subText: "Solar energy is renewable and can be used again and again.",
      gradientColors: ["#FFE98A", "#FFD84D", "#E0C120"] as const,
    },
    {
      iconName: "lightbulb" as const,
      title: "Solar tip",
      subText: "Keeping panels clean helps them collect more sunlight.",
      gradientColors: ["#FFE98A", "#FFD84D", "#E0C120"] as const,
    },
  ],
  Wind: [
    {
      iconName: "wind" as const,
      title: "Did you know?",
      subText: "Wind turbines use moving air to help make electricity.",
      gradientColors: ["#8EF0B2", "#4DDB7A", "#2ECC71"] as const,
    },
    {
      iconName: "cloud" as const,
      title: "Wind fact",
      subText: "Wind energy works best in open windy places.",
      gradientColors: ["#8EF0B2", "#4DDB7A", "#2ECC71"] as const,
    },
    {
      iconName: "sync" as const,
      title: "Wind tip",
      subText: "Wind power can work together with solar power.",
      gradientColors: ["#8EF0B2", "#4DDB7A", "#2ECC71"] as const,
    },
  ],
  Manual: [
    {
      iconName: "sync" as const,
      title: "Did you know?",
      subText: "Turning a hand crank changes movement into energy.",
      gradientColors: ["#D2A8FF", "#B97CFF", "#9B5DE5"] as const,
    },
    {
      iconName: "bolt" as const,
      title: "Manual fact",
      subText: "Hand-crank power can work when there is no sun or wind.",
      gradientColors: ["#D2A8FF", "#B97CFF", "#9B5DE5"] as const,
    },
    {
      iconName: "cog" as const,
      title: "Manual tip",
      subText: "Turning steadily often works better than turning too fast.",
      gradientColors: ["#D2A8FF", "#B97CFF", "#9B5DE5"] as const,
    },
  ],
};

export default function InstructionsScreen() {
  const [selectedPill, setSelectedPill] = useState("Solar");
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const currentFacts = factData[selectedPill as keyof typeof factData];
 

  const { width } = useWindowDimensions();
  const cardWidth = width - 32;

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

          <View style={styles.spacer16} />

          <View style={styles.pillRow}>
            <PillButtonCard
              title="Solar"
              selected={selectedPill === "Solar"}
              onPillPress={() => {
                setSelectedPill("Solar");
                setCurrentFactIndex(0);
                scrollRef.current?.scrollTo({ x: 0, animated: false });
              }}
            />

            <PillButtonCard
              title="Wind"
              selected={selectedPill === "Wind"}
              onPillPress={() => {
                setSelectedPill("Wind");
                setCurrentFactIndex(0);
                scrollRef.current?.scrollTo({ x: 0, animated: false });
              }}
            />

            <PillButtonCard
              title="Manual"
              selected={selectedPill === "Manual"}
              onPillPress={() => {
                setSelectedPill("Manual");
                setCurrentFactIndex(0);
                scrollRef.current?.scrollTo({ x: 0, animated: false });
              }}
            />
          </View>

          <View style={styles.spacer16} />

          <ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
              const offsetX = event.nativeEvent.contentOffset.x;
              const index = Math.round(offsetX / cardWidth);
              setCurrentFactIndex(index);
            }}
          >
            {currentFacts.map((fact, index) => (
              <View key={index} style={{ width: cardWidth }}>
                <FactCard
                  iconName={fact.iconName}
                  title={fact.title}
                  subText={fact.subText}
                  gradientColors={fact.gradientColors}
                />
              </View>
            ))}
          </ScrollView>

          <View style={styles.spacer16} />

          <PaginationDots
            total={currentFacts.length}
            activeIndex={currentFactIndex}
          />

          <View style={styles.spacer16} />
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
  spacer16: {
    height: 16,
  },
  spacer24: {
    height: 24,
  },
});