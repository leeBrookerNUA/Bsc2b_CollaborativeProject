import ScreenBackground from "@/components/base/ScreenBackground";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, View, useWindowDimensions } from "react-native";
import Header from "../../components/base/Header";
import PaginationDots from "../../components/base/PaginationDots";
import ActionButton from "../../components/buttons/ActionButton";
import PillButton from "../../components/buttons/PillButton";
import FactCard from "../../components/cards/FactCard";
import { factData } from "../../data/factData";

// This screen displays fun facts about different energy types. The user can choose a category using pill buttons and swipe through fact cards.
export default function FunFactsPage() {

  // Gives access to Expo Router so the user can move between pages.
  const router = useRouter();

  // Stores which fact category is currently selected.
  // This controls which set of facts is shown in the carousel.
  const [selectedPill, setSelectedPill] = useState("Solar");

  // Tracks which fact card is currently active.                                           
  // This is used to update the pagination dots below the cards.
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  // Creates a reference to the ScrollView.
  // This allows the page to scroll back to the first fact when the category changes.
  const scrollRef = useRef<ScrollView>(null);

  // Gets the correct facts from factData based on the selected category.
  const currentFacts = factData[selectedPill as keyof typeof factData];

  // Gets the current screen width so the fact cards can size responsively.
  const { width } = useWindowDimensions();

  // Calculates the width of the main card area based on the screen width.
  const cardWidth = width - 32;

  // Sets the width of each slide inside the horizontal carousel.
  const slideWidth = cardWidth - 36;

  // Sets the gap between each fact card in the carousel.
  const slideGap = 12;

  // Adds equal spacing on both sides so the cards sit neatly inside the screen.
  const sideSpacing = (cardWidth - slideWidth) / 2;

  return (
    <ScreenBackground>

      {/* Main page layout. The menu content is kept near the top, while the Back Home button stays near the bottom of the screen. */}
      <View style={styles.page}>
        <View>
         
          <Header
            title="Fun Facts"
            leftIconName="arrow-circle-left"
            rightIconName="cog"
            onBackPress={() => {
              router.navigate("/pages/FactsTipsPage");
            }}
            onSettingsPress={() => {
              router.navigate("/pages/SettingsHubPage");
            }}
          />

          {/* Adds space between the header and the category buttons. */}
          <View style={styles.spacer16} />

          {/* Pill buttons let the user choose which category of facts to view.  When a new category is selected, the carousel resets back to the first card. */}
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

          {/* Horizontal ScrollView creates a swipeable carousel of fact cards. snapToInterval makes each card snap neatly into place when swiping. */}
          <ScrollView
            ref={scrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={slideWidth + slideGap}
            decelerationRate="fast"
            snapToAlignment="start"
            contentContainerStyle={{ paddingHorizontal: sideSpacing }}
            onMomentumScrollEnd={(
              event: NativeSyntheticEvent<NativeScrollEvent>
            ) => {

              // Gets how far the user has scrolled horizontally.
              const offsetX = event.nativeEvent.contentOffset.x;

              // Converts the scroll position into the nearest card index.
              const index = Math.round(offsetX / (slideWidth + slideGap));

              // Keeps the index within the valid range of available facts.
              const safeIndex = Math.max(
                0,
                Math.min(index, currentFacts.length - 1)
              );

              // Updates the active pagination dot.
              setCurrentFactIndex(safeIndex);
            }}
          >
            {/* Loops through the facts in the selected category and displays each one inside a reusable FactCard component. */}
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

          {/* Pagination dots show which fact card the user is currently viewing. */}
          <PaginationDots
            total={currentFacts.length}
            activeIndex={currentFactIndex}
          />

          <View style={styles.spacer16} />
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

  spacer16: {
    height: 16,
  },

  // Places the category pill buttons in a horizontal row.
  // The gap property keeps equal spacing between each button.
  pillRow: {
    flexDirection: "row",
    gap: 8,
  },
});