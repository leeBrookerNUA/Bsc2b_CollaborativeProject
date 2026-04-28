import ScreenBackground from "@/components/base/ScreenBackground";
import { useRouter } from 'expo-router';
import React, { useRef, useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, View, useWindowDimensions } from "react-native";
import Header from "../../components/base/Header";
import PaginationDots from "../../components/base/PaginationDots";
import ActionButton from "../../components/buttons/ActionButton";
import PillButton from "../../components/buttons/PillButton";
import FactCard from "../../components/cards/FactCard";
import { factData } from "../../data/factData";

export default function FunFactsPage() {
  const router = useRouter();
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
            onBackPress={() => {
              router.navigate('/pages/FactsTipsPage')
            }}
            onSettingsPress={() => {
              router.navigate('/pages/SettingsHubPage')
            }}
          />

          <View style={styles.spacer16} />

          <View style={styles.pillRow}>
            <PillButton
              title="Solar"
              selected={selectedPill === "Solar"}
              tintColor="#EBC50A"
              onPillPress={() => {
                setSelectedPill("Solar");
                setCurrentFactIndex(0);
                scrollRef.current?.scrollTo({ x: 0, animated: false });
              }}
            />

            <PillButton
              title="Wind"
              selected={selectedPill === "Wind"}
              tintColor="#4DDB7A"
              onPillPress={() => {
                setSelectedPill("Wind");
                setCurrentFactIndex(0);
                scrollRef.current?.scrollTo({ x: 0, animated: false });
              }}
            />

            <PillButton
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
              const safeIndex = Math.max(0, Math.min(index, currentFacts.length - 1));

              setCurrentFactIndex(safeIndex);
            }}
          >
            {currentFacts.map((fact, index) => (
              <View
                key={index}
                style={{
                  width: slideWidth,
                  marginRight: index === currentFacts.length - 1 ? 0 : slideGap,
                }}
              >
                <FactCard
                  iconLibrary={fact.iconLibrary}
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


        <ActionButton
          title="Back Home"
          backgroundColor="rgba(255, 255, 255, 0.22)"
          pressedBackgroundColor="rgba(255, 255, 255, 0.35)"
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
    width: "100%",
    justifyContent: "space-between",
  },

  spacer16: {
    height: 16,
  },

  pillRow: {
    flexDirection: "row",
    gap: 8,
  },
});