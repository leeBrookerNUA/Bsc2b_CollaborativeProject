import ScreenBackground from "@/components/ScreenBackground";
import React, { useRef, useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, View, useWindowDimensions } from "react-native";
import BackHomeCard from "../../components/BackHomeCard";
import FactCard from "../../components/FactCard";
import Header from "../../components/Header";
import PaginationDots from "../../components/PaginationDots";
import PillButtonCard from "../../components/PillButtonCard";
import { factData } from "../../data/factData";

export default function FunFactsPage() {
  const [selectedPill, setSelectedPill] = useState("Solar");
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const currentFacts = factData[selectedPill as keyof typeof factData];

  const { width } = useWindowDimensions();
  const cardWidth = width - 32;
  const slideWidth = cardWidth - 36;
  const slideGap = 12;
  const sideSpacing = (cardWidth - slideWidth) / 2;

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
              tintColor="#EBC50A"
              onPillPress={() => {
                setSelectedPill("Solar");
                setCurrentFactIndex(0);
                scrollRef.current?.scrollTo({ x: 0, animated: false });
              }}
            />

            <PillButtonCard
              title="Wind"
              selected={selectedPill === "Wind"}
              tintColor="#4DDB7A"
              onPillPress={() => {
                setSelectedPill("Wind");
                setCurrentFactIndex(0);
                scrollRef.current?.scrollTo({ x: 0, animated: false });
              }}
            />

            <PillButtonCard
              title="Manual"
              selected={selectedPill === "Manual"}
              tintColor="#B97CFF"
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
            showsHorizontalScrollIndicator={false}
            snapToInterval={slideWidth + slideGap}
            decelerationRate="fast"
            snapToAlignment="start"
            contentContainerStyle={{ paddingHorizontal: sideSpacing }}
            onMomentumScrollEnd={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
              const offsetX = event.nativeEvent.contentOffset.x;
              const index = Math.round(offsetX / (slideWidth + slideGap));
              setCurrentFactIndex(index);
            }}
          >
            {currentFacts.map((fact, index) => (
              <View key={index} style={{ width: slideWidth, marginRight: slideGap }}>
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