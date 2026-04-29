import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenBackgroundProps {
  // Content that will be displayed on top of the background.
  children: React.ReactNode;
}

// ScreenBackground is a reusable layout component used on app screens.
// It provides the safe area, blue gradient background, star image overlay,
// and scrollable content area used across the app.
export default function ScreenBackground({ children }: ScreenBackgroundProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/*
        LinearGradient creates the main blue background for the screen.
        The rgba colours allow the background to have a softer layered look.
      */}
      <LinearGradient
        colors={["rgba(58, 134, 255, 0.75)", "rgba(111, 177, 255, 0.75)"]}
        style={styles.container}
      >
        {/*
          ImageBackground adds the star pattern on top of the gradient.
          This gives every page the same playful visual style.
        */}
        <ImageBackground
          source={require("../../assets/stars-bg.png")}
          style={styles.starsBackground}
          imageStyle={styles.starsImage}
        >
          {/*
            ScrollView allows the page content to scroll if it does not fit
            on smaller screens or when the content becomes taller.
          */}
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* Renders the screen content passed inside ScreenBackground. */}
            {children}
          </ScrollView>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Makes the screen respect safe areas such as notches and status bars.
  safeArea: {
    flex: 1,
  },

  // Allows the gradient to fill the whole available screen.
  container: {
    flex: 1,
  },

  // Allows the star image background to fill the whole screen.
  starsBackground: {
    flex: 1,
  },

  // Controls how the star image is displayed.
  // opacity makes the stars softer so they do not distract from the content.
  starsImage: {
    resizeMode: "cover",
    opacity: 0.7,
  },

  // Controls the spacing for all screen content.
  // flexGrow helps the content fill the screen while still allowing scrolling.
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 28,
  },
});